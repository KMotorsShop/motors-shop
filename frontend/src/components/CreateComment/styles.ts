import { styled } from "../../styles/stitches.config";
import { BrandButton } from "../../styles/Buttons";

export const Container = styled("section", { 
    minHeight: "100%",
    height: "100%",
    minWidth: "100%",
    padding: "20px",
    top: "256px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    justifyContent: "space-around"
});

export const DefaultComments = styled("div", {
    display: "flex",
    width: "100%",
    gap: "12px",
    flexWrap: "wrap",
});

export const CommentButton = styled("button", {
    height: "24px",
    minWidth: "66px",
    left: "109px",
    top: "0px",
    borderRadius: "24px",
    padding: "0px 12px 0px 12px",
    background: "#E9ECEF",
    color: "#868E96",
    border: "none",
    cursor: "pointer",
});

export const MakeAComment = styled(BrandButton, {
    width: "108px",
    height: "38px",
    fontSize: "14px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: "600px",
    "@createComment": {
        marginLeft: "590px",
        marginTop: "-110px",
    }
});

export const SendUpdateComment = styled(MakeAComment, {
  width: "80px",
  height: "28px",
  "@createComment": {
    marginLeft: "610px",
    marginTop: "-100px",
  }
});

export const UpdateComment = styled("textarea", {
  fontFamily: "Lexend",
  padding: "16px",
  minHeight: "20px",
  resize: "none",
  borderRadius: 4,
  border: "1.5px solid $grey7",
  transition: "0.5s",
  width: "100%",
  overflow: "none",
  display: "block",

  "@createComment": {
    marginBottom: "50px",
  },

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

})

export const GoLogin = styled(MakeAComment, {
    color: "white",
    background: "#CED4DA",
});