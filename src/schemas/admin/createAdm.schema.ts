import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICreateUser } from "../../interfaces/admin/createUser";

export const createAdmSchema: SchemaOf<ICreateUser> = yup.object().shape({
  name: yup.string().default("name must be a string").required("name is required"),
  email: yup.string().default("email must be a string").required("email is required").email("must be a valid email"),
  password: yup.string().default("password must be a string").matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
    "password must contain at least one number one lowercase one uppercase and eight characters"
  ).required("password is required"),
  cpf: yup.string().default("cpf must be a string").matches(/(\d{3}.?\d{3}.?\d{3}-?\d{2})/g, "invalid cpf format").required("cpf is required"),
  age: yup.number().required("age is required"),
  avatar: yup.string()
});
