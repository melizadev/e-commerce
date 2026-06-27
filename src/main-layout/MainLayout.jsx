import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCart } from "../features/cartSlice";
import { useUser } from "../context/UserContext";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  const dispatch = useDispatch();
  const { userInfo, loading } = useUser();

  useEffect(() => {
    if (!loading && userInfo?.email) {
      dispatch(getCart());
    }
  }, [userInfo, loading, dispatch]);
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
