import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdsAuthContext } from "./context/AdsContext";
import RoutesMain from "./routes";
import api from "./services/api";

function App() {
  const {
    setDetailedVehicle,
    setDetailProduct,
    detailProduct,
    detailProductImg,
    setDetailProductImg,
    setSigla,
  } = useContext(AdsAuthContext);
  const idAds = localStorage.getItem("@IdVehicle");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`ads/${idAds}`)
      .then((res) => {
        setDetailedVehicle(res.data);
        setDetailProduct(res.data.seller);
        setDetailProductImg(res.data.images);
        setSigla(res.data.seller.name[0]);
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  return (
    <div className="App">
      <RoutesMain />
    </div>
  );
}
export default App;
