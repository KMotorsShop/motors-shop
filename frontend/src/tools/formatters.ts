export const fullParseInt = (value: string) => {
  const number = parseInt(value.replace(/\D+/g, ""));
  if (isNaN(number)) {
    return 0;
  }
  return number;
};

export const formatCurrency = (value: string) => {
  const number = fullParseInt(value) / 100;

  const currency = number.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return currency;
};
