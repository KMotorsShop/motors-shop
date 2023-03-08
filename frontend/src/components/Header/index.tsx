import logo from "../../assets/logo.svg";
import {
  Card,
  DropBoxAds,
  LiCards,
  LiDropBoxAds,
  CardLogged,
  UlCards,
  CardLoggedOut,
  DropBoxAdsBuyer,
} from "./styles";
import { FiMenu } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import { OutlineButton } from "../../styles/Buttons";
import { useContext, useEffect, useState } from "react";
import MenuMobile from "../MenuMobile";
import "animate.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { AuthContextUser } from "../../context/userContext";

const Header = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const { logged, setLogged } = useContext(AuthContext);
  const {
    setIsModalUpdate,
    setIsModalUpdateAddress,
    userName,
    setNameLogo,
    nameLogo,
    user,
    setUser,
  } = useContext(AuthContextUser);
  console.log(user);
  const showMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const isLongUsername = userName.includes(" ");
    if (!isLongUsername) {
      const newLogo = userName[0] + userName[1];
      setNameLogo(newLogo);
    } else {
      const separate = userName.split(" ");
      const newLogo = separate[0][0] + separate[1][0];
      setNameLogo(newLogo);
    }
  }, [userName]);

  const arrayNome = userName.split(" ");
  const nameOne = `${arrayNome[0]}`;
  const nameTwo = `${arrayNome[0]} ${arrayNome[1]}`;

  return (
    <Card id="header">
      <img src={logo} alt="" onClick={() => navigate("/", { replace: true })} />
      <button onClick={showMenu}>
        {menu ? (
          <RiCloseLine className="animate__animated animate__flipInX" />
        ) : (
          <FiMenu className="animate__animated animate__flipInX" />
        )}
      </button>
      <div>
        <UlCards>
          <a href="#carros">
            <LiCards>Carros</LiCards>
          </a>
          <a href="#motos">
            <LiCards>Motos</LiCards>
          </a>

          <a href="#leilao">
            <LiCards>Leilão</LiCards>
          </a>
        </UlCards>
        {user ? (
          <CardLogged>
            <div>
              <span>{nameLogo}</span>
            </div>
            <p>{arrayNome.length < 2 ? nameOne : nameTwo}</p>
            {user.type === "Anunciante" ? (
              <DropBoxAds>
                <LiDropBoxAds onClick={() => setIsModalUpdate(true)}>
                  Editar Perfil
                </LiDropBoxAds>
                <LiDropBoxAds onClick={() => setIsModalUpdateAddress(true)}>
                  Editar Endereço
                </LiDropBoxAds>
                <LiDropBoxAds
                  onClick={() => navigate("/dashboard", { replace: true })}
                >
                  Meus anúncios
                </LiDropBoxAds>
                <LiDropBoxAds
                  onClick={() => {
                    setUser(null);
                    navigate("/", { replace: true });
                    window.localStorage.removeItem("@kenzie:token");
                  }}
                >
                  Sair
                </LiDropBoxAds>
              </DropBoxAds>
            ) : (
              <DropBoxAdsBuyer>
                <LiDropBoxAds onClick={() => setIsModalUpdate(true)}>
                  Editar Perfil
                </LiDropBoxAds>
                <LiDropBoxAds onClick={() => setIsModalUpdateAddress(true)}>
                  Editar Endereço
                </LiDropBoxAds>

                <LiDropBoxAds
                  onClick={() => {
                    setUser(null);
                    navigate("/", { replace: true });
                    window.localStorage.removeItem("@kenzie:token");
                  }}
                >
                  Sair
                </LiDropBoxAds>
              </DropBoxAdsBuyer>
            )}
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
