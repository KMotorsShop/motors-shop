import { createContext, useEffect, useState } from "react";
import {
  IProviderProps,
  IUser,
  IUserProduct,
  IValueAdsProps,
  IVehicles,
} from "../interface/interfaces";
import api from "../services/api";

export const AdsAuthContext = createContext<IValueAdsProps>(
  {} as IValueAdsProps
);

const AdsContext = ({ children }: IProviderProps) => {
  const [detailedVehicle, setDetailedVehicle] = useState<IVehicles>(
    {} as IVehicles
  );
  const [vehicles, setVehicles] = useState<IVehicles[]>([]);
  const [comments, setComments] = useState<Array<any>>([]);
  const [detailProduct, setDetailProduct] = useState<IUserProduct>(
    {} as IUserProduct
  );
  const [detailProductImg, setDetailProductImg] = useState<string[]>([]);

  useEffect(() => {
    const idAds = localStorage.getItem("@IdVehicle");

    if (idAds) {
      const autoLoginAds = async () => {
        try {
          const idAds = localStorage.getItem("@IdVehicle");
          await api
            .get(`ads/${idAds}`)
            .then((res) => setDetailedVehicle(res.data));
        } catch (error) {
          console.log(error);
        }
      };
      autoLoginAds();
    }
  }, []);

  return (
    <AdsAuthContext.Provider
      value={{
        detailedVehicle,
        setDetailedVehicle,
        vehicles,
        setVehicles,
        comments,
        setComments,
        detailProduct,
        setDetailProduct,
        detailProductImg,
        setDetailProductImg,
      }}
    >
      {children}
    </AdsAuthContext.Provider>
  );
};

export default AdsContext;
