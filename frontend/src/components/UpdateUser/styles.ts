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
  overflow: "overlay",

  p: {
    marginLeft: "24px",
    marginTop: "18px",
    marginBottom: "20px",
    "@mobile": {
      marginLeft: "16px",
    },
  },

  input: {
    width: "466px",
    marginLeft: "24px",
    "@mobile": {
      marginLeft: "16px",
      width: "314px",
    },
  },

  label: {
    marginLeft: "24px",
    "@mobile": {
      marginLeft: "16px",
    },
  },

  textArea: {
    marginLeft: "24px",
    width: "466px",
    "@mobile": {
      marginLeft: "16px",
      width: "314px",
    },
  },

  span: {
    marginLeft: "24px",
    "@mobile": {
      marginLeft: "16px",
    },
  },
});

export const Box = styled("div", {
  width: "520px",
  borderRadius: "8px",
  background: "$whiteFixed",
  marginTop: "80px",
  overflow: "auto",
  marginBottom: "100px",
  "@mobile": {
    width: "347px",
  },
});

export const BoxClose = styled("div", {
  height: "56px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  p: {
    marginLeft: "24px",
    "@mobile": {
      marginLeft: "16px",
    },
  },

  button: {
    marginRight: "24px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    "@mobile": {
      marginRight: "10px",
    },
  },

  svg: {
    fontSize: "30px",
    color: "$grey4",
  },
});

export const BoxButton = styled("div", {
  width: "466px",
  display: "flex",
  gap: "10px",
  marginLeft: "24px",
  justifyContent: "flex-end",
  marginTop: "18px",
  marginBottom: "33px",
  "@mobile": {
    marginLeft: "16px",
    width: "314px",
  },

  button: {
    height: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "15px",
  },
});
