import { styled } from "../../../styles/stitches.config";

export const Container = styled("div", {
  width: "440px",
  height: "426px",
  background: "$grey10",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@mobileProductDetailed": {
    width: "351px",
    height: "397px",
  },

  h1: {
    color: "$grey1",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "25px",
    marginBottom: "32px",
  },

  button: {
    marginBottom: "36px",
  },
});

export const LogoUser = styled("div", {
  background: "$brand1",
  width: "104px",
  height: "104px",
  borderRadius: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "37px",
  marginBottom: "28px",
  "@mobileProductDetailed": {
    width: "77px",
    height: "77px",
  },

  span: {
    color: "$whiteFixed",
    fontWeight: "500",
    fontSize: "36px",
    lineHeight: "53px",
    "@mobileProductDetailed": {
      fontSize: "32px",
      lineHeight: "39px",
    },
  },
});

export const DivText = styled("div", {
  width: "352px",
  marginBottom: "32px",

  p: {
    color: "$grey2",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "28px",
    textAlign: "center",
  },
});
