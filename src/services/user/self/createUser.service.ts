import jwt from "jsonwebtoken";
import { PrismaClient, Prisma, Users } from "@prisma/client";
import { errorHandler } from "../../../error/errorHandler";
import { ICreateUser } from "../../../interfaces/admin/createUser"; 
import { hash } from "bcryptjs";
import { htmlBody } from "../../../html";
import sendEmail from "../../../utils/nodemailer.util";
import { prisma } from "../../../app";

export const createUserService = async ({
  name,
  email,
  password,
  cpf,
  age,
  avatar,
}: ICreateUser) : Promise<Users> => {

  const findUserEmail = await prisma.users.findUnique({ where: { email } });

  if (findUserEmail) {
    throw new errorHandler(409, "this email is already registered");
  }

  const findUserCpf = await prisma.users.findUnique({ where: { email } });

  if (findUserCpf) {
    throw new errorHandler(409, "this cpf is already registered");
  }

  function cpfChecker(cpf: any) {
    const newCPF = cpf.replace(/[.-]/gi, "").split("");
    const tenth =
      ((cpf
        .replace(/[.-]/gi, "")
        .split("")
        .slice(0, -2)
        .reduce((acc: any, ele: any, ind: any) => acc + ele * (10 - ind), 0) *
        10) %
        11) %
      10;
    const eleventh =
      ((cpf
        .replace(/[.-]/gi, "")
        .split("")
        .slice(0, -1)
        .reduce((acc: any, ele: any, ind: any) => acc + ele * (11 - ind), 0) *
        10) %
        11) %
      10;
    return tenth == newCPF[9] && eleventh == newCPF[10];
  }

  if (!cpfChecker(cpf)) {
    throw new errorHandler(409, "this cpf is not valid");
  }

  const hashedPassword = await hash(password, 10);

  const createUSer = await prisma.users.create({
    data: { name, email, password: hashedPassword, cpf, age, avatar, isActive : true, isAdm: false, isVerify: false },
  });

  const token = jwt.sign(
    {
      isActive: createUSer.isActive,
    },
    process.env.SECRET_KEY as string,
    {
      subject: createUSer.id,
      expiresIn: "24h",
    }
  );
  const html = htmlBody(token, "Click on the button to activate you account!");
  sendEmail({ to: email, subject: "Confirm your email", html });

  return createUSer
};
