import { Flex } from "../../styles/Containers";
import { TextArea } from "../../styles/Form";

import {
  Container,
  DefaultComments,
  CommentButton,
  MakeAComment,
} from "./styles";
import { UserInfos, UserLogo } from "../Comment/styles";

const CreateComment = () => {
  return (

    <Container>
    <UserInfos>
        <UserLogo>SL</UserLogo>
        <p>Samuel Lopes</p>
    </UserInfos>
    <TextArea placeholder="Carro muito confortável, foi uma ótima experiência de compra..." />
    <MakeAComment> Comentar </MakeAComment>
    <DefaultComments>
        <CommentButton>Gostei muito!</CommentButton>
        <CommentButton>Incrível</CommentButton>
        <CommentButton>Recomendarei para meus amigos!</CommentButton>
    </DefaultComments>
    </Container>

  );
};

export default CreateComment;
