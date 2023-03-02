import { BaseButton } from "../../styles/Buttons";
import { styled } from "../../styles/stitches.config";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "46px",
  marginBottom: "97px",
});

export const ContainerForm = styled("form", {
  width: "411px",
  // height: "1630px",
  background: "$grey10",
  borderRadius: "4px",
  "@mobile": {
    width: "343px",
  },

  h1: {
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "30px",
    marginTop: "44px",
    marginLeft: "48px",
    marginBottom: "44px",
    "@mobile": {
      marginLeft: "28px",
    },
  },

  p: {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "24px",
    marginLeft: "48px",
    "@mobile": {
      marginLeft: "28px",
    },
  },

  span: {
    marginLeft: "48px",
    "@mobile": {
      marginLeft: "28px",
    },
  },

  h5: {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "24px",
    marginLeft: "48px",
    marginTop: "28px",
    display: "inline-block",
    "@mobile": {
      marginLeft: "28px",
    },
  },

  label: {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "17px",
    marginLeft: "48px",
    display: "inline-block",
    marginTop: "20px",
    "@mobile": {
      marginLeft: "28px",
    },
  },

  input: {
    width: "315px",
    height: "48px",
    marginLeft: "48px",
    marginTop: "8px",
    "@mobile": {
      width: "287px",
      marginLeft: "28px",
    },
  },

  textArea: {
    width: "315px",
    height: "80px",
    marginLeft: "48px",
    marginTop: "8px",
    paddingTop: "25px",
    marginBottom: "24px",
    "&::placeholder": {
      color: "$grey3",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "0px",
    },
    "@mobile": {
      width: "287px",
      marginLeft: "28px",
    },
  },

  buttonConfirm: {
    width: "315px",
  },
});

export const DivForm = styled("div", {
  display: "flex",
  marginLeft: "48px",
  gap: "11px",
  "@mobile": {
    marginLeft: "28px",
  },

  button: {
    width: "152px",
    "@mobile": {
      width: "139px",
    },
  },
});

export const InputSmall = styled("div", {
  label: {
    marginLeft: "0px",
  },
  input: {
    width: "152px",
    marginLeft: "0px",
    "@mobile": {
      width: "139px",
    },
  },
});

export const BrandButtonForm = styled(BaseButton, {
  color: "$whiteFixed",
  background: "$brand1",
  width: "315px",
  marginLeft: "48px",
  marginTop: "34px",
  marginBottom: "44px",
  "@mobile": {
    width: "287px",
    marginLeft: "28px",
  },

  "&:hover": {
    background: "$brand2",
  },

  "&:disabled": {
    color: "$brand4",
    background: "$brand3",
    cursor: "default",
    "&:hover": {
      background: "$brand3",
    },
  },

  variants: {
    variant: {
      opacity: {
        color: "$brand1",
        background: "$brand4",
        "&:hover": {
          background: "$brand4",
          color: "$brand1",
        },
      },
      normal: {
        color: "$whiteFixed",
        background: "$brand1",
      },
    },
  },
});
