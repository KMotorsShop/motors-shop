import { BaseButton } from "../../../styles/Buttons";
import { Container, DivText, LogoUser } from "./styles";

const Advertiser = () => {
  return (
    <Container>
      <LogoUser>
        <span>SL</span>
      </LogoUser>
      <h1>Samuel Leão</h1>
      <DivText>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </DivText>
      <BaseButton>Ver todos anuncios</BaseButton>
    </Container>
  );
};

export default Advertiser;
