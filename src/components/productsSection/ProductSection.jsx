import { useState } from "react";
import { useTranslation } from "react-i18next";
import Filter from "../filter/Filter";
import ProductList from "../../components/productsSection/ProductList";

const ProductsSection = ({ products }) => {
  const { t } = useTranslation();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [hasFiltered, setHasFiltered] = useState(false);

  const productsToShow = hasFiltered ? filteredProducts : products;

  const noResults = productsToShow.length === 0;

  return (
    <section className="bg-white w-full px-2 pb-10 container">
      <Filter
        items={products}
        setFilteredProducts={setFilteredProducts}
        setHasFiltered={setHasFiltered}
      />

      {noResults ? (
        <div className="h-60 flex items-center justify-center">
          <p className="text-gray-500 text-xl">{t("searcher.no_results")}</p>
        </div>
      ) : (
        <ProductList products={productsToShow} />
      )}
    </section>
  );
};

export default ProductsSection;
