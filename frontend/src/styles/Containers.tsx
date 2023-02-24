import { styled } from "./stitches.config";

export const Flex = styled("div", {
  display: "flex",
  gap: "$1",
  width: "100%",
  height: "fit-content",
  variants: {
    justify: {
      end: {
        justifyContent: "flex-end",
      },
    },
  },
});
