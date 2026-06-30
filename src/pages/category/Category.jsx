import { useParams } from "react-router";
import useProducts from "../../hooks/useProducts";
import Filter from "../../components/filter/Filter";
import ProductList from "../../components/productsSection/ProductList";
import Error from "../error/Error";
import Loader from "../../components/common/Loader";
import ProductSection from "../../components/productsSection/ProductSection";
const Category = () => {
  const { products, loading } = useProducts();
  const { category } = useParams();
  const items = products.filter(
    (product) => product.category.toLowerCase() === category?.toLowerCase(),
  );

  return (
    <div className="w-full min-h-[83vh] bg-[#ffff] flex items-start justify-center">
      <div className="container p-4">
        <h2 className="text-xl text-gray-600 py-2">Results for {category}: </h2>
        <ProductSection products={items} loading={loading} />
      </div>
    </div>
  );
};

export default Category;
