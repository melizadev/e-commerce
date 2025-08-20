import { useState } from "react";
import { useTranslation } from "react-i18next";
const AllArticles = ({ products, handleAddToCart }) => {
  const { t } = useTranslation();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const filteredProducts = products?.filter((product) => {
    const inMin = minPrice === "" || product.price >= Number(minPrice);
    const inMax = maxPrice === "" || product.price <= Number(maxPrice);
    return inMin && inMax;
  });

  return (
    <div className="bg-white container px-2 flex-row mt-8 md:flex-row lg:flex-row flex lg:justify-between pb-2 mb-15">
      <div className="w-full flex flex-col">
        <div>
          <h1 className="text-2xl text-[#4a5565] font-bold">
            {t("filter.articles")}
          </h1>
          <div className="flex flex-row flex-wrap items-center justify-start md:items-center ">
            <div className="flex flex-row md:items-center lg:items-center items-center h-full py-1">
              <div className="flex items-center w-[140px] gap-2 rounded">
                <label className="text-gray-500">{t("filter.min_price")}</label>
                <input
                  type="number"
                  min="0"
                  placeholder={t("2$")}
                  className="focus:outline-none focus:ring-border rounded px-1 py-1 w-[50px] bg-gray-100 text-gray-500 border-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&-moz-appearance:textfield]"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center gap-2 ">
                <label className="text-gray-500">{t("filter.max_price")}</label>
                <input
                  type="number"
                  min="0"
                  placeholder={t("100$")}
                  className="focus:outline-none focus:ring-border border rounded px-1 py-1 w-[50px] bg-gray-100 text-gray-500 border-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&-moz-appearance:textfield]"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container min-h-[400px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center bg-white mt-2">
          {filteredProducts?.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col justify-between items-start bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={product.image}
                  alt=""
                  className="lg:h-[300px] md:h-[250px] h-[290px] cursor-pointer w-full object-cover"
                />
                <h2 className="text-gray-600 font-semibold mb-1 pl-2">
                  {product.title}
                </h2>
                <p className="font-bold text-gray-500 mb-1 pl-2">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full block border-t border-gray-200 font-semibold  text-gray-400 py-1 hover:bg-gray-50 duration-200 cursor-pointer"
                >
                  {t("cart.add")}
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
