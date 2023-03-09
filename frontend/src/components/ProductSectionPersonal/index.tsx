import api from "../../services/api";
import { List } from "./style";
import { Section } from "./style";
import { useContext, useEffect, useState } from "react";
import { IUser, ProductSectionProps } from "../../interface/interfaces";

import { CardProduct } from "../cardProduct";
import { ErrorOption } from "react-hook-form";
import { AdsAuthContext } from "../../context/AdsContext";
import NoDataMessage from "../NoDataMessage";

export const ProductSectionPersonal = ({ type }: ProductSectionProps) => {
  const { adWasUpdated, announceWasCreated } = useContext(AdsAuthContext);
  const [vehiclesPersonal, setVehiclesPersonal] = useState<IUser[]>([]);
  useEffect(() => {
    api
      .get("users/profile")
      .then((res) => {
        setVehiclesPersonal(res.data.ads);
      })
      .catch((err: ErrorOption) => {
        console.log(err);
      });
  }, [adWasUpdated, announceWasCreated]);

  const filteredList = vehiclesPersonal.map((product, index) => {
    if (product.type === type) {
      return <CardProduct key={index} {...product} viewAsSeller={true} />;
    }
  });
  return (
    <Section id="carros">
      <h1 id="motos">{type}</h1>
      <List>
        {filteredList.length > 0 ? (
          filteredList
        ) : (
          <NoDataMessage message="Parece que não há produtos disponíveis no momento" />
        )}
      </List>
    </Section>
  );
};
