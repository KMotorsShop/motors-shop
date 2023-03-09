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
import { useContext, useEffect, useState } from "react";
import { AuthContextUser } from "../../context/userContext";
import UpdateUser from "../../components/UpdateUser";
import UpdateUserAddress from "../../components/UpdateUserAddress";
import { ContainerLeilao, TextTitle } from "../Home/styles";
import CardLeilaoMobile from "../../components/CardLeilaoMobile";
import CreateAnnounceModal from "../../components/CreateAnnounceModal";
import api from "../../services/api";
import { IUser } from "../../interface/interfaces";

export const AnunciantePersonalPage = () => {
  const { isModalUpdate, isModalUpdateAddress, user, nameLogo } =
    useContext(AuthContextUser);
  const [dadosUser, setDadosUser] = useState({} as IUser);

  useEffect(() => {
    const token = localStorage.getItem("@kenzie:token");
    api.defaults.headers.authorization = `Bearer ${token}`;
    api.get("users/profile").then((res) => {
      setDadosUser(res.data);
    });
  }, [isModalUpdate]);

  return (
    <>
      <Header />
      <BodyHeader>
        <UserDiv>
          <LogoUser>
            <h2>{nameLogo}</h2>
          </LogoUser>
          <Infos>
            <h1>{dadosUser.name}</h1>
            <span>{dadosUser.type}</span>
          </Infos>
          <p>{dadosUser.description}</p>
          {dadosUser.type === "Anunciante" ? (
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
          <ProductSection type="Carro" inDashboard />
          <ProductSection type="Moto" inDashboard />
        </Anuncios>
      </Body>
      <Footer />
      {isModalUpdate && <UpdateUser />}
      {isModalUpdateAddress && <UpdateUserAddress />}
    </>
  );
};
