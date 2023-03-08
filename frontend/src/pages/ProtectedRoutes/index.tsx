import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContextUser } from "../../context/userContext";

const ProtectedRoutes = () => {
  const { user } = useContext(AuthContextUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return <>{user ? <Outlet /> : null}</>;
};

export default ProtectedRoutes;
