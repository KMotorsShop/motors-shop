import Header from "../../components/Header";
import {
  Container,
  ContainerButtons,
  ContainerLeilao,
  TextTitle,
} from "./styles";
import CardLeilaoMobile from "../../components/CardLeilaoMobile";
import { Footer } from "../../components/Footer";
import { ProductSection } from "../../components/ProductSection";
import { useContext } from "react";
import { AuthContext } from "../../context/userContext";
import UpdateUser from "../../components/UpdateUser";

const Home = () => {
  const { isModalUpdate } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Container>
        <p>Velocidade e experiência em um lugar feito para você</p>
        <span>Um ambiente feito para você explorar o seu melhor</span>
        <ContainerButtons>
          <a href="#carros">Carros</a>
          <a href="#motos">Motos</a>
        </ContainerButtons>
      </Container>
      <TextTitle>Leilão</TextTitle>
      <ContainerLeilao>
        <CardLeilaoMobile />
        <CardLeilaoMobile />
        <CardLeilaoMobile />
      </ContainerLeilao>
      <ProductSection type="Carros" />
      <ProductSection type="Motos" />
      <Footer />
      {isModalUpdate && <UpdateUser />}
    </>
  );
};

export default Home;
