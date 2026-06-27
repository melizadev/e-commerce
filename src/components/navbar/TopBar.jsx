import { Check, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { Link } from "react-router";
const TopBar = () => {
  const { t } = useTranslation();
  return (
    <div className="navbar_top w-full flex items-center justify-center bg-[#ffffff]">
      <div className="container flex justify-between items-center p-4">
        <p className="text-sm flex items-center gap-1 font-inter font-normal text-gray-500 capitalize">
          <Check />
          {t("header.shipping")}
        </p>
        <div className="navbar_top_right  items-center gap-3 lg:flex md:flex hidden">
          <LanguageSelector />
          <button>
            <Link className="text-sm text-gray-500 font-inter font-normal capitalize">
              Faqs
            </Link>
          </button>
          <button>
            <Link className="flex items-center gap-1 text-sm text-gray-500 font-inter font-normal capitalize">
              <Info />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
