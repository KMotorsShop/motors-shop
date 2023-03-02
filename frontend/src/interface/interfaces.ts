import { Dispatch, ReactNode, SetStateAction } from "react";

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

export interface ArrayTesteProps {
  name: string;
  description: string;
  km: number;
  type: string;
  year: number;
  price: number;
}

export interface IValueAdsProps {
  detailedVehicle: IVehicles;
  setDetailedVehicle: Dispatch<SetStateAction<any>>;
}

export interface IProviderProps {
  children: ReactNode;
}

export interface AuthContextProviderData{
  userLogin: (credentials: LoginCredentials) => Promise<void>;

}

export interface LoginCredentials {
  email: string,
  password: string
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
