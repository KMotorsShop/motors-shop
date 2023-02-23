import logo from "../../assets/logo.svg";
import { Card } from "./styles";
import { FiMenu } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import { OutlineButton } from "../../styles/Buttons";
import { useState } from "react";
import MenuMobile from "../MenuMobile";
import "animate.css";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <Card>
      <img src={logo} alt="" />
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
          <a href="">Fazer Login</a>
          <OutlineButton variant="greyLight">Cadastrar</OutlineButton>
        </Card>
      </div>
      {menu && <MenuMobile />}
    </Card>
  );
};

export default Header;
