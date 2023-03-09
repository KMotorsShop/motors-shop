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

interface IUser {
  name: string;
  id: string;
}

interface ICommentResponse {
  id: string;
  content: string;
  createdAt: string;
  user: IUser;
}

const ProductDetailed = () => {
  const { detailedVehicle, comments, setComments } = useContext(AdsAuthContext);

  useEffect(() => {
    const idAds = localStorage.getItem("@IdVehicle");

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
                  idLoggedOwner={comment.user.id}
                />
              );
            })}
        </CardOne>
        <CardTwo>
          <CreateComment />
        </CardTwo>
      </ContainerComments>
      <Footer />
    </>
  );
};

export default ProductDetailed;
