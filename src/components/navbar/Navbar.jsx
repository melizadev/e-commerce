import { useState } from "react";
import TopBar from "./TopBar";
import NavbarMiddle from "./NavbarMiddle";
import MenuMobile from "./MenuMobile";
import useProducts from "../../hooks/useProducts";
const Navbar = ({ setSearchResults }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { products } = useProducts();

  return (
    <div className="w-full flex flex-col items-center justify-center  bg-[#ffffff]">
      {/* // top bar with shipping info and language selector */}
      <TopBar />
      {/* // middle part of navbar with logo, search bar and user actions */}
      <div className="navbar-middle w-full flex items-center justify-center bg-white border-t border-gray-200">
        <NavbarMiddle
          products={products}
          setSearchResults={setSearchResults}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
      {isMenuOpen && <MenuMobile setSearchResults={setSearchResults} />}
    </div>
  );
};
export default Navbar;
