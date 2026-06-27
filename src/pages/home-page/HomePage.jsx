import Categories from "../../components/categories/Categories";
import Banner from "../../components/banner/Banner";
import Descount from "../../components/descounts/Descount";
import ProductSection from "../../components/productsSection/ProductSection";
import useProducts from "../../hooks/useProducts";
const HomePage = () => {
  const { products } = useProducts();
  return (
    <div className="w-full flex flex-col items-center gap-6 pt-0 justify-center bg-[#ffffff]">
      <Banner />
      <Categories />
      <Descount />
      <ProductSection products={products} />
    </div>
  );
};
export default HomePage;
