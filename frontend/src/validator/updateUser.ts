import * as yup from "yup";

export const schemaUpdate = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email invalido"),
  cpf: yup
    .string()
    .required("Cpf obrigatório")
    .min(11, "Mínimo de 11 digitos")
    .max(11, "Máximo de 11 digitos"),
  cellphone: yup.string().required("Celular obrigatório"),
  birthdate: yup.string().required("Data obrigatória"),
  description: yup.string().required("Descrição obrigatória"),
});
