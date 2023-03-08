import {
  BodyHeader,
  Body,
  UserDiv,
  Infos,
  Anuncios,
  ButtonDiv,
  LogoUser,
} from "./style";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ProductSection } from "../../components/ProductSection";
import { OutlineButton } from "../../styles/Buttons";
import { useContext } from "react";
import { AuthContextUser } from "../../context/userContext";
import UpdateUser from "../../components/UpdateUser";
import UpdateUserAddress from "../../components/UpdateUserAddress";
import { ContainerLeilao, TextTitle } from "../Home/styles";
import CardLeilaoMobile from "../../components/CardLeilaoMobile";
import CreateAnnounceModal from "../../components/CreateAnnounceModal";

export const AnunciantePersonalPage = () => {
  const { isModalUpdate, isModalUpdateAddress, user, nameLogo } =
    useContext(AuthContextUser);
  return (
    <>
      <Header />
      <BodyHeader>
        <UserDiv>
          <LogoUser>
            <h2>{nameLogo}</h2>
          </LogoUser>
          <Infos>
            <h1>{user.name}</h1>
            <span>{user.type}</span>
          </Infos>
          <p>{user.description}</p>
          {user.type === "Anunciante" ? (
            <ButtonDiv>
              <CreateAnnounceModal />
            </ButtonDiv>
          ) : (
            <></>
          )}
        </UserDiv>
      </BodyHeader>
      <TextTitle id="leilao">Leilão</TextTitle>
      <ContainerLeilao>
        <CardLeilaoMobile />
        <CardLeilaoMobile />
        <CardLeilaoMobile />
      </ContainerLeilao>
      <Body>
        <Anuncios>
          <ProductSection type="Carro"></ProductSection>
          <ProductSection type="Moto"></ProductSection>
        </Anuncios>
      </Body>
      <Footer />
      {isModalUpdate && <UpdateUser />}
      {isModalUpdateAddress && <UpdateUserAddress />}
    </>
  );
};
