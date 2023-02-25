import { styled } from "../../../styles/stitches.config";

export const Container = styled("div", {
  width: "440px",
  height: "377px",
  background: "$grey10",
  borderRadius: "4px",
  marginBottom: "34px",
  "@mobileProductDetailed": {
    width: "351px",
    height: "355px",
  },

  p: {
    marginLeft: "36px",
    paddingTop: "36px",
    marginBottom: "8px",
    "@mobileProductDetailed": {
      marginLeft: "28px",
    },
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
  "@mobileProductDetailed": {
    width: "300px",
  },
});

export const Car = styled("div", {
  width: "108px",
  height: "108px",
  background: "$grey7",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@mobileProductDetailed": {
    width: "90px",
    height: "90px",
  },

  img: {
    width: "94.22px",
    "@mobileProductDetailed": {
      width: "72.22px",
    },
  },
});
