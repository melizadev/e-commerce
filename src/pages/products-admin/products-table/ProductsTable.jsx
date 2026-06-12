import { Pencil, Trash } from "lucide-react";

const ProductsTable = ({ filteredProducts, setEditProduct, setIdProduct }) => {
  return (
    <table className="container">
      <thead>
        <tr className="border-b border-gray-300 bg-gray-50 font-bold text-gray-800">
          <th className="text-left px-4 py-3">Código</th>
          <th className="text-left px-6 py-3">Producto</th>
          <th className="text-left px-6 py-3">Categoría</th>
          <th className="text-left px-6 py-3">Stock</th>
          <th className="text-left px-6 py-3">Precio</th>
          <th className="text-left px-6 py-3">Imagen</th>
          <th className="text-center px-6 py-3">Acciones</th>
        </tr>
      </thead>

      <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
        {filteredProducts.map((product) => (
          <tr
            key={product._id}
            className="border-b border-gray-300 hover:bg-gray-50"
          >
            <td className="px-6 py-4">
              {String(product._id).padStart(3, "0")}
            </td>
            <td className="px-6 py-4">{product.title}</td>
            <td className="px-6 py-4">{product.category}</td>
            <td className="px-6 py-4">{product.stock}</td>
            <td className="px-6 py-4">${product.price.toFixed(2)}</td>
            <td className="px-6 py-4">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-16 h-16 object-cover"
              />
            </td>
            <td className="px-6 py-4">
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setEditProduct(product)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => setIdProduct(product._id)}
                  className="text-red-500 hover:text-red-600 cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
