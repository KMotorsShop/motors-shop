import { Flex } from "../../styles/Containers";
import { styled } from "../../styles/stitches.config";

export const ModalHeader = styled(Flex, {
  height: 56,
  alignItems: "center",
  justifyContent: "space-between",
  svg: {
    width: 24,
    height: 24,
    color: "$grey4",
    cursor: "pointer",
    "&:hover": {
      color: "$grey2",
    },
  },
});
