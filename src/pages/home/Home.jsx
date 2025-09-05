import Categories from "../../components/categories/Categories";
import Banner from "../../components/banner/Banner";
import AllArticles from "../../components/allarticles/AllArticles";
import Descount from "../../components/descounts/Descount";
const Home = ({ products, handleAddToCart }) => {
  return (
    <div className="w-full flex flex-col items-center pt-0 justify-center bg-[#ffffff]">
      <Banner />
      <Categories />
      <Descount />
      <AllArticles products={products} handleAddToCart={handleAddToCart} />
    </div>
  );
};
export default Home;
