import { ShoppingBag } from "lucide-react";
import Home from "../../pages/home/Home";
import Login from "../../auth/login/Login";
import Register from "../../pages/register/Register";
import Error from "../../pages/error/Error";
import { Route, Routes, Link } from "react-router";
import { Navigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Category from "../category/Category";
import Footer from "../../components/footer/Footer";
import ShoppingCar from "../shoppingCart/ShoppingCar";
import ShowResults from "../../components/navbar/ShowResults";
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import Profile from "../../pages/profile/Profile";
import ProductAdminList from "../products-admin/ProductAdminList";
import Layout from "../../layout/Layout";
import ProtectedRoutes from "../../components/protectedroutes/ProtectedRoutes";
const Mainlayout = () => {
  const { userInfo } = useUser();
  const [searchResults, setSearchResults] = useState([]); // Nuevo estado para guardar resultados

  return (
    <>
      <Routes>
        <Route
          element={
            <Layout
              setSearchResults={setSearchResults}
              searchResults={searchResults}
            />
          }
        >
          <Route path="/e-commerce" element={<Home />} />
          <Route
            path="/e-commerce/shoppingCart"
            element={<ShoppingCar />}
          />{" "}
          <Route path="/e-commerce/login" element={<Login />} />
          {userInfo?.email && (
            <Route path="/e-commerce/profile" element={<Profile />} />
          )}
          <Route path="/e-commerce/register" element={<Register />} />
          <Route
            path="/e-commerce/ShowResults/:search"
            element={<ShowResults searchResults={searchResults} />}
          />
          <Route path="/e-commerce/:category" element={<Category />} />
          <Route path="*" element={<Error />} />
          <Route
            path="/e-commerce/admin/products"
            element={
              <ProtectedRoutes>
                <ProductAdminList />
              </ProtectedRoutes>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Mainlayout;
