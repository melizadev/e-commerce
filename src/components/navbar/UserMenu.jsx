import { Link } from "react-router";
import { useUser } from "../../context/UserContext";
import useLogout from "../../hooks/useLogout";
import { useTranslation } from "react-i18next";
const UserMenu = () => {
  const { t } = useTranslation();
  const { userInfo } = useUser();
  const { handleLogout } = useLogout();
  return (
    <div className="flex items-center gap-3">
      {userInfo?.username ? (
        <>
          {/* USER AUTHENTICATED */}
          <Link
            to="/profile"
            className="
          px-4 py-2 
          rounded-full
          bg-pink-50
          text-gray-700
          font-medium
          hover:bg-pink-100
          hover:text-pink-600
          transition-all duration-300
        "
          >
            Profile
          </Link>

          <button
            className="
          px-4 py-2
          rounded-full
          bg-red-50
          text-red-600
          font-medium
          hover:bg-red-100
          transition-all duration-300
          cursor-pointer
        "
            onClick={handleLogout}
          >
            {t("header.logout")}
          </button>
        </>
      ) : (
        <>
          {/* USER NOT AUTHENTICATED */}
          <Link
            to="/login"
            className="
          px-4 py-2
          rounded-full
          text-gray-700
          font-medium
          hover:bg-pink-50
          hover:text-pink-600
          transition-all duration-300
        "
          >
            {t("header.login")}
          </Link>

          <Link
            to="/register"
            className="
          px-5 py-2
          rounded-full
          bg-pink-600
          text-white
          font-medium
          shadow-sm
          hover:bg-pink-700
          hover:shadow-md
          hover:-translate-y-0.5
          transition-all duration-300
        "
          >
            {t("header.register")}
          </Link>
        </>
      )}
    </div>
  );
};

export default UserMenu;
