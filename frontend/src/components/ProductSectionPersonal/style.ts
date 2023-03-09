import { styled } from "../../styles/stitches.config";

export const Section = styled("section", {
  marginLeft: "60px",
  marginBottom: "200px",
  "@mobile": {
    marginLeft: "21px",
  },

  h1: {
    fontSize: "24px",
    fontWeight: "600",
  },
});

export const List = styled("ul", {
  overflowX: "auto",
  marginTop: "40px",
  listStyle: "none",
  display: "flex",
  gap: "15px",

  "&::-webkit-scrollbar": {
    height: "6px",
    width: "6px",
  },

  "&::-webkit-scrollbar-thumb": {
    background: "$brand1",
    borderRadius: "5px",
  },

  "&::-webkit-scrollbar-corner": {
    background: "transparent",
  },
});
