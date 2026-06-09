import { products } from "../../data/products";
import ProductActions from "./ProductActions";
import { useState } from "react";
import { Pencil, Trash } from "lucide-react";
import ProductForm from "./ProductForm";
import ProductsTable from "./products-table/ProductsTable";
import Pagination from "./pagination/Pagination";
import { deleteProduct } from "../../services/services";
const ProductAdminList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [editProduct, setEditProduct] = useState(null);
  const [newProduct, setNewProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    if (term) {
      return (
        product.title.toLowerCase().includes(term) ||
        product.id.toString().includes(searchTerm) ||
        product.category.toLowerCase().includes(term)
      );
    }
    return true;
  });
  const PRODUCTS_PER_PAGE = 6;
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <section className="bg-gray-100 flex flex-col relative">
      <ProductActions
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        setNewProduct={setNewProduct}
      />
      <div className="container mx-auto py-8">
        {/* Table */}
        <div className="overflow-x-auto">
          <ProductsTable
            filteredProducts={paginatedProducts}
            setEditProduct={setEditProduct}
            deleteProduct={deleteProduct}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
          {/* Edit Product Modal */}
          {editProduct && (
            <ProductForm
              value={editProduct}
              onSubmit={(data) => console.log(data)}
              onClose={setEditProduct}
              mode={"edit"}
            />
          )}
          {newProduct && (
            <ProductForm
              value={{
                title: "",
                category: "",
                stock: 0,
                price: 0,
                imageUrl: "",
              }}
              onSubmit={(data) => console.log(data)}
              onClose={setNewProduct}
              mode={"create"}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductAdminList;
