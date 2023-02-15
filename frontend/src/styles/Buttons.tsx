import { styled } from "./stitches.config";

export const Button = styled("button", {
  fontSize: "$regular",
  color: "$whiteFixed",
  padding: "12px 28px",
  background: "$grey0",
  border: "2px solid transparent",
  borderRadius: 4,
  fontWeight: "$semiBold",
  cursor: "pointer",
  "@mobile": {
    fontSize: "$small",
    padding: "12px 20px",
  },
  "&:hover": {
    background: "$grey1",
  },
  variants: {
    variant: {
      negative: {
        color: "$grey2",
        background: "$grey6",
        "&:hover": {
          background: "$grey5",
        },
      },
      disable: {
        color: "$whiteFixed",
        background: "$grey5",
        "&:hover": {
          background: "$grey5",
        },
      },
      indigo: {
        color: "$whiteFixed",
        background: "$brand1",
        "&:hover": {
          background: "$brand2",
        },
      },
      indigoOpacity: {
        color: "$brand1",
        background: "$brand4",
        "&:hover": {
          background: "$brand4",
          color: "$brand1",
        },
      },
      light: {
        background: "$whiteFixed",
        color: "$grey2",
        "&:hover": {
          background: "$whiteFixed",
          color: "$grey2",
        },
      },
      outlineLight: {
        background: "transparent",
        color: "$whiteFixed",
        border: "2px solid $whiteFixed",
        "&:hover": {
          background: "$whiteFixed",
          color: "$grey2",
        },
      },
    },
  },
});
