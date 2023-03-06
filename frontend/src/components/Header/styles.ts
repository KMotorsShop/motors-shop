import { styled } from "../../styles/stitches.config";

export const Card = styled("header", {
  borderBottom: "2px solid $grey6",
  background: "$grey10",
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "80px",
  justifyContent: "space-between",

  img: {
    marginLeft: "60px",
    cursor: "pointer",
  },

  button: {
    "@mobileHeader": {
      display: "flex",
      border: "none",
      backgroundColor: "transparent",
      marginRight: "31px",
      cursor: "pointer",
    },
  },

  svg: {
    display: "none",
    "@mobileHeader": {
      display: "flex",
      fontSize: "31px",
    },
  },

  div: {
    display: "flex",
    "@mobileHeader": {
      display: "none",
    },
  },
});

export const CardLoggedOut = styled("div", {
  marginLeft: "44px",
  borderBottom: "1px solid $grey6",
  display: "flex",
  alignItems: "center",

  a: {
    color: "$grey2",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "28px",
    marginTop: "7px",
    marginRight: "44px",
    textDecoration: "none",
  },

  button: {
    marginRight: "44px",
    marginTop: "7px",
  },
});

export const DropBoxAds = styled("section", {
  width: "200px",
  height: "202px",
  borderRadius: "4px",
  boxShadow: "0px 4px 40px -10px rgba(0, 0, 0, 0.25)",
  background: "#F8F9FA",
  display: "none",
  position: "absolute",
  top: "70px",
  right: "-38px",
  zIndex: "4",
  listStyle: "none",
});

export const LiDropBoxAds = styled("li", {
  marginLeft: "22px",
  color: "$grey2",
  cursor: "pointer",
});

export const UlCards = styled("ul", {
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  borderRight: "2px solid $grey6",
  height: "80px",
});

export const LiCards = styled("li", {
  color: "$grey2",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "28px",
  marginTop: "7px",
  marginRight: "44px",
});

export const CardLogged = styled("div", {
  display: "flex",
  alignItems: "center",
  marginRight: "60px",
  marginLeft: "44px",
  borderBottom: "1px solid $grey6",
  position: "relative",
  "&:hover": {
    section: {
      display: "flex",
      flexDirection: "Column",
      justifyContent: "center",
      gap: "20px",
    },
  },

  div: {
    backgroundColor: "$brand2",
    borderRadius: "150px",
    width: "32px",
    height: "32px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "8px",
    marginTop: "7px",
  },

  span: {
    color: "$whiteFixed",
    fontSize: "14px",
    fontWeight: "700",
  },

  p: {
    color: "$grey2",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "28px",
    marginTop: "7px",
  },
});
