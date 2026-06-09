import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";

const Layout = ({ products, setSearchResults, searchResults }) => {
  return (
    <div className="w-full bg-gray-50">
      <Navbar
        products={products}
        setSearchResults={setSearchResults}
        searchResults={searchResults}
      />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
