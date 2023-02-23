import { styled } from "../../../styles/stitches.config";

export const Container = styled("div", {
  width: "752px",
  height: "213px",
  background: "$grey10",
  borderRadius: "4px",

  h1: {
    color: "$grey1",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "25px",
    paddingTop: "36px",
    marginBottom: "32px",
    marginLeft: "44px",
  },
});

export const DivText = styled("div", {
  marginLeft: "44px",
  p: {
    color: "$grey2",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "28px",
  },
});
