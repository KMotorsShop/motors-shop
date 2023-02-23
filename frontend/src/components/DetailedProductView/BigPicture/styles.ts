import { styled } from "../../../styles/stitches.config";

export const Container = styled("div", {
  width: "752px",
  height: "355px",
  background: "$grey10",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "16px",
  "@mobileProductDetailed": {
    width: "351px",
    height: "355px",
  },

  img: {
    width: "441px",
    "@mobileProductDetailed": {
      width: "293px",
    },
  },
});
