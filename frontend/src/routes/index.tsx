import { Route, Routes } from "react-router-dom";
import { AnunciantePersonalPage } from "../pages/AnunciantePessoalPage";
import Home from "../pages/Home";
import { LoginPage } from "../pages/LoginPage";
import ProductDetailed from "../pages/ProductDetailed";
import Register from "../pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/:anuncio" element={<ProductDetailed />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<AnunciantePersonalPage />} />
    </Routes>
  );
};

export default RoutesMain;
