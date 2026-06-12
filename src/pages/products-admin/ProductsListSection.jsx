import ProductsTable from "./products-table/ProductsTable";
import Pagination from "./pagination/Pagination";
const ProductsListSection = ({
  paginatedProducts,
  setEditProduct,
  setIdProduct,
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <>
      <ProductsTable
        filteredProducts={paginatedProducts}
        setEditProduct={setEditProduct}
        setIdProduct={setIdProduct}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ProductsListSection;
