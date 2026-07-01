import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useUser } from "../context/UserContext";
import { logoutService } from "../pages/auth/authServices";
import { clearCartState } from "../features/cartSlice";
const useLogout = () => {
  const { setUserInfo } = useUser();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await logoutService();
      dispatch(clearCartState());
      localStorage.removeItem("user");
      setUserInfo(null);
      toast.success(t("Logout successful"));
      navigate("/");
    } catch (error) {
      toast.error(t(error.message || "header.logoutFailed"));
    }
  };
  return { handleLogout };
};

export default useLogout;
