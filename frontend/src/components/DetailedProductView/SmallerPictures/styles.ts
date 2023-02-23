import { styled } from "../../../styles/stitches.config";

export const Container = styled("div", {
  width: "440px",
  height: "377px",
  background: "$grey10",
  borderRadius: "4px",

  p: {
    marginLeft: "36px",
    paddingTop: "36px",
    marginBottom: "8px",
  },
});

export const DivCars = styled("div", {
  width: "390px",
  height: "281px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginLeft: "20px",
});

export const Car = styled("div", {
  width: "108px",
  height: "108px",
  background: "$grey7",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    width: "94.22px",
  },
});
