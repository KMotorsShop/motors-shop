import { useContext } from "react";
import { AdsAuthContext } from "../../../context/AdsContext";
import { BaseButton } from "../../../styles/Buttons";
import { Container, DivText, LogoUser } from "./styles";

const Advertiser = () => {
  const { detailedVehicle, detailProduct } = useContext(AdsAuthContext);

  return (
    <Container>
      <LogoUser>
        <span>SL</span>
      </LogoUser>
      <h1>{detailProduct.name}</h1>
      <DivText>
        <p>{detailProduct.description}</p>
      </DivText>
      <BaseButton>Ver todos anuncios</BaseButton>
    </Container>
  );
};

export default Advertiser;
