import { OutlineButton } from "../../styles/Buttons";
import { Container, Main, MainLogged } from "./styles";
import "animate.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AuthContextUser } from "../../context/userContext";

const MenuMobile = () => {
  const navigate = useNavigate();
  const { logged, setLogged } = useContext(AuthContext);
  const { setIsModalUpdate, setIsModalUpdateAddress } =
    useContext(AuthContextUser);

  return (
    <Container className="animate__animated animate__bounceInDown">
      <ul>
        <li>Carros</li>
        <li>Motos</li>
        <li>Leilão</li>
      </ul>
      {logged ? (
        <MainLogged>
          <ul>
            <li onClick={() => setIsModalUpdate(true)}>Editar Perfil</li>
            <li onClick={() => setIsModalUpdateAddress(true)}>
              Editar Endereço
            </li>
            <li onClick={() => navigate("/dashboard", { replace: true })}>
              Meus anúncios
            </li>
            <li
              onClick={() => {
                setLogged(false);
                navigate("/", { replace: true });
                window.localStorage.clear();
              }}
            >
              Sair
            </li>
          </ul>
        </MainLogged>
      ) : (
        <Main>
          <a
            href=""
            onClick={() => {
              navigate("/login", { replace: true });
            }}
          >
            Fazer Login
          </a>
          <OutlineButton
            variant="greyLight"
            onClick={() => {
              navigate("/register", { replace: true });
            }}
          >
            Cadastrar
          </OutlineButton>
        </Main>
      )}
    </Container>
  );
};

export default MenuMobile;
