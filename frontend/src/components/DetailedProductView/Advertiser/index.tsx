import { useContext, useEffect, useState } from "react";
import { AdsAuthContext } from "../../../context/AdsContext";
import api from "../../../services/api";
import { BaseButton } from "../../../styles/Buttons";
import { Container, DivText, LogoUser } from "./styles";

const Advertiser = () => {
  const { detailedVehicle } = useContext(AdsAuthContext);

  const sigla = detailedVehicle.seller.name.split(" ");

  return (
    <Container>
      <LogoUser>
        <span>
          {sigla.length < 2 ? `${sigla[0][0]}` : `${sigla[0][0]}${sigla[1][0]}`}
        </span>
      </LogoUser>
      <h1>{detailedVehicle.seller.name}</h1>
      <DivText>{detailedVehicle.seller.description}</DivText>
      <BaseButton>Ver todos anuncios</BaseButton>
    </Container>
  );
};

export default Advertiser;
