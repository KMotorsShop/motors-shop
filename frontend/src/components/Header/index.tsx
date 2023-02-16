import logo from "../../assets/logo.svg";
import { Card } from "./styles";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <Card>
      <img src={logo} alt="" />
      {/* <button>
        <FiMenu />
      </button> */}
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
          <button>Cadastrar</button>
        </Card>
      </div>
    </Card>
  );
};

export default Header;
