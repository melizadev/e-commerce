import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SlidersHorizontal } from "lucide-react";

const Filter = ({ setFilteredProducts, items, setHasFiltered }) => {
  const { t } = useTranslation();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    if (minPrice !== "" || maxPrice !== "") {
      setHasFiltered(true);
    }
    const filtProducts = items?.filter((product) => {
      const inMin = minPrice === "" || product.price >= minPrice;
      const inMax = maxPrice === "" || product.price <= maxPrice;
      return inMin && inMax;
    });
    setFilteredProducts(filtProducts);
  }, [minPrice, maxPrice]);
  return (
    <div className="mb-4 bg-gray-50 rounded-lg p-2">
      <fieldset className="flex items-center gap-2 ">
        <legend className="text-xl flex py-1 items-center gap-2 font-semibold text-[#4a5565]">
          {t("filter.title")} <SlidersHorizontal size={20} strokeWidth={1} />
        </legend>

        {/* Min price */}
        <div className="flex items-center gap-2">
          <label htmlFor="min-price" className="text-gray-600 text-sm">
            {t("filter.min_price")}
          </label>
          <input
            id="min-price"
            type="number"
            min="0"
            placeholder="2$"
            className="rounded px-2 py-1 w-20 bg-white border border-gray-300 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>

        {/* Max price */}
        <div className="flex items-center gap-2">
          <label htmlFor="max-price" className="text-gray-600 text-sm">
            {t("filter.max_price")}
          </label>
          <input
            id="max-price"
            type="number"
            min="0"
            placeholder="100$"
            className="rounded px-2 py-1 w-20 bg-white border border-gray-300 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </fieldset>
    </div>
  );
};

export default Filter;
