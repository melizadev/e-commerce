import { ShoppingBag } from "lucide-react";
import Home from "../../pages/home/Home";
import Auth from "../../auth/auth";
import Login from "../../auth/login/Login";
import Register from "../../register/Register";
import Error from "../../pages/error/Error";
import AuthCheck from "../authcheck/AuthCheck";
import { Route, Routes, Link } from "react-router";
import Navbar from "../../components/navbar/Navbar";
import Category from "../../components/category/Category";
import Footer from "../../components/footer/Footer";
import ShoppingCar from "../../components/shoppingCart/ShoppingCar";
import { useDispatch } from "react-redux";
import { addToCart, calculateTotalQuantity } from "../../features/cartSlice";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import ShowResults from "../../components/navbar/ShowResults";
import { products } from "../../components/data/products";
import { useState } from "react";
const Mainlayout = () => {
  const { t } = useTranslation();
  const [searchResults, setSearchResults] = useState([]); // Nuevo estado para guardar resultados
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    try {
      dispatch(addToCart(product));
      dispatch(calculateTotalQuantity(product));
      toast.success(
        <div className="relative p-2">
          {t("cart.action_add1")} {product?.title} {t("cart.action_add2")}
          <div title={t("cart.title")}>
            <Link
              to="/e-commerce/shoppingCart"
              className="absolute right-[8px] top-[50%] pt-1"
            >
              <ShoppingBag color="gray" />
            </Link>
          </div>
        </div>
      );
    } catch (error) {
      console.error(error);
      toast.error("Oops, there seems to be an error");
    }
  };

  return (
    <>
      <Navbar
        products={products}
        setSearchResults={setSearchResults}
        searchResults={searchResults}
      />
      <Routes>
        <Route
          path="/e-commerce"
          element={
            <AuthCheck>
              <Home products={products} handleAddToCart={handleAddToCart} />
            </AuthCheck>
          }
        />
        <Route path="/e-commerce/shoppingCart" element={<ShoppingCar />} />
        <Route
          path="/e-commerce/ShowResults/:search"
          element={<ShowResults searchResults={searchResults} />}
        />
        <Route
          path="/e-commerce/:category"
          element={
            <Category products={products} handleAddToCart={handleAddToCart} />
          }
        />
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Mainlayout;
