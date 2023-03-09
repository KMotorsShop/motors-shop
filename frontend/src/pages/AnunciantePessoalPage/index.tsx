import api from "../../services/api";
import UpdateUser from "../../components/UpdateUser";
import UpdateUserAddress from "../../components/UpdateUserAddress";
import CardLeilaoMobile from "../../components/CardLeilaoMobile";
import CreateAnnounceModal from "../../components/CreateAnnounceModal";
import Header from "../../components/Header";

import {
  BodyHeader,
  Body,
  UserDiv,
  Infos,
  Anuncios,
  ButtonDiv,
  LogoUser,
} from "./style";

import { useContext, useEffect, useState } from "react";

import { Footer } from "../../components/Footer";
import { ContainerLeilao, TextTitle } from "../Home/styles";
import { ProductSectionPersonal } from "../../components/ProductSectionPersonal";

import { IUser } from "../../interface/interfaces";

import { AuthContextUser } from "../../context/userContext";

export const AnunciantePersonalPage = () => {
  const { isModalUpdate, isModalUpdateAddress, nameLogo } =
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
          <ProductSectionPersonal type="Carro" />
          <ProductSectionPersonal type="Moto" />
        </Anuncios>
      </Body>
      <Footer />
      {isModalUpdate && <UpdateUser />}
      {isModalUpdateAddress && <UpdateUserAddress />}
    </>
  );
};
