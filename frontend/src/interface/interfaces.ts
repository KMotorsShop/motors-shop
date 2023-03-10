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
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  nameLogo: string;
  setNameLogo: Dispatch<SetStateAction<string>>;
}

export interface IValueAdsProps {
  detailedVehicle: IVehicles;
  setDetailedVehicle: Dispatch<SetStateAction<IVehicles>>;
  vehicles: IVehicles[];
  setVehicles: Dispatch<SetStateAction<IVehicles[]>>;
  comments: any;
  setComments: Dispatch<SetStateAction<any>>;
  detailProduct: IUserProduct;
  setDetailProduct: Dispatch<SetStateAction<IUserProduct>>;
  detailProductImg: string[];
  setDetailProductImg: Dispatch<SetStateAction<string[]>>;
  adWasUpdated: boolean;
  setAdUpdated: Dispatch<SetStateAction<boolean>>;
  announceWasCreated: boolean;
  setAnnounceCreated: Dispatch<SetStateAction<boolean>>;
  sigla: string;
  setSigla: Dispatch<SetStateAction<string>>;
}

export interface ProductSectionProps {
  type: string;
  inDashboard?: boolean;
}

export interface CardProductProps {
  isActive: boolean;
  seller: IUser;
  images: string[];
  name: string;
  description: string;
  km: number;
  year: number;
  price: number;
  id: string;
  viewAsSeller?: boolean;
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
  images: string[];
  seller: IUser;
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
  images: any;
  image: any;
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
  ads: IVehicles;
}

export interface IUserProduct {
  images: any;
  image: any;
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
  id: string;
}
