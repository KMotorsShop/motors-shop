import { styled } from "../../../styles/stitches.config";

export const Container = styled("div", {
  width: "752px",
  height: "240px",
  background: "$grey10",
  borderRadius: "4px",
  marginBottom: "39px",
  "@mobileProductDetailed": {
    width: "351px",
    height: "355px",
    marginBottom: "24px",
  },

  h1: {
    color: "$grey1",
    fontSize: "20px",
    lineHeight: "25px",
    fontWeight: "600",
    marginLeft: "44px",
    paddingTop: "44px",
    marginBottom: "41px",
    "@mobileProductDetailed": {
      marginLeft: "28px",
    },
  },

  button: {
    background: "$brand1",
    width: "100px",
    height: "38px",
    border: "none",
    color: "$whiteFixed",
    fontSize: "14px",
    fontWeight: "600",
    borderRadius: "4px",
    cursor: "pointer",
    marginLeft: "44px",
    marginBottom: "26px",
    "@mobileProductDetailed": {
      marginLeft: "28px",
    },

    "&:hover": {
      background: "$brand2",
    },

    "&:disabled": {
      color: "$brand4",
      background: "$brand3",
      cursor: "default",
      "&:hover": {
        background: "$brand3",
      },
    },
  },
});

export const DivInfos = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  width: "657px",
  marginLeft: "44px",
  marginBottom: "24px",
  "@mobileProductDetailed": {
    flexDirection: "column",
    marginLeft: "28px",
  },
  p: {
    color: "$grey1",
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "500",
    "@mobileProductDetailed": {
      marginTop: "32px",
    },
  },
});

export const Spans = styled("div", {
  display: "flex",
});

export const CardSpan = styled("div", {
  background: "$brand4",
  borderRadius: "4px",
  width: "50px",
  height: "32px",
  marginRight: "12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  span: {
    color: "$brand1",
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: "500",
  },
});
