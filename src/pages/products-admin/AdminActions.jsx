const ProductActions = ({ setSearchTerm, searchTerm, setNewProduct }) => {
  return (
    <div className="mt-4 container mx-auto flex justify-between px-4 p-2 bg-white rounded-lg shadow-md">
      <input
        type="text"
        className="border-2 border-gray-300  p-2 rounded max-w-sm w-full text-sm text-gray-700"
        placeholder="Search products by name/id/category"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <button
        onClick={() =>
          setNewProduct({
            title: "",
            category: "",
            price: "",
            description: "",
          })
        }
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Product
      </button>
    </div>
  );
};

export default ProductActions;
