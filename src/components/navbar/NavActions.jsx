import { useSelector } from "react-redux";
import { Heart, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useUser } from "../../context/UserContext";
const NavActions = ({ handleCartClick }) => {
  const { userInfo } = useUser();
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="w-auto lg:flex md:flex sm:hidden hidden items-center justify-center gap-4">
      {/* Shopping Cart */}
      <button
        className="relative cursor-pointer p-2 rounded-full  hover:bg-pink-100 transition-all duration-300 hover:scale-105 shadow-sm"
        onClick={handleCartClick}
      >
        <ShoppingBag size={22} className="text-[#574c41]" />

        <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-pink-600 rounded-full shadow-md">
          {cartTotalQuantity}
        </span>
      </button>

      {/* Admin */}
      {userInfo?.isAdmin && (
        <Link
          to="/admin/products"
          className="px-2 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-pink-50 hover:text-pink-600 transition-all duration-300"
        >
          Admin
        </Link>
      )}

      {/* User Menu */}
      <div className="rounded-full">
        <UserMenu />
      </div>
    </div>
  );
};

export default NavActions;
