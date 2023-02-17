import { styled } from "../../styles/stitches.config";
import img from "../../assets/carro.png";

export const Container = styled("div", {
  width: "328px",
  height: "435px",
  background: "linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%)",
  borderRadius: "4px 4px 0px 0px",
});

export const CardImage = styled("div", {
  backgroundImage: `url(${img})`,
  backgroundSize: "cover",
  height: "300px",
  paddingTop: "33px",
  paddingLeft: "22px",
  backgroundPosition: "10px 40px",
  h1: {
    marginTop: "35px",
    color: "$whiteFixed",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "25px",
  },
  h2: {
    marginTop: "20px",
    color: "$grey5",
    fontWeight: "300",
    fontSize: "16px",
    lineHeight: "28px",
    marginBottom: "22px",
  },
});

export const ContainerBottom = styled("div", {
  height: "60px",
  width: "328px",
  backgroundColor: "$brand1",
  borderRadius: "0px 0px 4px 4px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  a: {
    fontSize: "16px",
    color: "$whiteFixed",
    textDecoration: "none",
    fontWeight: "600",
    marginLeft: "24px",
  },
  button: {
    color: "$whiteFixed",
    border: "none",
    background: "transparent",
    marginRight: "24px",
    cursor: "pointer",
  },
  svg: {
    fontSize: "25px",
  },
});

export const Time = styled("div", {
  width: "126px",
  height: "36px",
  background: "$whiteFixed",
  borderRadius: "32px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  svg: {
    color: "$brand1",
    fontSize: "22px",
    marginLeft: "-3px",
  },
  span: {
    color: "$grey1",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "20px",
    marginRight: "7px",
  },
});

export const CardName = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginBottom: "20px",

  div: {
    width: "32px",
    height: "32px",
    borderRadius: "100px",
    background: "$brand1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "8px",
  },
  span: {
    color: "$whiteFixed",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "24px",
  },
  p: {
    color: "$whiteFixed",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "24px",
  },
});

export const CardsGrey = styled("div", {
  display: "flex",
  gap: "12px",
  marginBottom: "20px",
  div: {
    width: "50px",
    height: "32px",
    background: "$brand4",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  span: {
    color: "$brand1",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "24px",
  },
});

export const Price = styled("p", {
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "20px",
  color: "$whiteFixed",
});
