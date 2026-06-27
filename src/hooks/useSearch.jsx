import { useState, useMemo } from "react";
import { useNavigate } from "react-router";

const useSearch = (products = []) => {
  const [searchText, setSearchText] = useState("");
  const [showResults, setShowResults] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    setShowResults(value.trim().length > 0);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchText) {
      setShowResults(false);
      navigate("/");
      return;
    }
    setShowResults(false);
    navigate(`/showResults/${searchText}`);
  };

  const handleSelectProduct = (product) => {
    setShowResults(false);
    navigate(`/showResults/${product.title}`);
  };

  const clearSearch = () => {
    setSearchText("");
    setShowResults(false);
    navigate("/");
  };
  const filteredProducts = useMemo(() => {
    const text = searchText.trim().toLowerCase();
    if (!text) return [];

    return products.filter((product) =>
      product.title.toLowerCase().includes(text),
    );
  }, [products, searchText]);

  return {
    searchText,
    filteredProducts,
    showResults,
    handleChange,
    handleSearch,
    handleSelectProduct,
    clearSearch,
    setShowResults,
    setSearchText,
  };
};

export default useSearch;
