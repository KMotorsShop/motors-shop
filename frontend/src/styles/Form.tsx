import { styled } from "./stitches.config";

export const Form = styled("form", {});

export const Input = styled("input", {
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

  "@mobile": {
    maxWidth: "90%",
    minWidth: "300px",
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

  "@mobile": {
    maxWidth: "90%",
    minWidth: "300px",
  },
});
