import { useContext, useState } from "react";
import { AdsAuthContext } from "../../context/AdsContext";
import api from "../../services/api";
import { BaseButton, FeedBackButton } from "../../styles/Buttons";
import { Flex, ModalStatusMessage } from "../../styles/Containers";
import { Heading7, Text } from "../../styles/Texts";
import BasicModal from "../BasicModal";

interface DeleteAnnounceModalProps {
  id: string;
  closeModal: () => void;
}

const DeleteAnnounceModal = ({ id, closeModal }: DeleteAnnounceModalProps) => {
  const [announceWasDeleted, setWasDeleted] = useState<boolean>(false);
  const { setAdUpdated } = useContext(AdsAuthContext);

  const handleDeleteAnnounce = () => {
    api.delete(`/ads/${id}`).then((res) => {
      setWasDeleted(true);
      setAdUpdated(true);
    });
  };

  return (
    <ModalStatusMessage>
      {announceWasDeleted ? (
        <>
          <Heading7>Seu anúncio foi excluído</Heading7>
          <Text color="grey2">
            Todos os dados do anúncio foram exclídos permanentemente de nossos
            servidores. Essa ação não pode ser revertida.
          </Text>
        </>
      ) : (
        <>
          <Heading7>Tem certeza que deseja remover este anúncio?</Heading7>
          <Text color="grey2">
            Essa ação não pode ser desfeita. Isso excluirá o anúncio
            permanentemente de sua conta e removerá seus dados de nossos
            servidores.
          </Text>
          <Flex css={{ marginTop: "$3" }} justify="end">
            <BaseButton onClick={closeModal} variant="negative">
              Cancelar
            </BaseButton>
            <FeedBackButton onClick={handleDeleteAnnounce}>
              Sim, excluir anúncio
            </FeedBackButton>
          </Flex>
        </>
      )}
    </ModalStatusMessage>
  );
};

export default DeleteAnnounceModal;
