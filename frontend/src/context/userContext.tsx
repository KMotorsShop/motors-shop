import { createContext, useEffect, useState } from "react";
import {
  IProviderProps,
  IUser,
  IValueUserProps,
} from "../interface/interfaces";
import api from "../services/api";
import { toast } from "react-toastify";

export const AuthContextUser = createContext<IValueUserProps>(
  {} as IValueUserProps
);

const UserContext = ({ children }: IProviderProps) => {
  const [type, setType] = useState("");
  const [isModalSucess, setIsModalSucess] = useState(false);
  const [isModalUpdate, setIsModalUpdate] = useState(false);
  const [isModalUpdateAddress, setIsModalUpdateAddress] = useState(false);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("@kenzie:token");
    api.defaults.headers.authorization = `Bearer ${token}`;
    api.get("users/profile").then((res) => {
      setUserName(res.data.name);
    });
  }, [isModalUpdate]);

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
      const { data } = await api.get("users/profile");
      const id = data.id;
      await api.patch(`users/${id}`, removingEmpty);
      toast.success("Atualizado com Sucesso!");
      setIsModalUpdate(false);
      setIsModalUpdateAddress(false);
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
        userName,
        setUserName,
      }}
    >
      {children}
    </AuthContextUser.Provider>
  );
};

export default UserContext;
