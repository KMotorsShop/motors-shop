import { Container } from "./styles";
import car from "../../../assets/carro.png";

const BigPicture = () => {
  return (
    <Container>
      <img src={car} alt="imagem de carro" />
    </Container>
  );
};

export default BigPicture;
