import { useRef } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "../../data/products";

const Categories = () => {
  const { t } = useTranslation();
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const cardWidth =
      sliderRef.current.firstChild?.getBoundingClientRect().width || 300;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -cardWidth * 2 : cardWidth * 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="container mx-auto mt-12 relative px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl  text-gray-700">{t("categories.name")}</h2>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full  hover:bg-gray-100 transition cursor-pointer"
          >
            <ChevronLeft color={"gray"} className="mx-auto" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full  hover:bg-gray-100 transition cursor-pointer"
          >
            <ChevronRight color={"gray"} className="mx-auto" />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="
          flex
          gap-6
          overflow-x-auto
          snap-x
          snap-mandatory
          scroll-smooth
          scrollbar-hide
          pb-3
        "
      >
        {images.map((item) => (
          <Link
            key={item.id}
            to={`/${item.category}`}
            className="
              snap-start
              shrink-0
              w-[280px]
              md:w-[300px]
              group
            "
          >
            <div className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="overflow-hidden h-[360px]">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />
              </div>

              <div className="py-4 text-center">
                <p className="text-lg font-semibold capitalize text-gray-700">
                  {t(`categories.${item.category}`)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
