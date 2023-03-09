import { Heading7 } from "../../styles/Texts";
import { NoDataMessageContainer } from "./styles";

interface NoDataMessageProps {
  message: string;
}

const NoDataMessage = ({ message }: NoDataMessageProps) => {
  return (
    <NoDataMessageContainer>
      <Heading7 color="grey2">{message}</Heading7>
    </NoDataMessageContainer>
  );
};

export default NoDataMessage;
