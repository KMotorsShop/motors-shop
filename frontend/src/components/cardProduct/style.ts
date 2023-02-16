import { styled } from "@stitches/react";

export const Card = styled('div', {
    backgroundColor: "#FFFF",
    color: "#212529",
    width: "312px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    img: {
        border: "2px solid white",
        width: "262px",
        height: "152px",
        padding: "30px 24px",
        backgroundColor: "#E9ECEF",
        '&:hover':{
            border: "2px solid #4529E6"
        },
    },
    h1: {
        fontSize: "16px"
    },
    p: {
        fontSize: "14px",
        lineBreak: "auto",
        color: "#495057",
    },
    
    variants: {
        type: {
            user: {
                display:'flex',
                flexDirection: 'row',
                height: "250px",
                img: {
                    border: "0px",
                    width: "32px",
                    height: "32px",
                    padding: "0px",
                    borderRadius: "50%",
                    '&:hover':{
                        border: "0px"
                    },
                },
                h3: {
                    lineHeight: "10px",
                    marginLeft: "10px",
                    fontSize: '14px',
                    color: '#495057',
                    alignItems: "center",
                    justifyContent: "center"
                }
                
            },
            infos: {
                display: "flex",
                flexDirection: "row",
                span: {
                    backgroundColor: "#EDEAFD",
                    color: "#4529E6",
                    padding: "4px 8px 4px 8px",
                    borderRadius: "4px",
                    marginLeft: "10px",
                },
                h2: {
                    fontSize: "16px",
                    lineHeight: "10px",
                    marginLeft: "90px"
                }
            }
        }
    }
})



