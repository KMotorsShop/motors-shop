import { styled } from "../../styles/stitches.config";

export const Container = styled("section", { 
    maxHeight: "100%",
    minWidth: "100%",
    padding: "20px",
    top: "256px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
});

export const UserLogo = styled("span", {
    height: "32px",
    width: "32px",
    borderRadius: "150px",
    background: "#7000FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
});

export const CommentTime = styled("span", {
    color: "#868E96",
    fontSize: "14px",
})

export const UserInfos = styled("div", {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    p: {
        fontSize: "14px",
        fontWeight: "bold",
    },
});
