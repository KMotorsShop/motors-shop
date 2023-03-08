import { List } from "./style";
import {
  ArrayTesteProps,
  IVehicles,
  ProductSectionProps,
} from "../../interface/interfaces";

import { Section } from "./style";
import { CardProduct } from "../cardProduct";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { ErrorOption } from "react-hook-form";

export const ProductSection = ({ type }: ProductSectionProps) => {
  const [vehicles, setVehicles] = useState<IVehicles[]>([]);

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
            return (
              <CardProduct
                id={product.id}
                key={index}
                name={product.name}
                description={product.description}
                km={product.km}
                price={product.price}
                year={product.year}
              ></CardProduct>
            );
          }
        })}
      </List>
    </Section>
  );
};
