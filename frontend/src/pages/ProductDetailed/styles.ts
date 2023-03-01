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
  minHeight: "557px",
  width: "751px",
  // border: "1px solid",
  marginBottom: "33px",
  background: "$grey10",
  "@mobileProductDetailed": {
    width: "351px",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
});

export const CardTwo = styled("div", {
  minHeight: "289px",
  height: "351px",
  width: "751px",
  // border: "1px solid",
  background: "$grey10",
  "@mobileProductDetailed": {
    width: "351px",
    minHeight: "414px",
  },
});
