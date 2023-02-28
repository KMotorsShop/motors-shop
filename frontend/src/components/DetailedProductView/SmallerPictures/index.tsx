import { Car, Container, DivCars } from "./styles";
import car from "../../../assets/carro.png";

const SmallerPictures = () => {
  return (
    <Container>
      <p>Fotos</p>
      <DivCars>
        <Car>
          <img src={car} alt="imagem de carro" />
        </Car>
        <Car>
          <img src={car} alt="imagem de carro" />
        </Car>
        <Car>
          <img src={car} alt="imagem de carro" />
        </Car>
        <Car>
          <img src={car} alt="imagem de carro" />
        </Car>
        <Car>
          <img src={car} alt="imagem de carro" />
        </Car>
        <Car>
          <img src={car} alt="imagem de carro" />
        </Car>
      </DivCars>
    </Container>
  );
};

export default SmallerPictures;
