import { useContext } from "react";
import { AdsAuthContext } from "../../../context/AdsContext";
import { Container, DivText } from "./styles";

const Description = () => {
  const { detailedVehicle } = useContext(AdsAuthContext);

  return (
    <Container>
      <h1>Descrição</h1>
      <DivText>
        <p>{detailedVehicle.description}</p>
      </DivText>
    </Container>
  );
};

export default Description;
