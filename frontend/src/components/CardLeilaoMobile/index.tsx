import {
  CardImage,
  CardName,
  CardsGrey,
  Container,
  ContainerBottom,
  Price,
  Time,
} from "./styles";
import { BsArrowRight } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

const CardLeilaoMobile = () => {
  return (
    <>
      <Container>
        <CardImage>
          <Time>
            <BiTimeFive />
            <span>01:58:00</span>
          </Time>
          <h1>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes</h1>
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </h2>
          <CardName>
            <div>
              <span>R</span>
            </div>
            <p>Rodrigo Tavares</p>
          </CardName>
          <CardsGrey>
            <div>
              <span>2013</span>
            </div>
            <div>
              <span>0 KM</span>
            </div>
          </CardsGrey>
          <Price>R$ 78.500,00</Price>
        </CardImage>
      </Container>
      <ContainerBottom>
        <a href="">Acessar página do leilão</a>
        <button>
          <BsArrowRight />
        </button>
      </ContainerBottom>
    </>
  );
};

export default CardLeilaoMobile;
