import * as yup from "yup";

export const schemaRegister = yup.object({
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
  zipCode: yup
    .string()
    .required("Cep obrigatório")
    .min(8, "Mínimo de 8 digitos")
    .max(8, "Máximo de 8 digitos"),
  state: yup.string().required("Estado obrigatório"),
  city: yup.string().required("Cidade obrigatório"),
  street: yup.string().required("Rua obrigatório"),
  number: yup.number().required("Número obrigatório"),
  complement: yup.string().required("Complemento obrigatório"),
  password: yup
    .string()
    .required("Senha Obrigatória")
    .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),

  ConfirmedPassword: yup
    .string()
    .required("Senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});
