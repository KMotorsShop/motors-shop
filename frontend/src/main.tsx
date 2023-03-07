import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/Global";
import { BrowserRouter } from "react-router-dom";
import AdsContext from "./context/AdsContext";
// import ReactModal from "react-modal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import UserContext from "./context/userContext";
import AuthProvider from "./context/AuthContext";

// ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles>
        <UserContext>
          <AdsContext>
            <AuthProvider>
              <App />
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </AuthProvider>
          </AdsContext>
        </UserContext>
      </GlobalStyles>
    </BrowserRouter>
  </React.StrictMode>
);
