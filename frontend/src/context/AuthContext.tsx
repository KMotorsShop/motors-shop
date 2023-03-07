import { createContext, useContext, useState } from "react";
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
import { AuthContextUser } from "./userContext";

export const AuthContext = createContext({} as AuthContextProviderData);

const AuthProvider = ({ children }: IProviderProps) => {
  const navigate = useNavigate();

  const [logged, setLogged] = useState(false);
  const { setUserName, setUser, user } = useContext(AuthContextUser);

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

          api.defaults.headers.authorization = `Bearer ${token}`;
          api.get("users/profile").then((res) => {
            setUserName(res.data.name);
            setUser(res.data);
          });

          toast.success("Login realizado com sucesso!");
        } else {
          toast.error("Email ou senha incorretos!");
        }
      })
      .catch((err) => {
        toast.error("Email ou senha incorretos!");
      });
  };

  return (
    <AuthContext.Provider value={{ userLogin, logged, setLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
