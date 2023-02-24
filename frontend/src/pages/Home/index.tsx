import Header from "../../components/Header";
import {
  Container,
  ContainerButtons,
  ContainerLeilao,
  TextTitle,
} from "./styles";
import { OutlineButton } from "../../styles/Buttons";

import CardLeilaoMobile from "../../components/CardLeilaoMobile";
import { Footer } from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <p>Velocidade e experiência em um lugar feito para você</p>
        <span>Um ambiente feito para você explorar o seu melhor</span>
        <ContainerButtons>
          <OutlineButton>Carros</OutlineButton>
          <OutlineButton>Motos</OutlineButton>
        </ContainerButtons>
      </Container>
      <TextTitle>Leilão</TextTitle>
      <ContainerLeilao>
        <CardLeilaoMobile />
        <CardLeilaoMobile />
        <CardLeilaoMobile />
      </ContainerLeilao>
      <Footer />
    </>
  );
};

export default Home;
