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

  useEffect(() => {

  }, [commentValue])

  async function sendComment() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsImVtYWlsIjoiYWxleEBnbWFpbC5jb20iLCJuYW1lIjoiQWxleGFuZHJlIiwiaWF0IjoxNjc3ODU3NDI4LCJleHAiOjE2Nzc5NDM4Mjh9.-sdzg93Vgs4oB7RdHSkAGjOHlyIaRDZAD-BZb6GPFjE"
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    // Lembrar de tirar o id do usuário no corpo da req
    // mudar essa regra no backend
    // pegar o id do usuário de forma dinâmica
    const data = {
      userId: "4",
      content: commentValue
    }
    api
      // Lembrar de trocar o id do anuncio de forma dinâmica
      .post(`comments/e8f71151-10dc-4e22-aa46-5d234fbc7f32`, data)
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
      onClick={() => sendComment()}> 
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
        onClick={() => setCommentValue("Recomendarei para meus amigos!")}>
          Recomendarei para meus amigos!
        </CommentButton>
      </DefaultComments>
    </Container>
  );
};

export default CreateComment;
