import Login from "../pages/auth/login/Login";
import Register from "../pages/register/Register";
import Error from "../pages/error/Error";
import { Route, Routes } from "react-router-dom";
import Category from "../pages/category/Category";
import Footer from "../components/footer/Footer";
import ShoppingCar from "../pages/shoppingCart/ShoppingCar";
import ShowResults from "../components/navbar/searchbar/ShowResults";
import Profile from "../pages/profile/Profile";
import AdminLayout from "../pages/products-admin/AdminLayout";
import MainLayout from "../main-layout/MainLayout";
import ProtectedRoutes from "../components/protectedroutes/ProtectedRoutes";
import ScrollToTop from "../components/common/ScrollToTop";
import PaymentSection from "../pages/shoppingCart/PaymentSection";
import OrderSuccess from "../pages/orders/OrderSuccess";
import Orders from "../pages/orders/Orders";
import OrderDetails from "../pages/orders/OrderDetails";
import HomePage from "../pages/home-page/HomePage";
const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shoppingCart" element={<ShoppingCar />} />
          <Route
            path="/admin/products"
            element={
              <ProtectedRoutes>
                <AdminLayout />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/payment/:orderId"
            element={
              <ProtectedRoutes>
                <PaymentSection />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoutes>
                <Profile />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/:orderId/success"
            element={
              <ProtectedRoutes>
                <OrderSuccess />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/orders/"
            element={
              <ProtectedRoutes>
                <Orders />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/orders/:orderId"
            element={
              <ProtectedRoutes>
                <OrderDetails />
              </ProtectedRoutes>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/ShowResults/:search" element={<ShowResults />} />
          <Route path="/:category" element={<Category />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
