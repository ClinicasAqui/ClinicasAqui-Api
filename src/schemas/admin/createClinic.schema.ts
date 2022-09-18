// import * as yup from "yup";
// import { SchemaOf } from "yup";
// import {
//   ICreateCLinic,
//   IUpdateClinicAddress,
// } from "../../interfaces/admin/createUser";

// export const createClinicSchema: SchemaOf<ICreateCLinic> = yup.object().shape({
//   name: yup
//     .string()
//     .default("name must be a string")
//     .required("name is required"),
//   cnpj: yup
//     .string()
//     .default("cnpj must be a string")
//     .matches(
//       /\d{2}[.]?\d{3}[.]?\d{3}[\/]?\d{4}[-]?\d{2}/g,
//       "this not valid CNPJ format, try : 00.000.000/0000-00"
//     ),
//   authenticated: yup.boolean(),
//   descripition: yup.string().default("descripition must be a string"),
//   avatar: yup.string().default("avatar must be a string"),
//   phone: yup.string().default("phone must be a string"),
//   clinicAddress: yup.object().shape({
//     country: yup
//       .string()
//       .default("country must be a string")
//       .required("country is required"),
//     city: yup
//       .string()
//       .default("city must be a string")
//       .required("city is required"),
//     state: yup
//       .string()
//       .default("state must be a string")
//       .required("state is required"),
//     zipCode: yup
//       .string()
//       .default("zipCode must be a string")
//       .required("zipCode is required"),
//     distict: yup
//       .string()
//       .default("distict must be a string")
//       .required("distict is required"),
//     way: yup
//       .string()
//       .default("way must be a string")
//       .required("way is required"),
//     number: yup
//       .string()
//       .default("number must be a string")
//       .required("number is required"),
//   }),
//   CorporationName: yup.string(),
//   treatments: yup.array().of(yup.mixed().oneOf([yup.string()])),
//   insurance: yup.array().of(yup.mixed().oneOf([yup.string()])),
//   healthPlan: yup.array().of(yup.mixed().oneOf([yup.string()])),
// });

// export const updateClinicAddressSchema: SchemaOf<IUpdateClinicAddress> = yup
//   .object()
//   .shape({
//     country: yup
//       .string()
//       .default("country must be a string")
//       .required("country is required"),
//     city: yup
//       .string()
//       .default("city must be a string")
//       .required("city is required"),
//     state: yup
//       .string()
//       .default("state must be a string")
//       .required("state is required"),
//     zipCode: yup
//       .string()
//       .default("zipCode must be a string")
//       .required("zipCode is required"),
//     distict: yup
//       .string()
//       .default("distict must be a string")
//       .required("distict is required"),
//     way: yup
//       .string()
//       .default("way must be a string")
//       .required("way is required"),
//     number: yup
//       .string()
//       .default("number must be a string")
//       .required("number is required"),
//   });
