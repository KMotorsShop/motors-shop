import { List } from "./style";
import {
  ArrayTesteProps,
  IVehicles,
  ProductSectionProps,
} from "../../interface/interfaces";

import { Section } from "./style";
import { CardProduct } from "../cardProduct";
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { ErrorOption } from "react-hook-form";
import { AdsAuthContext } from "../../context/AdsContext";

export const ProductSection = ({ type }: ProductSectionProps) => {
  const { vehicles, setVehicles } = useContext(AdsAuthContext);

  useEffect(() => {
    api
      .get("ads")
      .then((res) => {
        setVehicles(res.data);
      })
      .catch((err: ErrorOption) => {
        console.log(err);
      });
  }, []);

  return (
    <Section id="carros">
      <h1 id="motos">{type}</h1>
      <List>
        {vehicles.map((product, index) => {
          if (product.type === type) {
            return <CardProduct key={index} {...product}></CardProduct>;
          }
        })}
      </List>
    </Section>
  );
};
