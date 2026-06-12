import ProductForm from "./ProductForm";
import DeleteModal from "./deletemodal/DeleteModal";
const ProductModals = ({
  editProduct,
  handleCreateProduct,
  handleUpdateProduct,
  setEditProduct,
  newProduct,
  setNewProduct,
  idProduct,
  handleDelete,
  setIdProduct,
}) => {
  return (
    <>
      {editProduct && (
        <ProductForm
          value={editProduct}
          onSubmit={handleUpdateProduct}
          onClose={() => setEditProduct(null)}
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
          onSubmit={handleCreateProduct}
          onClose={() => setNewProduct(null)}
          mode={"create"}
        />
      )}
      {idProduct && (
        <DeleteModal
          onClick={() => handleDelete(idProduct)}
          onClose={() => setIdProduct(null)}
        />
      )}
    </>
  );
};
export default ProductModals;
