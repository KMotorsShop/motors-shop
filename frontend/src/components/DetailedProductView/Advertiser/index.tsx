import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdsAuthContext } from "../../../context/AdsContext";
import { BaseButton } from "../../../styles/Buttons";
import { Container, DivText, LogoUser } from "./styles";

const Advertiser = () => {
  const { detailProduct, sigla } = useContext(AdsAuthContext);
  const navigate = useNavigate();

  const adsDetails = (event: any) => {
    const idAdsDetail = event.target.id;
    window.localStorage.setItem("@IdAdsDetail", idAdsDetail);
    navigate(`/userAds`, { replace: true });
  };

  return (
    <Container>
      <LogoUser>
        <span>{sigla}</span>
      </LogoUser>
      <h1>{detailProduct.name}</h1>
      <DivText>
        <p>{detailProduct.description}</p>
      </DivText>
      <BaseButton onClick={adsDetails} id={detailProduct.id}>
        Ver todos anuncios
      </BaseButton>
    </Container>
  );
};

export default Advertiser;
