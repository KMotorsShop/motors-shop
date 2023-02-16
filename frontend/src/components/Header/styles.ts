import { styled } from "@stitches/react";

export const Card = styled("header", {
  borderBottom: "2px solid #DEE2E6",
  background: "#FDFDFD",
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "80px",
  justifyContent: "space-between",

  img: {
    marginLeft: "60px",
  },

  div: {
    display: "flex",
  },

  ul: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    borderRight: "2px solid #DEE2E6",
    height: "80px",
  },

  li: {
    color: "#495057",
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
        borderBottom: "1px solid #DEE2E6",
        // display: "none",

        div: {
          backgroundColor: "#5126EA",
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
          color: "#FFFFFF",
          fontSize: "14px",
          fontWeight: "700",
        },

        p: {
          color: "#495057",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "28px",
          marginTop: "7px",
        },
      },
      "logged-out": {
        marginLeft: "44px",
        borderBottom: "1px solid #DEE2E6",
        display: "none",

        a: {
          color: "#495057",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "28px",
          marginTop: "7px",
          marginRight: "44px",
        },

        button: {
          fontWeight: "600",
          fontSize: "16px",
          border: "2px solid #DEE2E6",
          marginTop: "7px",
          borderRadius: "4px",
          marginRight: "44px",
          width: "122px",
          height: "40px",
        },
      },
    },
  },
});
