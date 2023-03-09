import { List } from "./style";
import {
  ArrayTesteProps,
  IUser,
  IVehicles,
  ProductSectionProps,
} from "../../interface/interfaces";

import { Section } from "./style";
import { CardProduct } from "../cardProduct";
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { ErrorOption } from "react-hook-form";
import { AdsAuthContext } from "../../context/AdsContext";

export const ProductSectionPersonal = ({ type }: ProductSectionProps) => {
  const { vehicles, setVehicles } = useContext(AdsAuthContext);
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
  }, []);

  return (
    <Section id="carros">
      <h1 id="motos">{type}</h1>
      <List>
        {vehiclesPersonal.map((product, index) => {
          if (product.type === type) {
            return <CardProduct key={index} {...product}></CardProduct>;
          }
        })}
      </List>
    </Section>
  );
};
