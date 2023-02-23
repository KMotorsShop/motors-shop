import { CardSpan, Container, DivInfos, Spans } from "./styles";

const Infos = () => {
  return (
    <Container>
      <h1>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h1>
      <DivInfos>
        <Spans>
          <CardSpan>
            <span>2013</span>
          </CardSpan>
          <CardSpan>
            <span>0 KM</span>
          </CardSpan>
        </Spans>
        <p>R$ 00.000,00</p>
      </DivInfos>
      <button>Comprar</button>
    </Container>
  );
};

export default Infos;
