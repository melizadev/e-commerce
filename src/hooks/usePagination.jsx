import { useState } from "react";
const usePagination = (filteredProducts, itemsPerPage = 6) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  return { totalPages, setCurrentPage, paginatedProducts, currentPage };
};

export default usePagination;
