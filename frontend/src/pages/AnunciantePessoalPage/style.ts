import { position } from "@chakra-ui/react";
import { styled } from "../../styles/stitches.config";

export const BodyHeader = styled("div", {
  maxWidth: "100%",
  height: "257px",
  backgroundColor: "#4529E6",
  zIndex: "0",
  marginBottom: "233px",
});

export const Body = styled("div", {
  height: "1200px",
});

export const ButtonDiv = styled("div", {
  marginLeft: "35px",
  marginTop: "35px",
});

export const UserDiv = styled("div", {
  width: "80%",
  height: "350px",
  backgroundColor: "white",
  borderRadius: "4px",
  margin: "0px auto",
  position: "relative",
  top: "80px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  p: {
    marginTop: "30px",
    marginLeft: "35px",
    fontSize: "16px",
    color: "#495057",
    fontWeight: "400",
  },
});

export const Infos = styled("div", {
  display: "flex",
  marginTop: "20px",
  marginLeft: "35px",
  alignItems: "center",
  h1: {
    fontSize: "20px",
  },
  span: {
    marginLeft: "10px",
    backgroundColor: "#EDEAFD",
    padding: "4px 8px 4px 8px",
    gap: "10px",
    fontSize: "14px",
    color: "#4529E6",
    fontWeight: "500",
  },
});

export const Anuncios = styled("div", {
  maxWidth: "1331px",
  top: "250px",
  // position: "relative",
});

export const LogoUser = styled("div", {
  background: "$brand1",
  width: "104px",
  height: "104px",
  borderRadius: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "35px",
  marginBottom: "28px",
  "@mobileProductDetailed": {
    width: "77px",
    height: "77px",
  },

  h2: {
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
