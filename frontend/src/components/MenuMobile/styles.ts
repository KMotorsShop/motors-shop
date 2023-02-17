import { styled } from "../../styles/stitches.config";

export const Container = styled("section", {
  background: "$whiteFixed",
  position: "absolute",
  width: "100%",
  zIndex: "1",
  top: "80px",
  "@mobileHeader2": {
    display: "none",
  },

  ul: {
    height: "236px",
    display: "flex",
    flexDirection: "column",
    gap: "44px",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "18px",
    borderBottom: "2px solid $grey6",
    width: "100%",
  },

  main: {
    height: "184px",
    display: "flex",
    flexDirection: "column",
    gap: "44px",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "18px",
    boxShadow: "-1px 20px 20px 4px rgba(222,222,222,1)",
  },

  a: {
    textDecoration: "none",
    color: "$grey2",
  },

  button: {
    width: "95%",
    display: "flex",
    justifyContent: "center",
    border: "1px solid $grey6",
  },
});
