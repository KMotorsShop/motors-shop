import { ReactNode } from "react";
import { globalCss } from "./stitches.config";

export const colors = {
  color: {
    orange: { color: "$orange" },
    grey0: { color: "$grey0" },
    grey1: { color: "$grey1" },
    grey2: { color: "$grey2" },
    grey3: { color: "$grey3" },
    grey4: { color: "$grey4" },
    grey5: { color: "$grey5" },
    grey6: { color: "$grey6" },
    grey7: { color: "$grey7" },
    grey8: { color: "$grey8" },
    grey9: { color: "$grey9" },
    grey10: { color: "$grey10" },
    whiteFixed: { color: "$whiteFixed" },
  },
};

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontSize: "$regular",
  },
  html: {
    fontFamily: "Lexend",
    scrollBehavior: "smooth",
  },
});

interface GlobalStyleProps {
  children: ReactNode;
}

export const GlobalStyles: React.FC<GlobalStyleProps> = ({ children }) => {
  globalStyles();
  return <>{children}</>;
};
