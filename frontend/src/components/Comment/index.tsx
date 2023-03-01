import { Flex } from "../../styles/Containers";
import { Text } from "../../styles/Texts";

import { Container, UserInfos, UserLogo, CommentTime } from "./styles";

const Comment = () => {
  return (
    <Flex >
      <Container>
        <UserInfos>
          <UserLogo>
            SL
          </UserLogo>
          <p>Samuel Lopes</p>
          <CommentTime>
            3 dias
          </CommentTime>
        </UserInfos>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
      </Container>
    </Flex>
  );
};

export default Comment;
