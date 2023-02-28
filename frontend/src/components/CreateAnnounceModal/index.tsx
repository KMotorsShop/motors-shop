import AnnounceForm from "../AnnounceForm";
import * as yup from "yup";
import api from "../../services/api";

const CreateAnnounceModal = () => {
  const createAnnounceSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    year: yup.number().typeError("Ano inválido").required("Campo obrigatório"),
    km: yup
      .number()
      .typeError("Quilometragem Inválida")
      .required("Campo obrigatório"),
    price: yup
      .number()
      .typeError("Preço inválido")
      .required("Campo Obrigatório"),
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
  const onSubmitFunction = (data: any) => {
    console.log(data);

    const images = [
      data.capeImage,
      data.img1,
      data.img2,
      data.img3,
      data.img4,
      data.img5,
      data.img6,
    ];

    const sendData = {
      name: data.name,
      year: data.year,
      km: data.km,
      price: data.price,
      description: data.description,
      type: data.type,
      images,
    };

    api.post("/ads", sendData).then((res) => console.log(res));
  };
  return (
    <AnnounceForm
      schema={createAnnounceSchema}
      onSubmitFunction={onSubmitFunction}
    />
  );
};

export default CreateAnnounceModal;
