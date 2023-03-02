import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/Global";
import { BrowserRouter } from "react-router-dom";
import AdsContext from "./context/AdsContext";
import ReactModal from "react-modal";
import AuthProvider, { AuthContext } from "./context/AuthContext";

ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles>
        <AdsContext>
          <AuthProvider>
            <App />
          </AuthProvider>
        </AdsContext>
      </GlobalStyles>
    </BrowserRouter>
  </React.StrictMode>
);
