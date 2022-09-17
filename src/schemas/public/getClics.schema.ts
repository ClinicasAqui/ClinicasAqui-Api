import * as yup from "yup";
import { SchemaOf } from "yup";
import { uuid } from "../../interfaces/public";

export const clinicUuid: SchemaOf<uuid> = yup.object().shape({
  id: yup.string().required(),
});
