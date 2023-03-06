import { useEffect, useState } from "react";
import { Flex } from "../../styles/Containers";
import { Text } from "../../styles/Texts";

import { Container, UserInfos, UserLogo, CommentTime } from "./styles";

import moment from "moment";

interface IContentProps {
  id: string;
  content: string;
  createdAt: string;
  userName: string;
}

const Comment = ({ id, content, createdAt, userName }: IContentProps) => {
  const [logo, setLogo] = useState("");
  const [ time, setTime ] = useState(null);

  useEffect(() => {
    function createLogo() {
      const isLongUsername = userName.includes(" ");
      if (!isLongUsername) {
        const newLogo = userName[0] + userName[1]
        setLogo(newLogo)
        return newLogo
      } else {
        const separate = userName.split(" ")
        const newLogo = separate[0][0] + separate[1][0]
        setLogo(newLogo)
        return newLogo
      };
    }

    const today: any = moment(createdAt).startOf('week').fromNow(); 
    setTime(today)

    createLogo();
  }, [logo]);

  return (
    <Flex id={id}>
      <Container>
        <UserInfos>
          <UserLogo>{logo}</UserLogo>
          <p>{userName}</p>
          <CommentTime>{time}</CommentTime>
        </UserInfos>
        <Text>{content}</Text>
      </Container>
    </Flex>
  );
};

export default Comment;
