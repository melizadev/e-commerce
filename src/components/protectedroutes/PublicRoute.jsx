import { useUser } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useUser();

  if (loading) {
    return null;
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
