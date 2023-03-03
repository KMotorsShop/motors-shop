import { useContext, useEffect } from "react";
import Advertiser from "../../components/DetailedProductView/Advertiser";
import BigPicture from "../../components/DetailedProductView/BigPicture";
import Description from "../../components/DetailedProductView/Description";
import Infos from "../../components/DetailedProductView/Infos";
import SmallerPictures from "../../components/DetailedProductView/SmallerPictures";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { AdsAuthContext } from "../../context/AdsContext";
import api from "../../services/api";
import {
  Container,
  ContainerOne,
  ContainerTwo,
  ContainerComments,
  CardOne,
  CardTwo,
} from "./styles";
import Comment from "../../components/Comment";
import CreateComment from "../../components/CreateComment";

const ProductDetailed = () => {
  const { setDetailedVehicle, detailedVehicle } = useContext(AdsAuthContext);

  useEffect(() => {
    const idAds = localStorage.getItem("@IdVehicle");
    const token = ""
    api
      .get(`ads/${idAds}`)
      .then((res) => setDetailedVehicle(res.data))
      .catch((err) => console.log(err));

    api.defaults.headers.common.Authorization = `Bearer ${token}`
    api
      // .get(`comments/${idAds}`)
      .get(`comments/065acae9-33ff-4c04-b34f-c465d9cd5460`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

  }, [detailedVehicle]);

  return (
    <>
      <Header />
      <Container>
        <ContainerOne>
          <BigPicture />
          <Infos />
          <Description />
        </ContainerOne>
        <ContainerTwo>
          <SmallerPictures />
          <Advertiser />
        </ContainerTwo>
      </Container>
      <ContainerComments>
        <CardOne>
          <Comment/>
          <Comment/>
          <Comment/>
        </CardOne>
        <CardTwo>
          <CreateComment/>
        </CardTwo>
      </ContainerComments>
      <Footer />
    </>
  );
};

export default ProductDetailed;
