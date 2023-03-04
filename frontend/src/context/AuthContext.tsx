import { createContext, useState } from "react";
import { redirect, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import {
    AuthContextProviderData,
    IProviderProps,
    IValueAdsProps,
    IVehicles,
    LoginCredentials,
} from "../interface/interfaces";
import api from "../services/api";



export const AuthContext = createContext({} as AuthContextProviderData)


const AuthProvider = ({ children }: IProviderProps) => {

    const navigate = useNavigate()

    const [ logged, setLogged ] = useState(false)

    const userLogin = async (credentials: LoginCredentials): Promise<void> => {


        const response = api.post("/login", {
            email: credentials.email,
            password: credentials.password
        })
        .then(res => {
            if(res.status === 200){
                localStorage.setItem("TOKEN", JSON.stringify(res.data.token))
                
                setLogged(true)

                navigate("/", {replace: true})

                toast.success('Login realizado com sucesso!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
            else{
                toast.error('Email ou senha incorretos!', {
                    position: "top-right",
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
        .catch(err => {
            toast.error('Email ou senha incorretos!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        })
            
    }

    return (
        <AuthContext.Provider value={{ userLogin, logged }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider