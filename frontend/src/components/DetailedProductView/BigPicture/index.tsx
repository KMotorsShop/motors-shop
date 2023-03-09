import { Container } from "./styles";
import car from "../../../assets/carro.png";
import { useContext } from "react";
import { AdsAuthContext } from "../../../context/AdsContext";

const BigPicture = () => {
  const { detailedVehicle } = useContext(AdsAuthContext);

  return (
    <Container>
      <img src={detailedVehicle.images[0]} alt="imagem de carro" />
    </Container>
  );
};

export default BigPicture;
