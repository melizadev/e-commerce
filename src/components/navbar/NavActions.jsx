import { useSelector } from "react-redux";
import { Heart, ShoppingBag, User } from "lucide-react";
import UserMenu from "./UserMenu";
const NavActions = ({ handleCartClick, menuUserOpen, setMenuUserOpen }) => {
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity,
  );

  return (
    <div className="hidden navbar_middle_right w-auto lg:flex md:flex items-center gap-1">
      {/*shopping cart */}
      <button
        className="capitalize w-[70px] cursor-pointer p-2 flex bg-transparent border-none shadow-none"
        onClick={handleCartClick}
      >
        <ShoppingBag color="#574c41" />
        <div className="badge border-none text-white badge-sm bg-pink-600">
          {cartTotalQuantity}
        </div>
      </button>
      {/*wishlist */}
      <button className="btn capitalize  bg-transparent border-none shadow-none">
        <Heart color="#574c41" />
      </button>
      {/*user menu with dropdown */}
      <div>
        <button onClick={() => setMenuUserOpen(!menuUserOpen)} className="p-2">
          <User color="#574c41" />
        </button>
        {menuUserOpen && <UserMenu setMenuUserOpen={setMenuUserOpen} />}
      </div>
    </div>
  );
};

export default NavActions;
