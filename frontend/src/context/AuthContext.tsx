import { createContext, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
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
  const userLogin = async (credentials: LoginCredentials): Promise<void> => {
    const response = api
      .post("/login", {
        email: credentials.email,
        password: credentials.password,
      })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("TOKEN", JSON.stringify(res.data.token));

          return redirect("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider value={{ userLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
