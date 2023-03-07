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
import { mockedUser } from "../../mocks/mocks";
import { ProductSection } from "../../components/ProductSection";
import { BrandButton, OutlineButton } from "../../styles/Buttons";
import { useContext } from "react";
import { AuthContextUser } from "../../context/userContext";
import UpdateUser from "../../components/UpdateUser";
import UpdateUserAddress from "../../components/UpdateUserAddress";

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
          <ButtonDiv>
            <OutlineButton variant="brand">Criar anuncio</OutlineButton>
          </ButtonDiv>
        </UserDiv>
      </BodyHeader>
      <Body>
        <Anuncios>
          <ProductSection type="Carros"></ProductSection>
          <ProductSection type="Motos"></ProductSection>
        </Anuncios>
      </Body>
      <Footer />
      {isModalUpdate && <UpdateUser />}
      {isModalUpdateAddress && <UpdateUserAddress />}
    </>
  );
};
