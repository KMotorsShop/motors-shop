import { styled } from "@stitches/react";

export const UpdateAd = styled('div', {
    
    maxHeight: "1252px",
    width: "520px",
    left: "540px",
    top: "80px",
    borderRadius: "8px",
    border: "solid 1px black",

    button: {
        cursor: "pointer",
    },

    ".modal-title": {
        height: "56px",
        width: "520px",
        left: "0px",
        top: "0px",
        borderRadius: "0px",
        padding: "16px 24px 16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "302px",

        button: {
            border: "none",
            backgroundColor: "transparent",
            width: "25px",
            color: "$grey4",
            fontSize: "20px",
        }
    },

    form: {
        height: "95%",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        gap: "24px",

        ".buttons": {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            button: {
                width: "228px"
            },
        },

        ".label-button": {
            height: "90px",
            maxWidth: "466px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        },

        ".input-div": {
            height: "73px",
            width: "466px",
            left: "0px",
            top: "162px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "10px",
        },

        ".title-input": {
            height: "45px",
            width: "466px",
            left: "0px",
            top: "25px",
            borderRadius: "4px",
            padding: "0px 16px 0px 16px",
            border: "#E9ECEF 1px solid",
            "&::placeholder": {
                fontSize: "14px"
            },
        },

        ".vehicle-infos": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            gap: "10px",
            height: "300px",

            textarea: {
                height: "80px",
                width: "466px",
                left: "0px",
                top: "25px",
                borderRadius: "4px",
                padding: "8px 16px 8px 16px",
                border: "#E9ECEF 1px solid",
                "&::placeholder": {
                    fontSize: "14px"
                },
            },
            

            ".small-ones": {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",

                ".small-inputs-div": {
                    height: "73px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",

                    ".small-input": {
                        width: "148px",
                        height: "45px",
                        borderRadius: "4px",
                        padding: "0px 16px 0px 16px",
                        border: "#E9ECEF 1px solid",
                    }
                }
            },
        },

        ".vehicle-type": {
            marginTop: "34px",
        },

        ".input-images": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "24px",

            ".add-inputs": {
                height: "38px",
                width: "315px",
                left: "20px",
                top: "19px",
                padding: "12px, 20px, 12px, 20px",
                border: "none",
                backgroundColor: "$brand4",
                color: "$brand1",
                fontWeight: "bold",
                fontSize: "14px",
            },
        },

        ".send": {
            display: "flex",
            justifyContent: "space-between",
            gap: "5px",
        },

    },

});