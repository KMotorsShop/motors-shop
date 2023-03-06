import { createContext, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  AuthContextProviderData,
  IProviderProps,
  IValueAdsProps,
  IVehicles,
  LoginCredentials,
} from "../interface/interfaces";
import api from "../services/api";

export const AuthContext = createContext({} as AuthContextProviderData);

const AuthProvider = ({ children }: IProviderProps) => {
  const navigate = useNavigate();

  const [logged, setLogged] = useState(false);

  const userLogin = async (credentials: LoginCredentials): Promise<void> => {
    const response = api
      .post("/login", {
        email: credentials.email,
        password: credentials.password,
      })
      .then((res) => {
        if (res.status === 200) {
          const token = res.data.token;
          window.localStorage.setItem("@kenzie:token", token);
          setLogged(true);
          navigate("/dashboard", { replace: true });

          toast.success("Login realizado com sucesso!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.error("Email ou senha incorretos!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch((err) => {
        toast.error("Email ou senha incorretos!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <AuthContext.Provider value={{ userLogin, logged, setLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
