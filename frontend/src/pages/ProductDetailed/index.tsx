import { useContext, useEffect, useState } from "react";
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
import { AuthContextUser } from "../../context/userContext";
import UpdateUser from "../../components/UpdateUser";
import UpdateUserAddress from "../../components/UpdateUserAddress";

interface IUser {
  name: string;
}

interface ICommentResponse {
  id: string;
  content: string;
  createdAt: string;
  user: IUser;
}

const ProductDetailed = () => {
  const { setDetailedVehicle, detailedVehicle, comments, setComments } =
    useContext(AdsAuthContext);
  const { isModalUpdate, isModalUpdateAddress } = useContext(AuthContextUser);
  console.log(comments);

  useEffect(() => {
    const idAds = localStorage.getItem("@IdVehicle");
    const token = localStorage.getItem("@kenzie:token");

    async function getComments() {
      if (comments.length == 0) {
        await api
          .get(`comments/${idAds}`)
          .then((res) => {
            setComments([...comments, res.data]);
          })
          .catch((err) => console.log(err));
      }
    }
    getComments();
  }, [detailedVehicle, comments]);

  useEffect(() => {
    const idAds = localStorage.getItem("@IdVehicle");

    if (idAds) {
      const autoLoginAds = async () => {
        try {
          const idAds = localStorage.getItem("@IdVehicle");
          await api
            .get(`ads/${idAds}`)
            .then((res) => setDetailedVehicle(res.data));
        } catch (error) {
          console.log(error);
        }
      };
      autoLoginAds();
    }
  }, []);

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
          {comments.length != 0 &&
            comments[0].map((comment: ICommentResponse) => {
              return (
                <Comment
                  key={comment.id}
                  id={comment.id}
                  content={comment.content}
                  createdAt={comment.createdAt}
                  userName={comment.user.name}
                />
              );
            })}
        </CardOne>
        <CardTwo>
          <CreateComment />
        </CardTwo>
      </ContainerComments>
      <Footer />
      {isModalUpdate && <UpdateUser />}
      {isModalUpdateAddress && <UpdateUserAddress />}
    </>
  );
};

export default ProductDetailed;
