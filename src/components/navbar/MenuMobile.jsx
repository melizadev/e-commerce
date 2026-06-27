import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import { Link } from "react-router";
import SearchBar from "./searchbar/SearchBar";
import useProducts from "../../hooks/useProducts";
const MenuMobile = ({ setSearchResults }) => {
  const { products } = useProducts;
  const { t } = useTranslation();
  return (
    <div className="lg:hidden md:hidden w-full bg-white z-50 border-b border-gray-200 container">
      <div className="flex flex-col items-center px-4 ">
        <SearchBar products={products} setSearchResults={setSearchResults} />
        <Link to="/" className="py-2 text-1xl font-bold  text-gray-600">
          {t("menu.home")}
        </Link>
        <Link
          to="/shoppingCart"
          className="py-2 text-1xl font-bold text-gray-600"
        >
          {t("cart.title")}
        </Link>
        <Link to="/profile" className="py-2 text-1xl font-bold  text-gray-600">
          {t("menu.profile")}
        </Link>
      </div>
    </div>
  );
};

export default MenuMobile;
