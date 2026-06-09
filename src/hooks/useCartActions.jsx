import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addToCart, calculateTotalQuantity } from "../features/cartSlice";
import { toast } from "react-hot-toast";
import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";
const useCartActions = () => {
  const { t } = useTranslation();
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
        </div>,
      );
    } catch (error) {
      console.error(error);
      toast.error("Oops, there seems to be an error");
    }
  };
  return {
    handleAddToCart,
  };
};

export default useCartActions;
