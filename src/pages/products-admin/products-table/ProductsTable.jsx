import { Pencil, Trash } from "lucide-react";

const ProductsTable = ({ paginatedItems, setEditProduct, setIdProduct }) => {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-[850px]">
        <thead>
          <tr className="border-b border-gray-300 bg-gray-50 font-bold text-gray-800">
            <th className="text-left px-4 py-3 whitespace-nowrap">Código</th>
            <th className="text-left px-4 py-3 whitespace-nowrap">Producto</th>
            <th className="text-left px-4 py-3 whitespace-nowrap">Categoría</th>
            <th className="text-left px-4 py-3 whitespace-nowrap">Stock</th>
            <th className="text-left px-4 py-3 whitespace-nowrap">Precio</th>
            <th className="text-left px-4 py-3 whitespace-nowrap">Imagen</th>
            <th className="text-center px-4 py-3 whitespace-nowrap">
              Acciones
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
          {paginatedItems.map((product) => (
            <tr
              key={product._id}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-4 whitespace-nowrap">
                {String(product._id).padStart(3, "0").slice(-6)}
              </td>

              <td className="px-4 py-4 min-w-[200px]">{product.title}</td>

              <td className="px-4 py-4 whitespace-nowrap">
                {product.category}
              </td>

              <td className="px-4 py-4 whitespace-nowrap">{product.stock}</td>

              <td className="px-4 py-4 whitespace-nowrap">
                ${product.price.toFixed(2)}
              </td>

              <td className="px-4 py-4">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </td>

              <td className="px-4 py-4">
                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={() => setEditProduct(product)}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition cursor-pointer"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => setIdProduct(product._id)}
                    className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
