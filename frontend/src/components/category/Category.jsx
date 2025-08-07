import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
const Category = ({ products, handleAddToCart }) => {
  const { t } = useTranslation();
  const { category } = useParams();
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category?.toLowerCase()
  );
  return (
    <div className="w-full min-h-[calc(100vh-160px)] bg-[#ffff] p-4">
      <div className="container">
        <h1 className="px-3 text-[40px] text-[#6b6b6b] pb-3 capitalize">
          {category}
        </h1>
        <div className="w-full px-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 items-center justify-center md:justify-start lg:justify-start ">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="w-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-sm transition-shadow duration-300"
              >
                <img
                  src={product.image}
                  alt=""
                  className="lg:h-[300px] md:h-[250px] h-[290px] cursor-pointer w-full object-cover"
                />
                <h2 className="px-2 text-gray-700 font-semibold">
                  {product.title}
                </h2>
                <p className="mb-1 px-2 font-bold text-gray-600">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full block border-t border-gray-200 font-semibold  text-gray-400 py-1 hover:bg-gray-50 duration-200 cursor-pointer"
                >
                  {t("cart.add")}
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found for this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
