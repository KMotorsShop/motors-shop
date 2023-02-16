import { styled } from "@stitches/react";

export const CardL = styled("div", {
    variants: {
        type:{
            main:{
                backgroundColor: "red",
                width: "735px",
                height: "326px",
            },
        }
    }
})

export const Pelicula = styled("div", {
    marginTop: "0px",
    backgroundImage: "linear-gradient(#FFFF,#000, #000)",
    width: "100%",
    height: "100%", 
    '&:hover':{
        backgroundImage: "linear-gradient(#000, #000)",
    }
})

export const CardImage = styled("img", {
    width: "100%",
    height: "100%",
    opacity: "25%",
})

export const Infos = styled("div", {
    marginTop: "0px",
    width: "100%",
    height: "100%",
    position: "relative",
    bottom: "332px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    h1:{
        fontSize: '20px',
        marginLeft: '40px',
        marginTop: "60px",
    },
    span:{
        fontSize: "16px",
        marginLeft: "40px",
        marginBottom: "20px"
    }
}) 

export const Status = styled("div", {
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    span:{
        fontSize: '14px',
        width: "50px",
        height: "30px",
        backgroundColor: "#EDEAFD",
        color: "#4529E6",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        marginLeft: '40px',
    },
    h2:{
        marginLeft: "390px",
        fontSize: "16px"
    }
})

export const User = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    svg:{
        marginLeft: "40px"
    },
    h2:{
        fontSize: "14px",
        fontWeight: "0",
        marginLeft: '10px',
    }
})

export const Time = styled("div", {
    width: "123px",
    height: "36px",
    backgroundColor: "White",
    borderRadius: "32px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "25px",
    marginLeft: "40px",
    svg:{
    
    },
    p: {
        color: "#212529",
        fontWeight: "700",
        fontSize: "16px",
        marginRight: "10px"
    }
})

export const Acess = styled('div', {
    width: "735px",
    height: "62px",
    backgroundColor: "#4529E6",
    display: "flex",
    alignItems: "center",
    border: "none",
    justifyContent: "space-between",
    button:{
        marginLeft: '20px',
        backgroundColor: "#4529E6",
        '&:hover': {
            textDecoration: "underline",
            border: "none"
        },
    },
    svg:{
        marginRight: "50px"
    }
})