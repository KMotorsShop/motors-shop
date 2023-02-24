import { styled } from "../../styles/stitches.config";

export const UpdateAd = styled('div', {
    marginLeft: "15px",
    minHeight: "1252px",
    width: "520px",
    left: "540px",
    top: "80px",
    borderRadius: "8px",
    border: "solid 1px black",

    button: {
        cursor: "pointer",
    },

    ".feedback": {
        color: "red",
        fontSize: "13px",
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
        },

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

    "@mobile": {
        maxWidth: "346px",
        minHeight: "1361px",
        display: "flex",
        flexDirection: "column",

        ".modal-title": {
            maxWidth: "100%",
            p: {
                minWidth: "120px",
            },
            button: {
                marginLeft: "-150px",
                alignSelf: "center",
            },
        },

        form: {
            minHeight: "1300px",
            padding: "20px",
            
            justifyContent: "space-around",
        },

        ".add-inputs": {
            maxWidth: "99%",
            padding: "px",
        },

        ".input-div":{
            maxWidth: "90%"
        },

        ".vehicle-infos": {
            minHeight: "350px",
            ".small-ones": {
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "100%",
                minHeight: "170px",

                input: {
                    maxWidth: "140px",
                },

                ".price": { 
                    minWidth: "300px",
                },
            },
        },


    },

});