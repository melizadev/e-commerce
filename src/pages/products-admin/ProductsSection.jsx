import ProductsTable from "./products-table/ProductsTable";
import Pagination from "../../components/pagination/Pagination";
import { useTranslation } from "react-i18next";
const ProductsSection = ({
  paginatedItems,
  setEditProduct,
  setIdProduct,
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const { t } = useTranslation();
  if (paginatedItems.length === 0) {
    return (
      <div className="min-h-[45vh] w-full flex items-center justify-center">
        <p className="text-gray-500 mt-4 text-xl">{t("searcher.no_results")}</p>
      </div>
    );
  }
  return (
    <>
      <ProductsTable
        paginatedItems={paginatedItems}
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

export default ProductsSection;
