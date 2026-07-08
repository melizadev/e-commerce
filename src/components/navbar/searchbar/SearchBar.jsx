import { Search } from "lucide-react";
import useSearch from "../../../hooks/useSearch";
import { useTranslation } from "react-i18next";
import ResultsDropdown from "./ResultsDropdown";
import useProducts from "../../../hooks/useProducts";
import { BrushCleaning } from "lucide-react";
const SearchBar = () => {
  const { products } = useProducts();
  const {
    handleSearch,
    handleChange,
    setShowResults,
    showResults,
    searchText,
    filteredProducts,
    handleSelectProduct,
    clearSearch,
  } = useSearch(products);
  const { t } = useTranslation();
  return (
    <form
      action="#"
      className="min-w-80 w-full h-[45px] relative"
      autoComplete="off"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder={t("header.search")}
        className="
      w-full h-full 
      bg-pink-50 
      border border-pink-100 
      rounded-full 
      px-5 pr-14 
      text-gray-700 
      placeholder:text-gray-400
      shadow-sm
      outline-none 
      transition-all duration-300 
      focus:border-pink-400 
      focus:bg-white 
      focus:shadow-md
    "
        value={searchText}
        onChange={handleChange}
        onFocus={() => setShowResults(true)}
        onBlur={() => setTimeout(() => setShowResults(false), 150)}
      />
      {searchText && (
        <button
          className="
      absolute 
      right-12
      top-1/2 
      -translate-y-1/2 
      w-7
      h-7
      rounded-full 
      hover:bg-gray-100 
      transition-all 
      duration-300 
      flex 
      items-center 
      justify-center
      cursor-pointer"
          type="button"
          onClick={() => clearSearch()}
        >
          <BrushCleaning color="gray" size={"16px"} />
        </button>
      )}

      <button
        type="submit"
        className="
      absolute 
      right-2 
      top-1/2 
      -translate-y-1/2 
      w-9 
      h-9 
      rounded-full 
      bg-pink-600 
      hover:bg-pink-700 
      transition-all 
      duration-300 
      flex 
      items-center 
      justify-center
      cursor-pointer
    "
      >
        <Search size={18} color="white" />
      </button>

      {/* Resultados de búsqueda */}
      {showResults && searchText.trim() && (
        <ResultsDropdown
          filteredProducts={filteredProducts}
          handleSelectProduct={handleSelectProduct}
        />
      )}
    </form>
  );
};

export default SearchBar;
