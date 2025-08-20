import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  calculateTotalAmount,
  calculateTotalQuantity,
  removeFromCart,
} from "../../features/cartSlice";
import { toast } from "react-hot-toast";
import { Trash2 } from "lucide-react";

const ShoppingCar = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  const handleDeleteProduct = (item) => {
    try {
      dispatch(removeFromCart(item));
      dispatch(calculateTotalQuantity(item));
      toast.success(
        <div className="relative p-2">
          {item.title} {t("cart.deleted")} {t("cart.successfully")}
        </div>
      );
    } catch (error) {
      console.error(error);
      toast.error("Oops, there seems to be an error");
    }
  };

  useEffect(() => {
    dispatch(calculateTotalAmount(cartItems));
  }, [cartItems, dispatch]);

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
              <div
                key={item?.id}
                className="w-full h-[100px] flex items-center justify-between p-1 border-gray-200 odd:bg-gray-50 even:bg-gray-100 "
              >
                <div className="flex items-center">
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <div>
                    <h2 className="text-gray-700 font-semibold text-base">
                      {item?.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      ${item?.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-1">
                  <span className="text-gray-600 bg-white border-r border-gray-200 p-1 rounded">
                    {t("cart.quantity")} {item?.cartQuantity}
                  </span>
                  <div title={t("cart.delete")} className="flex items-center">
                    <button
                      onClick={() => handleDeleteProduct(item)}
                      className="ml-1 text-gray-500 hover:text-gray-700 cursor-pointer p-1"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-1 items-center justify-center h-full w-full">
              <p className="text-gray-400 text-center">{t("cart.empty")}</p>
            </div>
          )}
        </div>
        {cartItems?.length > 0 && (
          <div className="bg-white border-t border-gray-300 rounded-b-lg flex flex-col items-end pr-4 pb-2 m-0">
            <p className="text-gray-600 text-center py-2">
              {t("cart.total_amount")} {cartTotalAmount}$
            </p>
            <button className="text-gray-600 hover:shadow-sm duration-200 font-semibold border border-gray-400 rounded-lg py-1 px-3 cursor-pointer">
              {t("cart.place_order")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCar;
