import { useSelector } from "react-redux";
import { Heart, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useUser } from "../../context/UserContext";
const NavActions = ({ handleCartClick }) => {
  const { userInfo } = useUser();
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity,
  );

  return (
    <div className=" navbar_middle_right w-auto lg:flex md:flex sm:hidden hidden items-center gap-2">
      {/*shopping cart */}
      <button
        className="capitalize cursor-pointer p-2 flex bg-transparent border-none shadow-none"
        onClick={handleCartClick}
      >
        <ShoppingBag color="#574c41" />
        <div className="badge border-none text-white badge-sm bg-pink-600">
          {cartTotalQuantity}
        </div>
      </button>

      {userInfo?.isAdmin && (
        <Link
          to="/e-commerce/admin/products"
          className="text-gray-700 hover:text-pink-600"
        >
          Admin
        </Link>
      )}
      <div>
        <UserMenu />
      </div>
    </div>
  );
};

export default NavActions;
