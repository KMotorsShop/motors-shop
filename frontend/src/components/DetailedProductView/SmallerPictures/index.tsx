import { Car, Container, DivCars } from "./styles";
import car from "../../../assets/carro.png";
import { useContext } from "react";
import { AdsAuthContext } from "../../../context/AdsContext";
import NoDataMessage from "../../NoDataMessage";

const SmallerPictures = () => {
  const { detailProductImg } = useContext(AdsAuthContext);

  return (
    <Container>
      <p>Fotos</p>
      <DivCars>
        {detailProductImg.length != 0 ? (
          detailProductImg.map((elem, index) => (
            <Car>
              <img key={index} src={elem} alt="imagem de carro" />
            </Car>
          ))
        ) : (
          <NoDataMessage message="Não há imagens disponíveis para este produto" />
        )}
      </DivCars>
    </Container>
  );
};

export default SmallerPictures;
