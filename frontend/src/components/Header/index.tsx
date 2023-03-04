import logo from "../../assets/logo.svg";
import {
  Card,
  DropBoxAds,
  LiCards,
  LiDropBoxAds,
  CardLogged,
  UlCards,
  CardLoggedOut,
} from "./styles";
import { FiMenu } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import { OutlineButton } from "../../styles/Buttons";
import { useContext, useState } from "react";
import MenuMobile from "../MenuMobile";
import "animate.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { AuthContextUser } from "../../context/userContext";

const Header = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const { logged, setLogged } = useContext(AuthContext);
  const { setIsModalUpdate, setIsModalUpdateAddress } =
    useContext(AuthContextUser);

  const showMenu = () => {
    setMenu(!menu);
  };

  const goHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <Card>
      <img src={logo} alt="" onClick={goHome} />
      <button onClick={showMenu}>
        {menu ? (
          <RiCloseLine className="animate__animated animate__flipInX" />
        ) : (
          <FiMenu className="animate__animated animate__flipInX" />
        )}
      </button>
      <div>
        <UlCards>
          <LiCards>Carros</LiCards>
          <LiCards>Motos</LiCards>
          <LiCards>Leilão</LiCards>
        </UlCards>
        {logged ? (
          <CardLogged>
            <div>
              <span>SL</span>
            </div>
            <p>Samuel Leão</p>
            <DropBoxAds>
              <LiDropBoxAds onClick={() => setIsModalUpdate(true)}>
                Editar Perfil
              </LiDropBoxAds>
              <LiDropBoxAds onClick={() => setIsModalUpdateAddress(true)}>
                Editar Endereço
              </LiDropBoxAds>
              <LiDropBoxAds>Meus anúncios</LiDropBoxAds>
              <LiDropBoxAds
                onClick={() => {
                  setLogged(false);
                  navigate("/", { replace: true });
                  window.localStorage.clear();
                }}
              >
                Sair
              </LiDropBoxAds>
            </DropBoxAds>
          </CardLogged>
        ) : (
          <CardLoggedOut>
            <a href="" onClick={() => navigate("/login", { replace: true })}>
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
          </CardLoggedOut>
        )}
      </div>
      {menu && <MenuMobile />}
    </Card>
  );
};

export default Header;
