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

export const ContainerComments = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "330px",
  marginBottom: "73px",
  "@mobileProductDetailed": {
    marginTop: "1412px",
  },
});

export const CardOne = styled("div", {
  height: "557px",
  width: "751px",
  border: "1px solid",
  marginBottom: "33px",
  "@mobileProductDetailed": {
    width: "351px",
  },
});

export const CardTwo = styled("div", {
  height: "289px",
  width: "751px",
  border: "1px solid",
  "@mobileProductDetailed": {
    width: "351px",
  },
});