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
  const { setDetailedVehicle, detailedVehicle } = useContext(AdsAuthContext);
  const [ comments, setComments ] = useState<Array<any>>([])

  useEffect(() => {
    const idAds = localStorage.getItem("@IdVehicle");
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoicGF1bG9AZ21haWwuY29tIiwibmFtZSI6IlBhdWxvIiwiaWF0IjoxNjc3ODUxNTQxLCJleHAiOjE2Nzc5Mzc5NDF9.Thu_o6WQsC8mJk9cpfYSPSyd5w1xAQD-t_Emlw7vNNw"
    api.defaults.headers.common.Authorization = `Bearer ${token}`

    api
      .get(`ads/${idAds}`)
      .then((res) => setDetailedVehicle(res.data))
      .catch((err) => console.log(err));

    async function getComments() {
      // console.log(comments[0])
      if(comments.length == 0){
        await api
          // .get(`comments/${idAds}`)
          //Próxima linha só para testes, apague depois que  o idAds estiver funcionando
          .get(`comments/065acae9-33ff-4c04-b34f-c465d9cd5460`)
          .then((res) => {
            const data = res.data
            setComments([...comments,res.data])
            console.log(comments, "fooit")
          })
          .catch((err) => console.log(err));
      }
    }

    getComments()
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
          {
            comments.length != 0 && 
            comments[0].map((comment: ICommentResponse) => {
              return <Comment 
              key={comment.id}
              id={comment.id}
              content={comment.content}
              createdAt={comment.createdAt}
              userName={comment.user.name}/>
            })
          }
          {/* <Comment/> */}
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
