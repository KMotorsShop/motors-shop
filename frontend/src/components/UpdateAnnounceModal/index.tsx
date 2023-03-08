import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import * as yup from "yup";
import AnnounceFormUpdate from "../AnnounceFormUpdate";
import BasicModal from "../BasicModal";
import {
  OutlineButton,
  BaseButton,
  FeedBackButton,
} from "../../styles/Buttons";
import { fullParseInt } from "../../tools/formatters";
import { Flex, ModalStatusMessage } from "../../styles/Containers";
import { Heading7, Text } from "../../styles/Texts";
import DeleteAnnounceModal from "../DeleteAnnounceModal";
import { AdsAuthContext } from "../../context/AdsContext";

interface UpdateAnnounceModalProps {
  id: string;
}

const UpdateAnnounceModal = ({ id }: UpdateAnnounceModalProps) => {
  const { vehicles, setVehicles } = useContext(AdsAuthContext);
  const today = new Date(Date.now());

  const updateAnnounceSchema = yup.object().shape({
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

    const sendData: any = {
      name: data.name,
      year: data.year,
      km: data.km,
      price: fullParseInt(data.price),
      description: data.description,
      type: data.type,
      isActive: data.isActive,
      images,
    };

    api.patch(`/ads/${id}`, sendData).then((res) => {
      setAnnounceUpdated(true);
      setVehicles([sendData, ...vehicles]);
    });
  };

  const [modalIsOpen, setModalOpen] = useState<boolean>(false);
  const [announceWasUpdated, setAnnounceUpdated] = useState(false);
  const [isDeletingAnnounce, setDeleting] = useState(false);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (announceWasUpdated) {
      setTitle("Sucesso!");
    } else if (isDeletingAnnounce) {
      setTitle("Excluir anúncio");
    } else {
      setTitle("Editar anúncio");
    }
  }, [announceWasUpdated]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setAnnounceUpdated(false);
    setDeleting(false);
  };

  const showDeleteWarning = () => {
    setDeleting(true);
  };

  return (
    <div>
      <OutlineButton variant="grey" size="medium" onClick={openModal}>
        Editar Anúncio
      </OutlineButton>
      <BasicModal
        title={title}
        isOpen={modalIsOpen}
        closeModal={closeModal}
        openModal={openModal}
      >
        {!isDeletingAnnounce ? (
          <>
            {announceWasUpdated ? (
              <ModalStatusMessage>
                <Heading7>Seu anúncio foi atualizado com sucesso!</Heading7>
                <Text color="grey2">
                  Agora você poderá ver seus negócios crescendo em grande escala
                </Text>
              </ModalStatusMessage>
            ) : (
              <AnnounceFormUpdate
                id={id}
                schema={updateAnnounceSchema}
                onSubmitFunction={onSubmitFunction}
                closeContainingModal={showDeleteWarning}
              />
            )}
          </>
        ) : (
          <DeleteAnnounceModal id={id} closeModal={closeModal} />
        )}
      </BasicModal>
    </div>
  );
};

export default UpdateAnnounceModal;
