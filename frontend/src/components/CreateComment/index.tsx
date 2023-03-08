import { useEffect, useState, useContext } from "react";
import { Flex } from "../../styles/Containers";
import { TextArea } from "../../styles/Form";
import { useNavigate } from "react-router-dom";
import { AuthContextUser } from "../../context/userContext";

import {
  Container,
  DefaultComments,
  CommentButton,
  MakeAComment,
  GoLogin,
} from "./styles";
import { UserInfos, UserLogo } from "../Comment/styles";

import api from "../../services/api";

const CreateComment = () => {
  const [ commentValue, setCommentValue ] = useState("");
  const [ logged, setLogged ] = useState(false);

  const navigate = useNavigate();
  
  const {
    userName,
    setNameLogo,
    nameLogo,
  } = useContext(AuthContextUser);

  useEffect(() => {
    const userToken = localStorage.getItem("@kenzie:token")
    if(!!userToken){
      setLogged(true)
    } else {
      setLogged(false)
    }

    function createLogo() {
      const isLongUsername = userName.includes(" ");
      if (!isLongUsername) {
        const newLogo = userName[0] + userName[1]
        setNameLogo(newLogo)
        return newLogo
      } else {
        const separate = userName.split(" ")
        const newLogo = separate[0][0] + separate[1][0]
        setNameLogo(newLogo)
        return newLogo
      };
    }

    if(logged){
      createLogo()
    }

  }, [commentValue, logged, userName, nameLogo])

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
        {
          logged ? 
          <>
            <UserLogo>{nameLogo}</UserLogo>
            <p>{userName}</p>
          </> : 
          <p>Faça Login para comentar!</p>
        }

      </UserInfos>
      <TextArea placeholder={
        commentValue != "" ?
        commentValue : 
        "Carro muito confortável, foi uma ótima experiência de compra..."
      } 
       onChange={(e) => setCommentValue(e.target.value)} />
      { 
        logged ? 
        <MakeAComment
        onClick={() => sendComment()}
        > 
          Comentar 
        </MakeAComment> 
        : 
        <GoLogin
        onClick={() => navigate('/login')}
        > 
          Comentar
        </GoLogin>
      }

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
