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
      center: {
        justifyContent: "center",
      },
      around: {
        justifyContent: "space-around",
      },
    },
    align: {
      center: {
        alignItems: "center",
      },
    }
  },
});

export const ModalStatusMessage = styled("div", {
  minHeight: 150,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: "$1 0",
});
