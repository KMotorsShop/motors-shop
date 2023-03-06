import { createContext, useState } from "react";
import {
  IProviderProps,
  IUser,
  IValueUserProps,
} from "../interface/interfaces";
import api from "../services/api";

export const AuthContextUser = createContext<IValueUserProps>(
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
    const removingEmpty = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v != "")
    );
    const token = localStorage.getItem("@kenzie:token");

    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.patch(
        "users/9709123d-21dc-4ca8-b7da-7950fd4f9dad",
        removingEmpty
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContextUser.Provider
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
    </AuthContextUser.Provider>
  );
};

export default UserContext;
