import { styled } from "../../styles/stitches.config";

export const Container = styled("div", {
  width: "100vw",
  height: "100vh",
  top: "0",
  left: "0",
  zIndex: "1",
  position: "fixed",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
});

export const Box = styled("div", {
  width: "520px",
  height: "287px",
  borderRadius: "8px",
  background: "$whiteFixed",
  marginTop: "80px",
  "@mobile": {
    width: "347px",
    height: "287px",
  },
});

export const BoxButton = styled("div", {
  height: "56px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  p: {
    marginLeft: "24px",
  },

  button: {
    marginRight: "24px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },

  svg: {
    fontSize: "30px",
    color: "$grey4",
  },
});

export const BoxContent = styled("div", {
  marginTop: "40px",
  marginLeft: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",

  p: {},

  span: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "28px",
    color: "$grey2",
    width: "462px",
    "@mobile": {
      width: "297px",
    },
  },

  button: {
    width: "141px",
    height: "38px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
