import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../features/cartSlice";
import { useUser } from "../../context/UserContext";
import CartItem from "./CartItem";
import useCartActions from "../../hooks/useCartActions";
import { Link } from "react-router";
import GuestCartState from "./GuestCartState";
const ShoppingCar = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isAuthenticated } = useUser();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const { handleDeleteProduct, handleCheckout, checkingOut } = useCartActions();
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getCart());
    }
  }, [isAuthenticated, dispatch]);
  if (!isAuthenticated) {
    return <GuestCartState />;
  }
  return (
    <div className="w-full min-h-[86vh]  flex items-center justify-center bg-white">
      <div className="w-[85%] h-[500px] mx-auto border border-gray-200 rounded-lg shadow-sm flex flex-col justify-between items">
        <div className="bg-white border-b border-gray-200 rounded-t-lg flex items-center justify-between p-2">
          <h1 className="text-gray-500 text-2xl pl-2">{t("cart.title")}</h1>
          {cartItems?.length > 0 && (
            <p className="border border-gray-300 rounded-lg text-gray-600 text-center p-2">
              {t("cart.total_articles")}
              {cartTotalQuantity}
            </p>
          )}
        </div>
        <div className="w-full h-full flex flex-col items-start overflow-y-auto bg-white">
          {cartItems?.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                item={item}
                handleDeleteProduct={handleDeleteProduct}
                key={item._id}
              />
            ))
          ) : (
            <div className="flex flex-1 items-center justify-center text-xl h-full w-full">
              <p className="text-gray-500 text-center">{t("cart.empty")}</p>
            </div>
          )}
        </div>

        <div className="bg-white border-t border-gray-300 rounded-b-lg flex justify-between items-start p-4 m-0">
          <div>
            <Link
              to="/orders"
              className="text-gray-700 p-2 rounded-md border-gray-400 border hover:shadow-sm duration-200 "
            >
              See my orders
            </Link>
          </div>
          {cartItems?.length > 0 && (
            <div>
              <p className="text-gray-600 text-center pb-4">
                {t("cart.total_amount")} {cartTotalAmount}$
              </p>
              <button
                onClick={() => handleCheckout()}
                disabled={checkingOut}
                className="text-gray-600 hover:shadow-sm duration-200 font-semibold border border-gray-400 rounded-lg py-1 px-3 cursor-pointer"
              >
                {checkingOut ? "Procesing..." : "Checkout"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCar;
