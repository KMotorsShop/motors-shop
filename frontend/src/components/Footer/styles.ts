import {styled} from "@stitches/react";

export const SFooter = styled('footer', {
    backgroundColor: "#0B0D0D",
    width: "100%",
    padding: 50,
    color: "#FFFFFF",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "end",

    ".title": {
        display: "flex" ,
        alignItems: "end",
        gap: "4px",

        "h4": {
            fontSize: 20,
            fontWeight: "bold",
        }
    },

    "button": {
       height: 50,
       width: 53,
       borderRadius: 4,

       backgroundColor: "#212529",

    },

    "@mobile": {
        display: "flex",
        flexDirection: "column",
    }
});