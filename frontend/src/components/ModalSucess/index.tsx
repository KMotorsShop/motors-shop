import { Box, BoxButton, BoxContent, Container } from "./styles";
import { RiCloseLine } from "react-icons/ri";
import { BrandButton } from "../../styles/Buttons";
import { useContext } from "react";
import { AuthContext } from "../../context/userContext";
import "animate.css";
import { useNavigate } from "react-router-dom";

const ModalSucess = () => {
  const { setIsModalSucess } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <Container>
      <Box className="animate__animated animate__backInDown">
        <BoxButton>
          <p>Sucesso!</p>
          <button>
            <RiCloseLine onClick={() => setIsModalSucess(false)} />
          </button>
        </BoxButton>
        <BoxContent>
          <p>Sua conta foi criada com sucesso!</p>
          <span>
            Agora você poderá ver seus negócios crescendo em grande escala
          </span>
          <BrandButton
            onClick={() => {
              navigate("/login", { replace: true });
              setIsModalSucess(false);
            }}
          >
            Ir para Login
          </BrandButton>
        </BoxContent>
      </Box>
    </Container>
  );
};

export default ModalSucess;
