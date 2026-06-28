import { useUser } from "../../context/UserContext";
import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const { userInfo } = useUser();

  if (!userInfo) {
    return <Navigate to="/" replace />;
  }

  if (!userInfo.isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoutes;
