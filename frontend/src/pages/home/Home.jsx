import Footer from "../../components/footer/Footer";
import Categories from "../../components/categories/Categories";
import Banner from "../../components/banner/Banner";
const Home = () => {
    return ( 
            <div className="w-full flex flex-col items-center pt-0 justify-center bg-[#ffffff]">
                 <Banner/>
                 <Categories/>     
            </div>
       
     );
}
 
export default Home;