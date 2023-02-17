import { OutlineButton } from "../../styles/Buttons";
import { Container } from "./styles";
import "animate.css";

const MenuMobile = () => {
  return (
    <Container className="animate__animated animate__bounceInDown">
      <ul>
        <li>Carros</li>
        <li>Motos</li>
        <li>Leilão</li>
      </ul>
      <main>
        <a href="">Fazer Login</a>
        <OutlineButton variant="greyLight">Cadastrar</OutlineButton>
      </main>
    </Container>
  );
};

export default MenuMobile;
