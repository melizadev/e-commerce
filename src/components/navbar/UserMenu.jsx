import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { useUser } from "../../context/UserContext";
import { logoutService } from "../../auth/authServices";
import toast from "react-hot-toast";

const UserMenu = ({ setMenuUserOpen }) => {
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
    <div className="absolute right-4 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50">
      {userInfo?.username ? (
        <>
          {/* USER AUTHENTICATED */}
          <Link
            to="/e-commerce/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setMenuUserOpen(false)}
          >
            Profile
          </Link>

          <button
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition"
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
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setMenuUserOpen(false)}
          >
            {t("header.login")}
          </Link>

          <Link
            to="/e-commerce/register"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setMenuUserOpen(false)}
          >
            {t("header.register")}
          </Link>
        </>
      )}
    </div>
  );
};

export default UserMenu;
