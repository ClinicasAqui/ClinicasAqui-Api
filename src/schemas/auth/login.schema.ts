import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserSession } from "../../interfaces/auth"; 

export const loginSchema: SchemaOf<IUserSession> = yup.object().shape({
  email: yup.string().default("email must be a string").required("email is required").email("must be a valid email"),
  password: yup.string().default("password must be a string").matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
    "password must contain at least one number one lowercase one uppercase and eight characters"
  ).required("password is required"),
});
