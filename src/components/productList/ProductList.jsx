import { useTranslation } from "react-i18next";

const ProductList = ({ filteredProducts, handleAddToCart }) => {
  const { t } = useTranslation();

  return (
    <ul
      className="w-full mt-2 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5"
      role="list"
    >
      {filteredProducts?.map((product) => (
        <li key={product.id} role="listitem">
          <article className="w-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <img
              src={product.image}
              alt={product.title}
              className="lg:h-[300px] md:h-[250px] h-[290px] cursor-pointer w-full object-cover rounded-t-lg"
            />

            <div className="px-2 py-1">
              <h2 className="text-gray-800 font-semibold text-base">
                {product.title}
              </h2>

              <p className="font-bold text-gray-700">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <button
              onClick={() => handleAddToCart(product)}
              aria-label={`${t("cart.add")} ${product.title}`}
              className="w-full border-t border-gray-200 font-semibold text-gray-700 py-2 hover:bg-gray-100 duration-200"
            >
              {t("cart.add")}
            </button>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
