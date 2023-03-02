import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { LoginPage } from "../pages/LoginPage";
import ProductDetailed from "../pages/ProductDetailed";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<LoginPage></LoginPage>}/>
      <Route path="/anuncio" element={<ProductDetailed />} />
    </Routes>
  );
};

export default RoutesMain;
