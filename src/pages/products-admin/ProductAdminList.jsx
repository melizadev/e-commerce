import ProductActions from "./ProductActions";
import useProducts from "../../hooks/useProducts";
import usePagination from "../../hooks/usePagination";
import useProductSearch from "../../hooks/useProductSearch";
import useProductModals from "../../hooks/useProductModals";
import ProductsListSection from "./ProductsListSection";
import { useState } from "react";
import ProductModals from "./ProductModals";
import toast from "react-hot-toast";
const ProductAdminList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    editProduct,
    setEditProduct,
    newProduct,
    setNewProduct,
    idProduct,
    setIdProduct,
  } = useProductModals();

  const { products, handleCreateProduct, handleDelete, handleUpdateProduct } =
    useProducts();

  const filteredProducts = useProductSearch(products, searchTerm);

  const { totalPages, currentPage, setCurrentPage, paginatedProducts } =
    usePagination(filteredProducts);

  const handleCreate = async (productData) => {
    try {
      await handleCreateProduct(productData);
      toast.success("Producto creado correctamente");
      setNewProduct(null);
    } catch (error) {
      toast.error("No se pudo crear el producto");
      console.error(error);
    }
  };

  const handleUpdate = async (productData) => {
    try {
      await handleUpdateProduct(productData);
      toast.success("Producto actualizado correctamente");
      setEditProduct(null);
    } catch (error) {
      toast.error("No se pudo actualizar el producto");
      console.error(error);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      await handleDelete(idProduct);
      toast.success("Producto eliminado correctamente");
      setIdProduct(null);
    } catch (error) {
      toast.error("No se pudo eliminar el producto");
      console.error(error);
    }
  };

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
          <ProductsListSection
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            paginatedProducts={paginatedProducts}
            setEditProduct={setEditProduct}
            setIdProduct={setIdProduct}
          />
          {/* Modals */}
          <ProductModals
            setEditProduct={setEditProduct}
            setIdProduct={setIdProduct}
            editProduct={editProduct}
            newProduct={newProduct}
            idProduct={idProduct}
            onCreate={handleCreate}
            onUpdate={handleUpdate}
            onDelete={handleDeleteConfirm}
            setNewProduct={setNewProduct}
            closeEdit={() => setEditProduct(null)}
            closeCreate={() => setNewProduct(null)}
            closeDelete={() => setIdProduct(null)}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductAdminList;
