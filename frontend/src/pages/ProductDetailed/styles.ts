import { styled } from "../../styles/stitches.config";

export const Container = styled("div", {
  height: "580px",
  background: "$brand2",
  display: "flex",
  justifyContent: "center",
  gap: "46px",
  paddingTop: "40px",
  "@mobileProductDetailed": {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    gap: "15px",
  },
});

export const ContainerOne = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const ContainerTwo = styled("div", {
  display: "flex",
  flexDirection: "column",
});
