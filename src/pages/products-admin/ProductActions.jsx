const ProductActions = ({ setSearchTerm, searchTerm, setNewProduct }) => {
  return (
    <div className="container mx-auto mt-4 bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <input
          type="text"
          className="w-full sm:max-w-sm border-2 border-gray-300 p-2 rounded text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
          className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition cursor-pointer"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default ProductActions;
