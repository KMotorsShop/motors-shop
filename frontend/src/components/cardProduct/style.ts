import { styled } from "../../styles/stitches.config";

export const BrandSpan = styled("span", {
  position: "absolute",
  top: 10,
  left: 10,
  background: "$brand1",
  color: "$whiteFixed",
  padding: "0.25rem $1",
  cursor: "default",
  fontSize: "$small",

  variants: {
    state: {
      inactive: {
        background: "$grey4",
      },
    },
  },
});

export const Card = styled("div", {
  position: "relative",
  backgroundColor: "$brand6",
  color: "#212529",
  width: "352px",
  height: "350px",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  img: {
    border: "2px solid #E9ECEF",
    width: "345px",
    height: "152px",
    padding: "0 20",
    cursor: "pointer",
    backgroundColor: "#E9ECEF",
    objectFit: "cover",
    "&:hover": {
      border: "2px solid #4529E6",
    },
  },
  h1: {
    marginTop: "10px",
    fontSize: "16px",
  },
  p: {
    marginTop: "10px",
    fontSize: "14px",
    lineBreak: "auto",
    color: "#495057",
  },

  variants: {
    type: {
      user: {
        display: "flex",
        flexDirection: "row",
        height: "250px",
        alignItems: "center",
        img: {
          border: "0px",
          width: "32px",
          height: "32px",
          padding: "0px",
          borderRadius: "50%",
          "&:hover": {
            border: "0px",
          },
        },
        h3: {
          lineHeight: "10px",
          marginLeft: "10px",
          fontSize: "14px",
          color: "#495057",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      infos: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        span: {
          backgroundColor: "#EDEAFD",
          color: "#4529E6",
          padding: "4px 8px 4px 8px",
          borderRadius: "4px",
          marginRight: "10px",
        },
        h2: {
          fontSize: "16px",
          lineHeight: "10px",
          marginLeft: "90px",
        },
      },
    },
  },
});
