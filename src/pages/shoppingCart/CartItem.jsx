import { useTranslation } from "react-i18next";
import { Trash2 } from "lucide-react";

const CartItem = ({ item, handleDeleteProduct }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-[100px] flex items-center justify-between p-1 border-gray-200 odd:bg-gray-50 even:bg-gray-100 ">
      <div className="flex items-center">
        <img
          src={item?.productId.imageUrl}
          alt={item?.productId.title}
          className="w-20 h-20 object-cover mr-4"
        />
        <div>
          <h2 className="text-gray-700 font-semibold text-base">
            {item?.productId.title}
          </h2>
          <p className="text-gray-500 text-sm">
            ${item?.productId?.price?.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex items-center p-1">
        <span className="text-gray-600 bg-white border-r border-gray-200 p-1 rounded">
          {t("cart.quantity")} {item?.quantity}
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
  );
};

export default CartItem;
