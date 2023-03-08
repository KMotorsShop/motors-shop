import { useEffect, useState } from "react";
import { Flex } from "../../styles/Containers";
import { TextArea } from "../../styles/Form";

import {
  Container,
  DefaultComments,
  CommentButton,
  MakeAComment,
} from "./styles";
import { UserInfos, UserLogo } from "../Comment/styles";

import api from "../../services/api";

const CreateComment = () => {
  const [commentValue, setCommentValue] = useState("");
  const [ logged, setLogged ] = useState(false)

  useEffect(() => {
    const userToken = localStorage.getItem("@kenzie:token")
    if(!!userToken){
      setLogged(true)
    } else {
      setLogged(false)
    }
  }, [commentValue, logged])

  async function sendComment() {
    const token = localStorage.getItem("@kenzie:token");
    const idAds = localStorage.getItem("@IdVehicle");
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const data = {
      content: commentValue
    }
    api
      .post(`comments/${idAds}`, data)
      .then((res) => {
        console.log(res.data)
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <UserInfos>
        <UserLogo>SL</UserLogo>
        <p>Samuel Lopes</p>
      </UserInfos>
      <TextArea placeholder={
        commentValue != "" ?
        commentValue : 
        "Carro muito confortável, foi uma ótima experiência de compra..."
      } 
       onChange={(e) => setCommentValue(e.target.value)} />
      <MakeAComment
      onClick={() => sendComment()}
      disabled={!logged && true}> 
        Comentar 
      </MakeAComment>
      <DefaultComments>
        <CommentButton 
        onClick={() => setCommentValue("Gostei muito!")}>
          Gostei muito!
        </CommentButton>
        <CommentButton
        onClick={() => setCommentValue("Incrível")}>
          Incrível
        </CommentButton>
        <CommentButton
        onClick={() => setCommentValue("Recomendarei para meus amigos!")}
        >
          Recomendarei para meus amigos!
        </CommentButton>
      </DefaultComments>
    </Container>
  );
};

export default CreateComment;
