import { List } from "./style";
import {
  ArrayTesteProps,
  ProductSectionProps,
} from "../../interface/interfaces";

import { Section } from "./style";
import { CardProduct } from "../cardProduct";

export const ProductSection = ({ type }: ProductSectionProps) => {
  const array = [
    {
      year: 2000,
      price: 17000.8,
      name: "Sedan Legal",
      type: "Carros",
      km: 20000,
      description: "Carro muito bom me acompanhou em varias aventuras.",
    },
    {
      year: 2000,
      price: 17000.8,
      name: "Pollo Legal",
      type: "Carros",
      km: 20000,
      description: "Carro muito bom me acompanhou em varias aventuras.",
    },
    {
      year: 2000,
      price: 17000.8,
      name: "Celta Rebaixado",
      type: "Carros",
      km: 20000,
      description: "Carro muito bom me acompanhou em varias aventuras.",
    },
    {
      year: 2000,
      price: 17000.8,
      name: "Suzuki",
      type: "Motos",
      km: 20000,
      description: "Moto muito boa me acompanhou em varias aventuras.",
    },
    {
      year: 2000,
      price: 17000.8,
      name: "Bis",
      type: "Motos",
      km: 20000,
      description: "Moto muito boa me acompanhou em varias aventuras.",
    },
    {
      year: 2000,
      price: 17000.8,
      name: "Hayabusa",
      type: "Motos",
      km: 20000,
      description: "Moto muito boa me acompanhou em varias aventuras.",
    },
  ];

  const renderCards = (arr: [ArrayTesteProps]) => {};

  return (
    <Section>
      <h1>{type}</h1>
      <List>
        {array.map((product) => {
          if (product.type === type) {
            return (
              <CardProduct
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
