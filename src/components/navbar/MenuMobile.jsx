import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import { Link } from "react-router";
import SearchBar from "./searchbar/SearchBar";
import useProducts from "../../hooks/useProducts";
import { useUser } from "../../context/UserContext";
import UserMenu from "./UserMenu";
const MenuMobile = ({ setSearchResults }) => {
  const { products } = useProducts;
  const { t } = useTranslation();
  const { userInfo, isAuthenticated } = useUser();
  return (
    <div className="lg:hidden md:hidden w-full bg-white z-50 border-b border-gray-200 container">
      <div className="flex flex-col items-center px-4 gap-2 ">
        <SearchBar products={products} setSearchResults={setSearchResults} />
        <Link
          to="/"
          className="p-2 rounded-full text-1xl font-bold  text-gray-600  hover:bg-pink-50 hover:text-pink-600 transition-all duration-300"
        >
          {t("menu.home")}
        </Link>
        <Link
          to="/shoppingCart"
          className="p-2 rounded-full text-1xl font-bold text-gray-600  hover:bg-pink-50 hover:text-pink-600 transition-all duration-300"
        >
          {t("cart.title")}
        </Link>
        {isAuthenticated && (
          <Link
            to="/profile"
            className="p-2 rounded-full text-1xl font-bold  text-gray-600  hover:bg-pink-50 hover:text-pink-600 transition-all duration-300"
          >
            {t("menu.profile")}
          </Link>
        )}

        {/* Admin */}
        {userInfo?.isAdmin && (
          <Link
            to="/admin/products"
            className="p-2 rounded-full font-bold text-gray-700  hover:bg-pink-50 hover:text-pink-600 transition-all duration-300"
          >
            Admin
          </Link>
        )}
        {/* User Menu */}
        <div className="rounded-full py-4">
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
