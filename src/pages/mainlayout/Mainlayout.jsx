import { ShoppingBag } from "lucide-react";
import Home from "../../pages/home/Home";
import Auth from "../../auth/auth";
import Login from "../../auth/login/Login";
import Register from "../../register/Register";
import Error from "../../pages/error/error";
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
import { useState } from "react";
const Mainlayout = () => {
  const { t } = useTranslation();
  const [searchResults, setSearchResults] = useState([]); // Nuevo estado para guardar resultados
  const products = [
    {
      id: 1,
      title: "Elegant Dress",
      slug: "elegant-dress",
      price: 59.99,
      category: "Dresses",
      image:
        "https://www.newyorkdress.com/cdn/shop/products/LaDivine-CD868_greenary_600x.jpg?v=1745422889",
    },
    {
      id: 2,
      title: "Classic Heels",
      slug: "classic-heels",
      price: 39.99,
      category: "Heels",
      image:
        "https://www.charleskeith.co.id/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-id-products/default/dwed4ac82e/images/hi-res/2025-L3-CK1-60051071-B8-1.jpg?sw=756&sh=1008",
    },
    {
      id: 3,
      title: "Summer Top",
      slug: "summer-top",
      price: 19.99,
      category: "Tops",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEWVp60whKT3nYAdWdfTCIbSuGDzP6oYF6g&s",
    },
    {
      id: 4,
      title: "Denim Skirt",
      slug: "denim-skirt",
      price: 29.99,
      category: "Skirts",
      image:
        "https://mayeandco.com.au/cdn/shop/files/53_367e2502-fb2f-45ec-b4ff-bebb0cb14602_1200x.jpg?v=1725454545 ",
    },
    {
      id: 5,
      title: "Casual Pants",
      slug: "casual-pants",
      price: 34.99,
      category: "Pants",
      image: "https://shopxiaolizi.com/cdn/shop/products/1940.jpg?v=1749143909",
    },
    {
      id: 6,
      title: "Leather Jacket",
      slug: "leather-jacket",
      price: 89.99,
      category: "Tops",
      image:
        "https://vspatelier.com/cdn/shop/files/FUA1538_600x.webp?v=1741269393",
    },
    {
      id: 7,
      title: "Kitten Heels",
      slug: "kitten-heels",
      price: 49.99,
      category: "Heels",
      image:
        "https://www.selfieleslie.com/cdn/shop/files/SLVE021_20SILVER-featured_1365x2048.jpg?v=1729644551",
    },
    {
      id: 8,
      title: "Floral Blouse",
      slug: "floral-blouse",
      price: 24.99,
      category: "Tops",
      image:
        "https://www.apricotonline.co.uk/dw/image/v2/BFZV_PRD/on/demandware.static/-/Sites-master-catalog-GB/default/dwc470b666/images/large/5051839856790.jpg?sw=580&sh=772",
    },
    {
      id: 9,
      title: "Wool Sweater",
      slug: "wool-sweater",
      price: 44.99,
      category: "Tops",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp49woHs9mu8ES6h_oxVrmIsraQfSoMPU_TQ&s",
    },
    {
      id: 10,
      title: "Mini Skirt",
      slug: "mini-skirt",
      price: 27.99,
      category: "Skirts",
      image:
        "https://danielleguiziony.com/cdn/shop/files/LianaTop_BlackPleatedMiniSkirt1_ba406155-3fca-444d-816a-0ee062c2656a.jpg?v=1728072679",
    },
  ];

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
              to="/shoppingCart"
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
          path="/home"
          element={
            <AuthCheck>
              <Home products={products} handleAddToCart={handleAddToCart} />
            </AuthCheck>
          }
        />
        <Route
          path="/:category"
          element={
            <Category products={products} handleAddToCart={handleAddToCart} />
          }
        />
        <Route
          path="/ShowResults/:search"
          element={<ShowResults searchResults={searchResults} />}
        />
        <Route path="/shoppingCart" element={<ShoppingCar />} />
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
