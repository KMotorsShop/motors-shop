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
import { useContext, useEffect, useState } from "react";
import { AuthContextUser } from "../../context/userContext";
import UpdateUser from "../../components/UpdateUser";
import UpdateUserAddress from "../../components/UpdateUserAddress";
import { ContainerLeilao, TextTitle } from "../Home/styles";
import CardLeilaoMobile from "../../components/CardLeilaoMobile";
import api from "../../services/api";
import { IUser } from "../../interface/interfaces";
import { ProductUserAds } from "../../components/ProductUserAds";

export const UserAds = () => {
  const { isModalUpdate, isModalUpdateAddress, user, nameLogo } =
    useContext(AuthContextUser);
  const [dadosUserAds, setDadosUserAds] = useState({} as IUser);
  const [sigla, setSigla] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("@IdAdsDetail");
    api.get(`users/profile/${id}`).then((res) => {
      setDadosUserAds(res.data);
      setSigla(res.data.name);
    });
  }, [isModalUpdate]);

  const siglaArray = sigla.split(" ");

  return (
    <>
      <Header />
      <BodyHeader>
        <UserDiv>
          <LogoUser>
            <h2>
              {siglaArray.length < 2
                ? `${sigla[0]}`
                : `${siglaArray[0][0]}${siglaArray[1][0]}`}
            </h2>
          </LogoUser>
          <Infos>
            <h1>{dadosUserAds.name}</h1>
            <span>{dadosUserAds.type}</span>
          </Infos>
          <p>{dadosUserAds.description}</p>
        </UserDiv>
      </BodyHeader>

      <Body>
        <Anuncios>
          <ProductUserAds type="Carro" />
          <ProductUserAds type="Moto" />
        </Anuncios>
      </Body>
      <Footer />
      {isModalUpdate && <UpdateUser />}
      {isModalUpdateAddress && <UpdateUserAddress />}
    </>
  );
};
