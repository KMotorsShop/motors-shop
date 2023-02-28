import { useNavigate } from "react-router-dom";
import { CardProductProps } from "../../interface/interfaces";
import { Card } from "./style";

export const CardProduct = ({
  name,
  description,
  km,
  year,
  price,
  id,
}: CardProductProps) => {
  const navigate = useNavigate();

  const productDetailed = (event: any) => {
    const idAds = event.target.id;
    window.localStorage.setItem("@IdVehicle", idAds);
    navigate("/anuncio", { replace: true });
  };

  return (
    <Card>
      <img
        onClick={productDetailed}
        id={id}
        src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=960"
      ></img>
      <h1>{name}</h1>
      <p>{description}</p>
      <Card type="user">
        <img src="https://lh3.googleusercontent.com/ogw/AAEL6siLE6kvr8NrqoiCED8VSkGgp-qIvJuXEZexpLwj=s32-c-mo"></img>
        <h3>Usuário</h3>
      </Card>
      <Card type="infos">
        <span>{km}</span>
        <span>{year}</span>
        <h2>R${price},00</h2>
      </Card>
    </Card>
  );
};
