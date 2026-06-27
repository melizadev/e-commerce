const ProductsTableSkeleton = () => {
  return (
    <table className="container animate-pulse">
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

      <tbody className="bg-white divide-y divide-gray-200">
        {[...Array(6)].map((_, index) => (
          <tr key={index} className="border-b border-gray-300">
            <td className="px-6 py-4">
              <div className="h-4 w-14 bg-gray-200 rounded"></div>
            </td>

            <td className="px-6 py-4">
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
            </td>

            <td className="px-6 py-4">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
            </td>

            <td className="px-6 py-4">
              <div className="h-4 w-10 bg-gray-200 rounded"></div>
            </td>

            <td className="px-6 py-4">
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </td>

            <td className="px-6 py-4">
              <div className="w-16 h-16 bg-gray-200 rounded"></div>
            </td>

            <td className="px-6 py-4">
              <div className="flex justify-center gap-3">
                <div className="h-4 w-10 bg-gray-200 rounded"></div>
                <div className="h-4 w-14 bg-gray-200 rounded"></div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTableSkeleton;
