import { createContext, useEffect, useState } from "react";
import {
  IProviderProps,
  IValueAdsProps,
  IVehicles,
} from "../interface/interfaces";
import api from "../services/api";

export const AdsAuthContext = createContext<IValueAdsProps>(
  {} as IValueAdsProps
);

const AdsContext = ({ children }: IProviderProps) => {
  const [detailedVehicle, setDetailedVehicle] = useState({} as IVehicles);
  const [vehicles, setVehicles] = useState<IVehicles[]>([]);
  const [comments, setComments] = useState<Array<any>>([]);

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
      }}
    >
      {children}
    </AdsAuthContext.Provider>
  );
};

export default AdsContext;
