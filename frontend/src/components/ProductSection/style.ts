import { styled } from "../../styles/stitches.config";

export const Section = styled("section", {
    width: "100%",
    marginLeft: "50px",
    h1:{
        fontSize: "24px",
        fontWeight: "600"
    }
})

export const List = styled("ul", {
    overflowX: "auto",
    marginTop: "40px",
    listStyle: "none",
    display: "flex",
})