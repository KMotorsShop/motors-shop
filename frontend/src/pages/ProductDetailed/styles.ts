import { styled } from "../../styles/stitches.config";

export const DetailViewBackgroundTop = styled("div", {
  position: "absolute",
  top: 80,
  zIndex: -1,
  background: "$brand2",
  width: "100%",
  height: 580,
});

export const Container = styled("div", {
  // height: "580px",
  // background: "$brand2",
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
  margin: "$4 0",
});

export const CardOne = styled("div", {
  minHeight: "700px",
  width: "751px",
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
  background: "$grey10",
  "@mobileProductDetailed": {
    width: "351px",
    minHeight: "414px",
  },
});

export const CardComments = styled(CardOne, {
  justifyContent: "flex-start",
  maxHeight: 650,
  alignItems: "flex-start",
  overflow: "auto",
});
