import { useState } from "react";
import { useTranslation } from "react-i18next";
import Filter from "../filter/Filter";
import ProductList from "../productList/ProductList";
import { products } from "../data/products";
const AllArticles = ({ handleAddToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [hasFiltered, setHasFiltered] = useState(false);
  const noResults = hasFiltered && filteredProducts.length === 0;
  const { t } = useTranslation();
  const items = products;

  return (
    <div className="bg-white container px-2 flex-row mt-8 md:flex-row lg:flex-row flex lg:justify-between pb-2 mb-15">
      <div className="w-full flex flex-col">
        <h3 className="text-neutral-600 text-2xl font-bold py-2">
          {" "}
          All articles
        </h3>
        <Filter
          setFilteredProducts={setFilteredProducts}
          items={items}
          setHasFiltered={setHasFiltered}
        />
        {noResults ? (
          <div className="h-full w-full flex items-center justify-center">
            <p className="text-gray-500 mt-4 text-xl">
              {t("searcher.no_results")}
            </p>
          </div>
        ) : (
          <ProductList
            filteredProducts={filteredProducts}
            handleAddToCart={handleAddToCart}
          />
        )}
      </div>
    </div>
  );
};

export default AllArticles;
