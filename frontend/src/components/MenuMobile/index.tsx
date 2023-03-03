import { OutlineButton } from "../../styles/Buttons";
import { Container } from "./styles";
import "animate.css";
import { useNavigate } from "react-router-dom";

const MenuMobile = () => {
  const navigate = useNavigate();

  return (
    <Container className="animate__animated animate__bounceInDown">
      <ul>
        <li>Carros</li>
        <li>Motos</li>
        <li>Leilão</li>
      </ul>
      <main>
        <a href="">Fazer Login</a>
        <OutlineButton
          variant="greyLight"
          onClick={() => {
            navigate("/register", { replace: true });
          }}
        >
          Cadastrar
        </OutlineButton>
      </main>
    </Container>
  );
};

export default MenuMobile;
