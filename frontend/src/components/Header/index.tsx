import logo from "../../assets/logo.svg";
import { Card } from "./styles";
import { FiMenu } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import { OutlineButton } from "../../styles/Buttons";
import { useState } from "react";
import MenuMobile from "../MenuMobile";
import "animate.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

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
        <ul>
          <li>Carros</li>
          <li>Motos</li>
          <li>Leilão</li>
        </ul>
        <Card type="logged">
          <div>
            <span>SL</span>
          </div>
          <p>Samuel Leão</p>
        </Card>
        <Card type="logged-out">
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
        </Card>
      </div>
      {menu && <MenuMobile />}
    </Card>
  );
};

export default Header;
