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
    <div className="mb-5 flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2 text-gray-700 font-medium">
        <SlidersHorizontal size={16} className="text-pink-500" />
        <span>{t("filter.title")}</span>
      </div>

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
          $
        </span>
        <input
          id="min-price"
          type="number"
          min="0"
          placeholder={t("filter.min_price")}
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="
        w-30
        h-9
        rounded-full
        border border-gray-200
        bg-white
        pl-7 pr-3
        text-sm
        text-gray-700
        outline-none
        transition
        focus:border-pink-400
        focus:ring-2
        focus:ring-pink-100
      "
        />
      </div>

      <span className="text-gray-300">—</span>

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
          $
        </span>
        <input
          id="max-price"
          type="number"
          min="0"
          placeholder={t("filter.max_price")}
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="
        w-30
        h-9
        rounded-full
        border border-gray-200
        bg-white
        pl-7 pr-3
        text-sm
        text-gray-700
        outline-none
        transition
        focus:border-pink-400
        focus:ring-2
        focus:ring-pink-100
      "
        />
      </div>

      {(minPrice || maxPrice) && (
        <button
          onClick={() => {
            setMinPrice("");
            setMaxPrice("");
          }}
          className="
        text-xs
        text-pink-600
        hover:text-pink-700
        font-medium
        transition
      "
        >
          ✕ Clear
        </button>
      )}
    </div>
  );
};

export default Filter;
