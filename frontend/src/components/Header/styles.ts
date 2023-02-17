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

  ul: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    borderRight: "2px solid $grey6",
    height: "80px",
  },

  li: {
    color: "$grey2",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "28px",
    marginTop: "7px",
    marginRight: "44px",
  },

  variants: {
    type: {
      logged: {
        display: "flex",
        marginRight: "60px",
        marginLeft: "44px",
        borderBottom: "1px solid $grey6",
        // display: "none",

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
      },
      "logged-out": {
        marginLeft: "44px",
        borderBottom: "1px solid $grey6",
        display: "none",

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
      },
    },
  },
});
