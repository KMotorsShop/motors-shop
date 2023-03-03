import { Flex } from "../../styles/Containers";
import { Text } from "../../styles/Texts";

import { Container, UserInfos, UserLogo, CommentTime } from "./styles";

interface IContentProps {
  id: string;
  content: string;
  createdAt: string; 
  userName: string;
}

const Comment = ({id, content, createdAt, userName}: IContentProps) => {
  return (
    <Flex id={id}>
      <Container>
        <UserInfos>
          <UserLogo>SL</UserLogo>
          <p>{userName}</p>
          <CommentTime>{createdAt}</CommentTime>
        </UserInfos>
        <Text>
          {content}
        </Text>
      </Container>
    </Flex>
  );
};

export default Comment;
