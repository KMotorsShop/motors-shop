import ReactModal from "react-modal";
import { ReactNode, useState } from "react";
import { Heading7 } from "../../styles/Texts";
import { ModalHeader } from "./styles";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  title: string;
  closeModal: () => void;
  openModal: () => void;
}

const BasicModal = ({
  children,
  isOpen,
  title,
  openModal,
  closeModal,
}: ModalProps) => {
  const customStyles = {
    overlay: {
      background: "rgba(0, 0, 0, .75)",
      overflow: "auto",
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal"
    >
      <ModalHeader>
        <Heading7>{title}</Heading7>
        <IoClose onClick={closeModal} />
      </ModalHeader>
      {children}
    </ReactModal>
  );
};

export default BasicModal;
