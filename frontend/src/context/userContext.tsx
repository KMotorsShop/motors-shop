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
  const [isModalUpdate, setIsModalUpdate] = useState(true);

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

  return (
    <AuthContext.Provider
      value={{
        onRegister,
        setType,
        isModalSucess,
        setIsModalSucess,
        isModalUpdate,
        setIsModalUpdate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
