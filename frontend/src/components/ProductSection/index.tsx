import api from "../../services/api";

import { ErrorOption } from "react-hook-form";
import { useContext, useEffect, useState } from "react";

import { List } from "./style";
import { Section } from "./style";
import { CardProduct } from "../cardProduct";
import { ProductSectionProps } from "../../interface/interfaces";

import { AdsAuthContext } from "../../context/AdsContext";

export const ProductSection = ({ type, inDashboard }: ProductSectionProps) => {
  const { vehicles, setVehicles, adWasUpdated } = useContext(AdsAuthContext);
  useEffect(() => {
    api
      .get("ads")
      .then((res) => {
        setVehicles(res.data);
      })
      .catch((err: ErrorOption) => {
        console.log(err);
      });
  }, [adWasUpdated]);

  return (
    <Section id="carros">
      <h1 id="motos">{type}</h1>
      <List>
        {vehicles.map((product, index) => {
          if (product.type === type) {
            return (
              <CardProduct
                key={index}
                {...product}
                viewAsSeller={inDashboard}
              />
            );
          }
        })}
      </List>
    </Section>
  );
};
