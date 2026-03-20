import { useState } from "react";
import TopBar from "./TopBar";
import NavbarMiddle from "./NavbarMiddle";
import MenuMobile from "./MenuMobile";
const Navbar = ({ products, setSearchResults }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      {isMenuOpen && <MenuMobile />}
    </div>
  );
};
export default Navbar;
