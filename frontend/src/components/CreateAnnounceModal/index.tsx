import AnnounceForm from "../AnnounceForm";
import * as yup from "yup";
import api from "../../services/api";
import ReactModal from "react-modal";
import { useEffect, useState } from "react";
import BasicModal from "../BasicModal";
import { BrandButton, OutlineButton } from "../../styles/Buttons";
import { ModalStatusMessage } from "../../styles/Containers";
import { Heading7, Text } from "../../styles/Texts";
import { fullParseInt } from "../../tools/formatters";

const CreateAnnounceModal = () => {
  const [modalIsOpen, setModalOpen] = useState<boolean>(false);
  const [announceWasCreated, setAnnounceCreated] = useState(false);
  const [title, setTitle] = useState<string>("");
  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setAnnounceCreated(false);
  };

  useEffect(() => {
    if (announceWasCreated) {
      setTitle("Sucesso!");
    } else {
      setTitle("Criar anúncio");
    }
  }, [announceWasCreated]);

  const today = new Date(Date.now());

  const createAnnounceSchema = yup.object().shape({
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
    price: yup
      .string()
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
    const images = [
      data.capeImage,
      data.img1,
      data.img2,
      data.img3,
      data.img4,
      data.img5,
      data.img6,
    ].filter((img) => img != undefined);

    const sendData = {
      name: data.name,
      year: data.year,
      km: data.km,
      price: fullParseInt(data.price),
      description: data.description,
      type: data.type,
      images,
    };

    api.post("/ads", sendData).then((res) => {
      res.status === 201 ? setAnnounceCreated(true) : null;
    });
  };

  return (
    <div>
      <OutlineButton variant="brand" onClick={openModal}>
        Criar anúncio
      </OutlineButton>
      <BasicModal
        title={title}
        isOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        {announceWasCreated ? (
          <ModalStatusMessage>
            <Heading7>Seu anúncio foi criado com sucesso!</Heading7>
            <Text color="grey2">
              Agora você poderá ver seus negócios crescendo em grande escala
            </Text>
          </ModalStatusMessage>
        ) : (
          <AnnounceForm
            schema={createAnnounceSchema}
            onSubmitFunction={onSubmitFunction}
            closeContainingModal={closeModal}
          />
        )}
      </BasicModal>
    </div>
  );
};

export default CreateAnnounceModal;
