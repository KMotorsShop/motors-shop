import { styled } from "../../styles/stitches.config";

export const Body = styled("div", {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

export const Login = styled("div", {
    marginTop: "140px",
    marginBottom: "140px",
    width: "412px",
    height: "542px",
    backgroundColor: "#FDFDFD",
    p:{
        marginTop: "35px",
        marginBottom: "35px",
        marginLeft: "35px"
    },
    label:{
        marginLeft: "17px",
    },
    input:{
        marginTop: "10px",
        width: "335px",
        marginLeft: "35px",
        marginBottom: "15px"
    },
    span:{
        fontSize: "14px",
        fontWeight: "500",
        color: "#495057",
        marginLeft: "221px",

        "&:hover":{
            textDecoration: "underline",
            cursor: "pointer"
        }
    },
    button:{
        marginBottom: "30px",
        marginLeft: "35px",
        width: "335px",
        marginTop: "30px"
    },
    h4:{
        fontSize: "14px",
        color: "#495057",
        fontWeight: "400",
        marginLeft: "120px",
    }
})

export const DivButton = styled("button", {
  color: "#0B0D0D",
  padding: "12px 28px",
  background: "transparent",
  border: "3px solid lightgray",
  borderRadius: 4,
  fontWeight: "$semiBold",
  cursor: "pointer",
  "&:hover": {
    backgroundColor:"#E9ECEF",
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
})