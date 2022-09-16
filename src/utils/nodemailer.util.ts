import "dotenv/config";
import { createTransport } from "nodemailer";
import { errorHandler } from "../error/errorHandler";
import { IEmailRequest } from "../interfaces/email";

const sendEmail = async ({ to, subject, html, text }: IEmailRequest) => {
  const transporter = createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PWD,
    },
  });

  await transporter
    .sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html: html || text,
    })
    .then(() => {
      console.log("email send with sucess");
    })
    .catch((error) => {
      throw new errorHandler(403, `An error has occurred ${error}`);
    });
};

export default sendEmail;