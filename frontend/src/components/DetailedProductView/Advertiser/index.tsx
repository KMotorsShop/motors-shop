import { useContext } from "react";
import { AdsAuthContext } from "../../../context/AdsContext";
import { BaseButton } from "../../../styles/Buttons";
import { Container, DivText, LogoUser } from "./styles";

const Advertiser = () => {
  const { detailProduct, sigla } = useContext(AdsAuthContext);

  // const sigla = detailProduct.name.split(" ");

  return (
    <Container>
      <LogoUser>
        <span>
          {/* {sigla.length < 2 ? `${sigla[0][0]}` : `${sigla[0][0]}${sigla[1][0]}`} */}
          {sigla}
        </span>
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
