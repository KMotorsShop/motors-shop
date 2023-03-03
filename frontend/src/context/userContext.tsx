import { createContext, useState } from "react";
import {
  IProviderProps,
  IUser,
  IValueUserProps,
} from "../interface/interfaces";
import api from "../services/api";

export const AuthContext = createContext<IValueUserProps>(
  {} as IValueUserProps
);

const UserContext = ({ children }: IProviderProps) => {
  const [type, setType] = useState("");
  const [isModalSucess, setIsModalSucess] = useState(false);
  const [isModalUpdate, setIsModalUpdate] = useState(false);
  const [isModalUpdateAddress, setIsModalUpdateAddress] = useState(false);

  const onRegister = (data: IUser) => {
    data.type = type;
    api
      .post("users", data)
      .then((res) => {
        setIsModalSucess(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateUser = async (data: IUser) => {
    // const token = localStorage.getItem("");
    //Token para exemplo
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzMWRiNDI2Ni0zZDE2LTQyZGMtYmI5ZC1jMTZlNDE5Mjk2ZTEiLCJlbWFpbCI6InBhdWxvQGdtYWlsLmNvbSIsIm5hbWUiOiJQYXVsbyIsImlhdCI6MTY3Nzg2NTM4MSwiZXhwIjoxNjc3OTUxNzgxfQ.d9r8GQTxdRlH_LzkOVbPn4-jJWHxmWlU3RxHXCvv1K0";
    const removingEmpty = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v != "")
    );
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      api.patch("users/31db4266-3d16-42dc-bb9d-c16e419296e1", removingEmpty);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        onRegister,
        setType,
        isModalSucess,
        setIsModalSucess,
        isModalUpdate,
        setIsModalUpdate,
        isModalUpdateAddress,
        setIsModalUpdateAddress,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
