import { Link } from "react-router";
import { Menu } from "lucide-react";
import SearchBar from "./SearchBar";
import NavActions from "./NavActions";
import { useState } from "react";
import { useNavigate } from "react-router";
const NavbarMiddle = ({
  products,
  setSearchResults,
  setIsMenuOpen,
  isMenuOpen,
}) => {
  const [menuUserOpen, setMenuUserOpen] = useState(false);
  const navigate = useNavigate();
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleCartClick = () => {
    navigate("/e-commerce/shoppingCart");
  };
  return (
    <div className="container px-4 gap-2 flex justify-between items-center md:justify-between lg:justify-between">
      {/* //logo and menu icon for mobile */}
      <Link to="/e-commerce">
        <h1 className="text-4xl font-extrabold text-gray-500 mb-2">BE-U</h1>
      </Link>
      {/* menu icon for mobile */}
      <button
        onClick={handleMenu}
        className="block md:hidden lg:hidden cursor-pointer"
      >
        <Menu color="#4a5565" />
      </button>
      {/* // search products in search bar */}
      <SearchBar products={products} setSearchResults={setSearchResults} />
      {/* navbar middle right  */}
      <NavActions
        handleCartClick={handleCartClick}
        menuUserOpen={menuUserOpen}
        setMenuUserOpen={setMenuUserOpen}
      />
    </div>
  );
};

export default NavbarMiddle;
