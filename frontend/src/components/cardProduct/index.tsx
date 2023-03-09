import UpdateAnnounceModal from "../UpdateAnnounceModal";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BrandSpan, Card } from "./style";
import { UserLogo } from "../Comment/styles";
import { OutlineButton } from "../../styles/Buttons";
import { Heading7, Text } from "../../styles/Texts";
import { Flex } from "../../styles/Containers";
import { formatCurrency } from "../../tools/formatters";

export const CardProduct = ({
  name,
  description,
  km,
  year,
  price,
  id,
  images,
  isActive,
  seller,
  viewAsSeller,
}: any) => {
  const navigate = useNavigate();

  const productDetailed = (event: any) => {
    const idAds = event.target.id;
    window.localStorage.setItem("@IdVehicle", idAds);
    navigate(`/${idAds}`, { replace: true });
  };

  const [sellerLogo, setSellerLogo] = useState<string>("");

  useEffect(() => {
    const isLongUsername = seller.name.includes(" ");
    let newLogo = "";
    if (!isLongUsername) {
      newLogo = seller.name[0] + seller.name[1];
    } else {
      const separate = seller.name.split(" ");
      newLogo = separate[0][0] + separate[1][0];
    }
    setSellerLogo(newLogo);
  }, []);

  const textLimit = 90;
  return (
    <Card>
      {isActive ? (
        <BrandSpan>Ativo</BrandSpan>
      ) : (
        <BrandSpan state="inactive">Inativo</BrandSpan>
      )}
      <img onClick={productDetailed} id={id} src={images[0]}></img>
      <Heading7 css={{ marginTop: "$1" }}>{name}</Heading7>
      <Text>
        {description.length > textLimit
          ? description.slice(0, textLimit) + "..."
          : description}
      </Text>
      <Card type="user">
        <UserLogo>{sellerLogo}</UserLogo>
      </Card>
      <Card type="infos">
        <span>{km}km</span>
        <span>{year}</span>
        <h2>{formatCurrency(`${price}`)}</h2>
      </Card>
      {viewAsSeller ? (
        <Flex>
          <UpdateAnnounceModal id={id} />
          <OutlineButton size="medium" variant="grey">
            Ver como comprador
          </OutlineButton>
        </Flex>
      ) : null}
    </Card>
  );
};
