import { styled } from "../../../styles/stitches.config";

export const Container = styled("div", {
  width: "100%",
  padding: "0 44px",
  maxWidth: 752,
  background: "$grey10",
  borderRadius: "4px",
  marginBottom: "39px",
  "@mobileProductDetailed": {
    padding: "0px",
    marginBottom: "15px",
  },

  h1: {
    color: "$grey1",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "25px",
    paddingTop: "36px",
    marginBottom: "32px",
    "@mobileProductDetailed": {
      marginLeft: "28px",
    },
  },
});

export const DivText = styled("div", {
  marginBottom: "36px",
  "@mobileProductDetailed": {
    marginLeft: "28px",
    width: "295px",
  },
  p: {
    color: "$grey2",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "28px",
  },
});
