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
  DetailViewBackgroundTop,
  CardComments,
} from "./styles";
import Comment from "../../components/Comment";
import CreateComment from "../../components/CreateComment";
import NoDataMessage from "../../components/NoDataMessage";
import { useParams } from "react-router-dom";

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
  const { anuncio } = useParams();

  const { detailedVehicle } = useContext(AdsAuthContext);
  const [comments, setComments] = useState<ICommentResponse[]>([]);

  useEffect(() => {
    async function getComments() {
      if (comments.length == 0) {
        await api
          .get(`comments/${anuncio}`)
          .then((res) => {
            setComments([...comments, ...res.data]);
          })
          .catch((err) => console.log(err));
      }

      return 
    }
    getComments();
  }, [detailedVehicle, comments]);

  return (
    <>
      <Header />
      <Container>
        <DetailViewBackgroundTop />
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
        <CardComments>
          {comments.length != 0 ? (
            comments.map((comment: ICommentResponse) => {
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
            })
          ) : (
            <NoDataMessage message="Ainda não há comentários sobre este produto. Seja o primeiro a comentar!" />
          )}
        </CardComments>
        <CardTwo>
          <CreateComment />
        </CardTwo>
      </ContainerComments>
      <Footer />
    </>
  );
};

export default ProductDetailed;
