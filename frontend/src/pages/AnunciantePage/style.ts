import { position } from "@chakra-ui/react";
import { styled } from "../../styles/stitches.config";

export const BodyHeader = styled("div", {
    maxWidth: "100%",
    height: "257px",
    backgroundColor: "#4529E6",
    zIndex: "0",
})

export const Body = styled("div", {
    width: "100%",
    backgroundColor: "#F1F3F5",
    height: "1200px",
})

export const UserDiv = styled("div", {
    width: "1000px",
    height: "300px",
    backgroundColor: "white",
    margin: "0px auto",
    position: "relative",
    zIndex: "1",
    top: "80px",
    img:{
        marginTop: "35px",
        marginLeft: "35px",
        borderRadius: "50%",
        width: "104px",
        height: "104px",
    },
    p: {
        marginTop: "30px",
        marginLeft: "35px",
        fontSize: "16px",
        color: "#495057",
        fontWeight: "400",
    }
})

export const Infos = styled("div", {
    display: "flex",
    marginTop: "20px",
    marginLeft: "35px",
    alignItems: "center",
    h1:{
        fontSize: "20px",
    },
    span:{
        marginLeft: "10px",
        backgroundColor: "#EDEAFD",
        padding: "4px 8px 4px 8px",
        gap: "10px",
        fontSize: "14px",
        color: "#4529E6",
        fontWeight: "500",
    },
})

export const Anuncios = styled("div", {
   maxWidth: "1331px" ,
   top: "250px",
   position: "relative",
})