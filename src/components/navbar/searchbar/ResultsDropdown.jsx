import { useTranslation } from "react-i18next";
const ResultsDropdown = ({ filteredProducts, handleSelectProduct }) => {
  const { t } = useTranslation();
  return (
    <div
      className="
        absolute 
        left-0 
        top-[55px] 
        w-full 
        bg-white 
        rounded-2xl 
        shadow-xl 
        border 
        border-gray-100 
        z-50 
        overflow-hidden
        max-h-[300px]
        overflow-y-auto
      "
    >
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <button
            key={product._id}
            className="
              w-full 
              text-left 
              px-5 
              py-3 
              text-gray-700 
              hover:bg-pink-50 
              hover:text-pink-600 
              transition-colors 
              duration-200
              cursor-pointer
            "
            onClick={() => handleSelectProduct(product)}
          >
            {product.title}
          </button>
        ))
      ) : (
        <div className="px-5 py-3 text-gray-400">{t("searcher.not_found")}</div>
      )}
    </div>
  );
};

export default ResultsDropdown;
