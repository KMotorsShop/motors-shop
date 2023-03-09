import { Container } from "./styles";
import { useContext } from "react";
import { AdsAuthContext } from "../../../context/AdsContext";

const BigPicture = () => {
  const { detailProductImg } = useContext(AdsAuthContext);

  return (
    <Container>
      <img src={detailProductImg[0]} alt="imagem de carro" />
    </Container>
  );
};

export default BigPicture;
