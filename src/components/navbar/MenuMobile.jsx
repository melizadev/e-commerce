import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import { Link } from "react-router";
import SearchBar from "./SearchBar";
import { products } from "../../data/products";
const MenuMobile = ({ setSearchResults }) => {
  const { t } = useTranslation();
  return (
    <div className="lg:hidden md:hidden w-full bg-white z-50 border-b border-gray-200 container">
      <div className="flex flex-col items-center px-4 ">
        <SearchBar products={products} setSearchResults={setSearchResults} />
        <Link to="/" className="py-2 text-1xl font-bold  text-gray-600">
          {t("menu.home")}
        </Link>
        <Link to="/products" className="py-2 text-1xl font-bold text-gray-600">
          {t("menu.products")}
        </Link>
        <Link to="/about" className="py-2 text-1xl font-bold  text-gray-600">
          {t("menu.about")}
        </Link>
        <Link to="/contact" className="py-2 text-1xl font-bold  text-gray-600">
          <h2> {t("menu.contact")} </h2>
        </Link>
      </div>
    </div>
  );
};

export default MenuMobile;
