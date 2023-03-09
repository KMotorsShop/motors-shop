import { createContext, useState } from "react";
import { boolean } from "yup";
import {
  IProviderProps,
  IValueAdsProps,
  IVehicles,
} from "../interface/interfaces";

export const AdsAuthContext = createContext<IValueAdsProps>(
  {} as IValueAdsProps
);

const AdsContext = ({ children }: IProviderProps) => {
  const [detailedVehicle, setDetailedVehicle] = useState({} as IVehicles);
  const [vehicles, setVehicles] = useState<IVehicles[]>([]);
  const [adWasUpdated, setAdUpdated] = useState<boolean>(false);

  return (
    <AdsAuthContext.Provider
      value={{
        detailedVehicle,
        setDetailedVehicle,
        vehicles,
        setVehicles,
        adWasUpdated,
        setAdUpdated,
      }}
    >
      {children}
    </AdsAuthContext.Provider>
  );
};

export default AdsContext;
