import * as yup from "yup";

const today = new Date(Date.now());
export const announceSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  year: yup
    .number()
    .typeError("Ano inválido")
    .min(1885, "Ano inválido")
    .max(today.getFullYear(), "Ano inválido")
    .required("Campo obrigatório"),
  km: yup
    .number()
    .typeError("Quilometragem Inválida")
    .required("Campo obrigatório"),
  price: yup.string().typeError("Preço inválido").required("Campo Obrigatório"),
  description: yup.string().required("Campo obrigatório"),
  capeImage: yup
    .string()
    .url("Insira uma URL válida")
    .required("Imagem de capa Obrigatória"),
  img1: yup
    .string()
    .url("Insira uma URL válida")
    .required("Obrigatório pelo menos duas imagens"),
  img2: yup
    .string()
    .url("Insira uma URL válida")
    .required("Obrigatório pelo menos duas imagens"),
  img3: yup.string(),
  img4: yup.string(),
  img5: yup.string(),
  img6: yup.string(),
});
