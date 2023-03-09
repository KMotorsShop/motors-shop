import { useEffect, useState, useContext } from "react";

import { Flex } from "../../styles/Containers";
import { Text } from "../../styles/Texts";
import { TextArea } from "../../styles/Form";
import { MakeAComment, SendUpdateComment, UpdateComment } from "../CreateComment/styles";

import { AuthContextUser } from "../../context/userContext";
import {
  Container,
  UserInfos,
  UserLogo,
  CommentTime,
  LoggedInfos,
  CommentButtons,
} from "./styles";
import api from "../../services/api";

import moment from "moment";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBack2Line } from "react-icons/ri";
import { toast } from "react-toastify";

interface IContentProps {
  id: string;
  content: string;
  createdAt: string;
  userName: string;
  idLoggedOwner: any;
}

const Comment = ({
  id,
  content,
  createdAt,
  userName,
  idLoggedOwner,
}: IContentProps) => {
  const [logo, setLogo] = useState("");

  // const [ time, setTime ] = useState(null);
  // const [ adId, setAdId ] = useState("");
  // const [ update, setUpdate ] = useState(false)
  const [ updateValue, setUpdateValue ] = useState("")

  // const {
  //   user
  // } = useContext(AuthContextUser);


  const [time, setTime] = useState(null);
  const [adId, setAdId] = useState("");
  const [idUser, setIdUser] = useState("");


  useEffect(() => {
    const idAds = localStorage.getItem("@IdVehicle");
    const token = localStorage.getItem("@kenzie:token");
    setAdId(idAds!);

    function createLogo() {
      const isLongUsername = userName.includes(" ");
      if (!isLongUsername) {
        const newLogo = userName[0] + userName[1];
        setLogo(newLogo);
        return newLogo;
      } else {
        const separate = userName.split(" ");
        const newLogo = separate[0][0] + separate[1][0];
        setLogo(newLogo);
        return newLogo;
      }
    }

    api.defaults.headers.authorization = `Bearer ${token}`;
    api.get("users/profile").then((res) => {
      setIdUser(res.data.id);
    });

    const today: any = moment(createdAt).startOf("week").fromNow();
    setTime(today);

    createLogo();
  }, [logo]);

  async function deleteComment(id: string) {
    await api
      .delete(`comments/${id}`)
      .then((res) => {
        toast.success("Comentário excluído com sucesso");
        window.location.reload();
        window.location.reload();
      })
      .catch((err) => toast.error("Não foi possível excluir o comentário"));
  };

  async function updateComment(id: string) {
    await api
      .patch(`comments/${id}`, {content: updateValue})
      .then((res) => {
        toast.success("Comentário editado com sucesso");
        window.location.reload();
        window.location.reload();
      })
      .catch((err) => toast.error("Não foi possível editar o comentário"));
  };
}

  return (
    <Flex id={id}>
      <Container>
        <UserInfos>
          <LoggedInfos>
            <UserLogo>{logo}</UserLogo>
            <p>{userName}</p>
            <CommentTime>{time}</CommentTime>
          </LoggedInfos>
          {idUser === idLoggedOwner && (
            <CommentButtons>
              <TiEdit style={{"color": "#4529E6"}}
              onClick={() => setUpdate(!update)}/>
              {/* <RiDeleteBack2Line style={{"color": "#CD2B31"}}
              onClick={() => deleteComment(id)}/> */}
              {/* <TiEdit style={{ color: "#4529E6" }} /> */}
              <RiDeleteBack2Line
                style={{ color: "#CD2B31" }}
                onClick={() => deleteComment(id)}
              />
            </CommentButtons>
          )}
        </UserInfos>
        {
          !update ? 
          <Text>{content}</Text> 
          :
          <>
            <UpdateComment
            onChange={(e) => {
              setUpdateValue(e.target.value)
            }}/>
            <SendUpdateComment
            onClick={() => updateComment(id)}>
              Editar 
            </SendUpdateComment>
          </>
        }
      </Container>
    </Flex>
  );
};

export default Comment;
