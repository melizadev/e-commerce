import ProductActions from "./AdminActions";
import useProducts from "../../hooks/useProducts";
import usePagination from "../../hooks/usePagination";
import useProductSearch from "../../hooks/useProductSearch";
import useProductModals from "../../hooks/useProductModals";
import ProductsSection from "./ProductsSection";
import { useState } from "react";
import ProductModals from "./modals/ProductModals";
import toast from "react-hot-toast";
import ProductsTableSkeleton from "./products-table/ProductsTableSkeleton";
const AdminLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    editProduct,
    setEditProduct,
    newProduct,
    setNewProduct,
    idProduct,
    setIdProduct,
  } = useProductModals();

  const {
    products,
    loading,
    handleCreateProduct,
    handleDelete,
    handleUpdateProduct,
  } = useProducts();

  const filteredProducts = useProductSearch(products, searchTerm);

  const { totalPages, currentPage, setCurrentPage, paginatedItems } =
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
    <section className="bg-gray-50 flex flex-col relative">
      <ProductActions
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        setNewProduct={setNewProduct}
      />
      <div className="container mx-auto py-8">
        {/* Table */}
        <div className="overflow-x-auto">
          {loading ? (
            <ProductsTableSkeleton />
          ) : (
            <ProductsSection
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              paginatedItems={paginatedItems}
              setEditProduct={setEditProduct}
              setIdProduct={setIdProduct}
            />
          )}

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

export default AdminLayout;
