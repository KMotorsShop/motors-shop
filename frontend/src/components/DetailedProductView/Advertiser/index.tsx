import { useContext, useEffect } from "react";
import { AdsAuthContext } from "../../../context/AdsContext";
import api from "../../../services/api";
import { BaseButton } from "../../../styles/Buttons";
import { Container, DivText, LogoUser } from "./styles";

const Advertiser = () => {
  const { detailedVehicle, setDetailedVehicle } = useContext(AdsAuthContext);

  return (
    <Container>
      <LogoUser>
        <span>SL</span>
      </LogoUser>
      <h1>{detailedVehicle.seller.name}</h1>
      <DivText>{detailedVehicle.seller.description}</DivText>
      <BaseButton>Ver todos anuncios</BaseButton>
    </Container>
  );
};

export default Advertiser;
