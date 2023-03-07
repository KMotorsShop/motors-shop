import { Dispatch, ReactNode, SetStateAction } from "react";

//Contexts

export interface IValueUserProps {
  onRegister: (data: IUser) => void;
  setType: Dispatch<SetStateAction<string>>;
  isModalSucess: boolean;
  setIsModalSucess: Dispatch<SetStateAction<boolean>>;
  isModalUpdate: boolean;
  setIsModalUpdate: Dispatch<SetStateAction<boolean>>;
  isModalUpdateAddress: boolean;
  setIsModalUpdateAddress: Dispatch<SetStateAction<boolean>>;
  updateUser: (data: IUser) => void;
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  nameLogo: string;
  setNameLogo: Dispatch<SetStateAction<string>>;
}

export interface IValueAdsProps {
  detailedVehicle: IVehicles;
  setDetailedVehicle: Dispatch<SetStateAction<any>>;
}

export interface ProductSectionProps {
  type: string;
}

export interface CardProductProps {
  name: string;
  description: string;
  km: number;
  year: number;
  price: number;
  id: string;
}

export interface IProviderProps {
  children: ReactNode;
}

export interface AuthContextProviderData {
  userLogin: (credentials: LoginCredentials) => Promise<void>;
  logged: boolean;
  setLogged: Dispatch<SetStateAction<boolean>>;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface IVehicles {
  year: number;
  name: string;
  price: number;
  type: string;
  id: string;
  description: string;
  km: number;
  isActive: boolean;
}

export interface ArrayTesteProps {
  name: string;
  description: string;
  km: number;
  type: string;
  year: number;
  price: number;
}

// Register

export interface IUser {
  name: string;
  email: string;
  cpf: number;
  cellphone: string;
  birthdate: string;
  description: string;
  password: string;
  ConfirmedPassword: string;
  type: string;
  zipCode: number;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
  id?: string;
}
