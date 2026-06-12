const useProductSearch = (products, searchTerm) => {
  return products.filter((product) => {
    const term = searchTerm.toLowerCase();

    if (!term) return true;

    return (
      product.title.toLowerCase().includes(term) ||
      product._id.includes(term) ||
      product.category.toLowerCase().includes(term)
    );
  });
};
export default useProductSearch;
