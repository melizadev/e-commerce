import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { useUser } from "../../context/UserContext";
import { logoutService } from "../../auth/authServices";
import toast from "react-hot-toast";

const UserMenu = () => {
  const { userInfo, setUserInfo } = useUser();
  const { t } = useTranslation();
  const handleLogout = async () => {
    try {
      await logoutService();
      setUserInfo(null);
      toast.success(t("Logout successful"));
    } catch (error) {
      toast.error(t(error.message || "header.logoutFailed"));
    }
  };
  return (
    <div className="flex gap-2">
      {userInfo?.username ? (
        <>
          {/* USER AUTHENTICATED */}
          <Link
            to="/e-commerce/profile"
            className="block px-2 py-2  text-gray-700 hover:bg-gray-100 transition"
          >
            Profile
          </Link>

          <button
            className="w-full text-left px-2 py-2  text-red-600  hover:bg-pink-100 border  border-pink-500 rounded transition"
            onClick={handleLogout}
          >
            {t("header.logout")}
          </button>
        </>
      ) : (
        <>
          {/* USER NOT AUTHENTICATED */}
          <Link
            to="/e-commerce/login"
            className="block px-4 py-2  text-gray-700 hover:text-pink-600 hover:bg-gray-100 transition"
          >
            {t("header.login")}
          </Link>

          <Link
            to="/e-commerce/register"
            className="block px-4 py-2 text-gray-700 hover:bg-pink-100 transition border  border-pink-500 rounded"
          >
            {t("header.register")}
          </Link>
        </>
      )}
    </div>
  );
};

export default UserMenu;
