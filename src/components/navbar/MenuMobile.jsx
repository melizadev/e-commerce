import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import { Link } from "react-router";
const MenuMobile = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:hidden md:hidden w-full bg-white z-50 border-b border-gray-200">
      <div className="flex flex-col items-center px-8">
        <form action="#" className=" w-full h-[35px] relative px-4">
          <input
            type="text"
            placeholder={t("header.search")}
            className=" w-full h-full bg-white border-b border-gray-200 text-pink-500 pl-2 outline-none focus:outline-none"
          />
          <button className="absolute right-4 top-[5px] cursor-pointer">
            <Search size="24px" color="#272343" />
          </button>
        </form>
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
