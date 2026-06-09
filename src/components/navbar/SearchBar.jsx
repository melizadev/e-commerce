import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = ({ products, setSearchResults }) => {
  const [searchText, setSearchText] = useState("");
  const [showResults, setShowResults] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const filteredProducts =
    searchText.trim().length > 0
      ? products?.filter((product) =>
          product.title.toLowerCase().includes(searchText.toLowerCase()),
        )
      : [];
  const handleSearch = (e) => {
    e.preventDefault();
    let results = [];
    if (searchText.trim().length > 0) {
      results = products?.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase()),
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
    setShowResults(false);
    navigate(`/e-commerce/ShowResults/${searchText.trim()}`);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    setShowResults(true);
    let results = [];
    if (e.target.value.trim().length > 0) {
      results = products?.filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase()),
      );
      setSearchResults(results);
      navigate(`/e-commerce/ShowResults/${e.target.value.trim()}`);
    } else {
      setSearchResults([""]);
      navigate(`/e-commerce`);
    }
  };
  return (
    <form
      action="#"
      className="min-w-sm w-full h-[35px] relative"
      autoComplete="off"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder={t("header.search")}
        className="w-full h-full bg-white border-b border-gray-200 text-pink-500 pl-2 outline-none focus:outline-none"
        value={searchText}
        onChange={handleChange}
        onFocus={() => setShowResults(true)}
        onBlur={() => setTimeout(() => setShowResults(false), 150)}
      />
      <button
        type="submit"
        className="absolute right-4 top-[5px] cursor-pointer"
      >
        <Search size="24px" color="#272343" />
      </button>
      {/* Resultados de búsqueda en dropdown */}
      {showResults && searchText.trim().length > 0 && (
        <div className="absolute left-0 top-[40px] w-full bg-white border border-gray-200 rounded shadow-lg z-50 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <button
                key={product.id}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                onMouseDown={() => {
                  setShowResults(false);
                  setSearchText("");
                  setSearchResults([product]);
                  navigate(`/e-commerce/ShowResults/${product.title}`);
                }}
              >
                {product.title}
              </button>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-400">
              {t("searcher.not_found")}{" "}
            </div>
          )}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
