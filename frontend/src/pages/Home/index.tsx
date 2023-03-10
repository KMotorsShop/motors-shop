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
import { AuthContextUser } from "../../context/userContext";
import UpdateUser from "../../components/UpdateUser";
import UpdateUserAddress from "../../components/UpdateUserAddress";

const Home = () => {
  const { isModalUpdate, isModalUpdateAddress } = useContext(AuthContextUser);
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
      <TextTitle id="leilao">Leilão</TextTitle>
      <ContainerLeilao>
        <CardLeilaoMobile />
        <CardLeilaoMobile />
        <CardLeilaoMobile />
      </ContainerLeilao>
      <ProductSection type="Carro" />
      <ProductSection type="Moto" />
      <Footer />
      {isModalUpdate && <UpdateUser />}
      {isModalUpdateAddress && <UpdateUserAddress />}
    </>
  );
};

export default Home;
