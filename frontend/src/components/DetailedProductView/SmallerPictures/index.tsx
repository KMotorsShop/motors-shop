import { Car, Container, DivCars } from "./styles";
import car from "../../../assets/carro.png";
import { useContext } from "react";
import { AdsAuthContext } from "../../../context/AdsContext";

const SmallerPictures = () => {
  const { detailedVehicle } = useContext(AdsAuthContext);

  return (
    <Container>
      <p>Fotos</p>
      <DivCars>
        {detailedVehicle.images.map((elem, index) => (
          <Car>
            <img key={index} src={elem} alt="imagem de carro" />
          </Car>
        ))}
      </DivCars>
    </Container>
  );
};

export default SmallerPictures;
