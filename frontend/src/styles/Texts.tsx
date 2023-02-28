import { colors } from "./Global";
import { styled } from "./stitches.config";

const baseText = {
  fontSize: "$regular",
  fontWeight: "$regular",
  color: "$grey0",

  variants: {
    ...colors,
    theme: {
      dark: { color: "$whiteFixed" },
    },
    weight: {
      regular: { fontWeight: "$regular" },
      medium: { fontWeight: "$medium" },
      bold: { fontWeight: "$bold" },
    },
  },
};

export const Text = styled("p", {
  ...baseText,
  "@mobile": {
    fontSize: "$small",
  },
});

export const Heading1 = styled("h1", {
  ...baseText,
  fontSize: "$larger6",
  fontWeight: "$bold",
});

export const Heading2 = styled("h2", {
  ...baseText,
  fontSize: "$larger5",
  fontWeight: "$semiBold",
});

export const Heading3 = styled("h3", {
  ...baseText,
  fontSize: "$larger4",
  fontWeight: "$semiBold",
  "@mobile": {
    fontWeight: "$medium",
  },
});

export const Heading4 = styled("h4", {
  ...baseText,
  fontSize: "$larger3",
  fontWeight: "$semiBold",
  "@mobile": {
    fontWeight: "$medium",
  },
});

export const Heading5 = styled("h5", {
  ...baseText,
  fontSize: "$larger2",
  fontWeight: "$semiBold",
  "@mobile": {
    fontWeight: "$medium",
  },
});

export const Heading6 = styled("h6", {
  ...baseText,
  fontSize: "$larger1",
  fontWeight: "$semiBold",
  "@mobile": {
    fontWeight: "$medium",
  },
});

export const Heading7 = styled("h6", {
  ...baseText,
  fontSize: "$regular",
  fontWeight: "$semiBold",
  "@mobile": {
    fontWeight: "$medium",
  },
});

export const Label = styled("label", {
  ...baseText,
  color: "$gray1",
  fontWeight: "$medium",
  fontSize: "$small",
});

export const Legend = styled("legend", {
  ...baseText,
  color: "$gray1",
  fontWeight: "$medium",
  fontSize: "$small",
});

export const FormError = styled("span", {
  ...baseText,
  color: "$alert1",
  fontWeight: "$medium",
  fontSize: "$small",
});
