import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import useProducts from "../../hooks/useProducts";
import Filter from "../../components/filter/Filter";
import ProductList from "../../components/productsSection/ProductList";
import Error from "../error/Error";
import Loader from "../../components/common/Loader";
import ProductSection from "../../components/productsSection/ProductSection";
const Category = () => {
  const { products, loading } = useProducts();
  const { t } = useTranslation();
  const { category } = useParams();
  const items = products.filter(
    (product) => product.category.toLowerCase() === category?.toLowerCase(),
  );
  if (loading === true) {
    return <Loader />;
  }

  return (
    <div className="w-full min-h-[83vh] bg-[#ffff] flex items-start justify-center">
      <div className="container p-4">
        <h2 className="text-xl text-gray-600 py-2">
          Resultados para {category}:{" "}
        </h2>
        <ProductSection
          title={t(`categories.${category}`) || category}
          products={items}
        />
      </div>
    </div>
  );
};

export default Category;
