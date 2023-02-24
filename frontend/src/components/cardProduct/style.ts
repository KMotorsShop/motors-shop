import { styled } from "@stitches/react";

export const Card = styled('div', {
    marginLeft: "15px",
    marginRight: "15px",
    backgroundColor: "#FFFF",
    color: "#212529",
    width: "352px",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    img: {
        border: "2px solid white",
        width: "345px",
        height: "152px",
        padding: "20px 40px",
        backgroundColor: "#E9ECEF",
        '&:hover':{
            border: "2px solid #4529E6"
        },
    },
    h1: {
        marginTop: "10px",
        fontSize: "16px"
    },
    p: {
        marginTop: "10px",
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
                alignItems: "center",
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
                alignItems: "center",
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



