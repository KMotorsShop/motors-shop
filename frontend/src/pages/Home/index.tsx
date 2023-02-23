import Header from "../../components/Header";
import { Container, ContainerButtons } from "./styles";
import { OutlineButton } from "../../styles/Buttons";

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
    </>
  );
};

export default Home;
