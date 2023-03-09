import { useContext } from "react";
import { AdsAuthContext } from "../../../context/AdsContext";
import { formatCurrency } from "../../../tools/formatters";
import { CardSpan, Container, DivInfos, Spans } from "./styles";

const Infos = () => {
  const { detailedVehicle } = useContext(AdsAuthContext);

  return (
    <Container>
      <h1>{detailedVehicle.name} </h1>
      <DivInfos>
        <Spans>
          <CardSpan>
            <span>{detailedVehicle.year}</span>
          </CardSpan>
          <CardSpan>
            <span>{detailedVehicle.km}</span>
          </CardSpan>
        </Spans>
        <p>{formatCurrency(`${detailedVehicle.price}`)}</p>
      </DivInfos>
      <button>Comprar</button>
    </Container>
  );
};

export default Infos;
