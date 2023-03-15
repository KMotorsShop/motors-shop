import { Flex } from "./Containers";
import { styled } from "./stitches.config";
import { Label } from "./Texts";

export const Form = styled("form", {
  width: "100%",
});

export const Input = styled("input", {
  padding: "0px 16px",
  height: 40,
  borderRadius: 4,
  border: "1.5px solid $grey7",
  transition: "0.5s",
  width: "100%",
  display: "block",

  "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
  "&[type=number]": {
    "-moz-appearance": "textfield",
  },

  "&::placeholder": {
    color: "$grey3",
  },

  "&:hover": {
    background: "$grey8",
    border: "1.5px solid $grey8",
  },

  "&:focus": {
    outline: "none",
    border: "1.5px solid $brand1",
    boxShadow: "0 0 0 0",
  },
});

export const SmallInput = styled("input", {
  padding: "0px 16px",
  height: 40,
  borderRadius: 4,
  border: "1.5px solid $grey7",
  transition: "0.5s",
  width: "100%",
  display: "block",

  "&::placeholder": {
    color: "$grey3",
  },

  "&:hover": {
    background: "$grey8",
    border: "1.5px solid $grey8",
  },

  "&:focus": {
    outline: "none",
    border: "1.5px solid $brand1",
    boxShadow: "0 0 0 0",
  },
});

export const TextArea = styled("textarea", {
  fontFamily: "Lexend",
  padding: "16px",
  height: 40,
  resize: "none",
  borderRadius: 4,
  border: "1.5px solid $grey7",
  transition: "0.5s",
  width: "100%",
  overflow: "none",
  minHeight: 100,
  display: "block",

  "&::placeholder": {
    color: "$grey3",
    fontFamily: "inter",
  },

  "&:hover": {
    background: "$grey8",
    border: "1.5px solid $grey8",
  },

  "&:focus": {
    outline: "none",
    border: "1.5px solid $brand1",
    boxShadow: "0 0 0 0",
  },

});

export const InputWrapper = styled("div", {
  display: "inline-block",
  width: "100%",
  marginTop: "$3",
  [`& ${Label}`]: {
    display: "block",
    marginBottom: "$1",
  },
});

export const InputWrapperRegister = styled("div", {
  display: "inline-block",
  width: "100%",
  [`& ${Label}`]: {
    display: "block",
    marginBottom: "$1",
  },
});

export const InputWrapperUpdate = styled("div", {
  display: "inline-block",
  width: "100%",
  marginTop: "0.5rem",
  [`& ${Label}`]: {
    display: "block",
    marginBottom: "$1",
  },
});

export const FieldSet = styled("fieldset", {
  border: "none",
  width: "100%",
  "@mobile": {
    flexWrap: "wrap",
  },
  marginBottom: "$3",
  variants: {
    type: {
      flex: {
        display: "flex",
        gap: 9,
        margin: 0,
      },
    },
  },
});

export const OptionButtons = styled(Flex, {
  gap: "$1",
  marginTop: "$3",
  button: {
    width: "50%",
  },
});
