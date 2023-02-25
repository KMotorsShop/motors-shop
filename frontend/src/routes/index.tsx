import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetailed from "../pages/ProductDetailed";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anuncio" element={<ProductDetailed />} />
    </Routes>
  );
};

export default RoutesMain;
