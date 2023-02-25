import { createContext, useState } from "react";
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
  console.log(detailedVehicle);
  return (
    <AdsAuthContext.Provider value={{ detailedVehicle, setDetailedVehicle }}>
      {children}
    </AdsAuthContext.Provider>
  );
};

export default AdsContext;
