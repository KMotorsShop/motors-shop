import { styled } from "./stitches.config";

export const BaseButton = styled("button", {
  fontSize: "$regular",
  color: "$whiteFixed",
  padding: "12px 28px",
  background: "$grey0",
  border: "2px solid transparent",
  borderRadius: 4,
  fontWeight: "$semiBold",
  cursor: "pointer",
  "&:hover": {
    background: "$grey1",
  },

  "&:disabled": {
    color: "$whiteFixed",
    background: "$grey5",
    "&:hover": {
      background: "$grey5",
    },
  },

  variants: {
    size: {
      medium: {
        fontSize: "$small",
        padding: "12px 20px",
      },
    },
    variant: {
      negative: {
        color: "$grey2",
        background: "$grey6",
        "&:hover": {
          background: "$grey5",
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
    },
  },
});

export const BrandButton = styled(BaseButton, {
  color: "$whiteFixed",
  background: "$brand1",

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

export const OutlineButton = styled(BaseButton, {
  background: "transparent",
  color: "$whiteFixed",
  border: "2px solid $whiteFixed",
  "&:hover": {
    background: "$whiteFixed",
    border: "2px solid transparent",
    color: "$grey2",
  },
  variants: {
    variant: {
      grey: {
        background: "transparent",
        backgroundColor: "$grey6",
        color: "$grey0",
        // border: "2px solid $grey0",
        "&:hover": {
          background: "$grey0",
          border: "2px solid transparent",
          color: "$whiteFixed",
        },
      },
      greyLight: {
        background: "transparent",
        color: "$grey0",
        border: "2px solid $grey4",
        "&:hover": {
          background: "$grey1",
          border: "2px solid transparent",
          color: "$whiteFixed",
        },
      },
      brand: {
        background: "$brand4",
        color: "$brand1",
        border: "2px solid $brand1",
        "&:hover": {
          background: "transparent",
          border: "2px solid $brand1",
          color: "$brand1",
        },
      },
    },
  },
});

export const LinkButton = styled(BaseButton, {
  background: "transparent",
  color: "$grey0",
  border: "2px solid transparent",
  "&:hover": {
    background: "$grey8",
    border: "2px solid transparent",
  },
});

export const FeedBackButton = styled(BaseButton, {
  color: "$alert1",
  background: "$alert3",
  "&:hover": {
    background: "$alert2",
  },
  variants: {
    variant: {
      success: {
        color: "$success1",
        background: "$success3",
        "&:hover": {
          background: "$success2",
        },
      },
    },
  },
});
