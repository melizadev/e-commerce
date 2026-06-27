import { Link, useParams } from "react-router";
import { MoveRight, Proportions } from "lucide-react";
import { useTranslation } from "react-i18next";
import ProductsSection from "../../productsSection/ProductSection";
import useProducts from "../../../hooks/useProducts";
import Loader from "../../common/Loader";
import { useMemo } from "react";
const ShowResults = () => {
  const { t } = useTranslation();
  const { products, loading } = useProducts();
  const { search } = useParams();

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="bg-white w-full py-4">
      <div className="container mx-auto px-4">
        <div className="border-b border-gray-200 pb-2 mb-2">
          <h2 className="text-xl font-semibold text-gray-700">
            <span className="text-gray-500">{filteredProducts?.length}</span>{" "}
            {t("searcher.results_for")}
          </h2>

          <p className="text-gray-500 mt-1">"{search}"</p>
        </div>

        <ProductsSection products={filteredProducts} />
      </div>
    </section>
  );
};

export default ShowResults;
