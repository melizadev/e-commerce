import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { products } from "../data/products";
import { useState } from "react";
import Filter from "../filter/Filter";
import ProductList from "../productList/ProductList";
const Category = ({ handleAddToCart }) => {
  const { t } = useTranslation();
  const { category } = useParams();
  const items = products.filter(
    (product) => product.category.toLowerCase() === category?.toLowerCase()
  );
  const [filteredProducts, setFilteredProducts] = useState(items);
  const [hasFiltered, setHasFiltered] = useState(false); // 👈 nuevo
  const noResults = hasFiltered && filteredProducts.length === 0;

  return (
    <div className="w-full min-h-[86vh] bg-[#ffff] p-4">
      <div className="container px-4">
        <h1 className="text-[40px] text-[#6b6b6b] pb-3 capitalize">
          {t(`categories.${category}`) || category}
        </h1>
        <Filter
          setFilteredProducts={setFilteredProducts}
          items={items}
          setHasFiltered={setHasFiltered}
        />
        {noResults ? (
          <div className="h-full w-full flex items-center justify-center">
            <p className="text-gray-500 mt-4 text-lg">
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

export default Category;
