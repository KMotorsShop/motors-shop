import { styled } from "../../styles/stitches.config";

export const Container = styled("div", {
  height: "580px",
  background: "$brand2",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  p: {
    fontWeight: "700",
    fontSize: "44px",
    lineHeight: "56px",
    color: "$grey10",
    width: "748px",
    textAlign: "center",
    marginBottom: "20px",
    "@mobileProductDetailed": {
      width: "372px",
      fontWeight: "600",
      fontSize: "32px",
      lineHeight: "40px",
    },
  },

  span: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "28px",
    color: "$grey10",
    marginBottom: "30px",
    "@mobileProductDetailed": {
      width: "340px",
      textAlign: "center",
    },
  },
});

export const ContainerButtons = styled("div", {
  display: "flex",
  gap: "20px",
  "@mobileProductDetailed": {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },

  button: {
    width: "182px",
    height: "48px",
    "@mobileProductDetailed": {
      width: "90%",
    },
  },
});
