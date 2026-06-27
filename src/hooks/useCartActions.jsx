import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { toast } from "react-hot-toast";
import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";
import { removeFromCart } from "../features/cartSlice";
import { useUser } from "../context/UserContext";
import { checkoutOrder } from "../services/orderServices";
import { useNavigate } from "react-router";
const useCartActions = () => {
  const { userInfo } = useUser();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = async (product) => {
    if (!userInfo?.email) {
      toast.error("Debes iniciar sesión para añadir al carrito", {
        duration: 1000,
      });
      return;
    }

    try {
      await dispatch(addToCart(product._id)).unwrap();
      toast.success(
        <div className="flex justify-center items-center p-2">
          {t("cart.action_add1")} {product.title} {t("cart.action_add2")}
          <Link to="/shoppingCart" className="" title={t("cart.title")}>
            <ShoppingBag color="gray" />
          </Link>
        </div>,
        {
          duration: 1000,
        },
      );
    } catch (error) {
      console.error(error);

      toast.error("Oops, there seems to be an error", {
        duration: 1000,
      });
    }
  };
  const handleDeleteProduct = (item) => {
    try {
      dispatch(removeFromCart(item.productId._id));
      toast.success(
        <div className="relative p-2">
          {item.productId.title} {t("cart.deleted")} {t("cart.successfully")}
        </div>,
        { duration: 600 },
      );
    } catch (error) {
      console.error(error);
      toast.error("Oops, there seems to be an error");
    }
  };

  const handleCheckout = async () => {
    try {
      const response = await checkoutOrder();
      navigate(`/payment/${response.orderId}`);
    } catch (error) {
      console.error("Error al crear checkout:", error);
    }
  };

  return {
    handleAddToCart,
    handleDeleteProduct,
    handleCheckout,
  };
};

export default useCartActions;
