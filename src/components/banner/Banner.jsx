import { useTranslation } from "react-i18next";
import baner from "../../assets/baner.jpg";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 py-4">
      <div className="grid lg:grid-cols-2 items-center gap-8 bg-gradient-to-r from-pink-50 via-white to-pink-50 rounded-3xl overflow-hidden shadow-xl border border-pink-100">
        {/* Text */}
        <div className="p-8 md:p-12 lg:p-16">
          <span className="text-pink-600 font-semibold tracking-[0.25em] uppercase text-sm">
            New Collection
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 leading-tight">
            {t("homepage.title1")}
            <br />
            <span className="text-pink-600">{t("homepage.title2")}</span>
          </h1>

          <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-xl">
            {t("homepage.clothing")}{" "}
            <span className="font-semibold text-pink-600">
              {t("homepage.attitute")}
            </span>{" "}
            {t("homepage.version")}
            <br />
            {t("homepage.style")}
          </p>

          <button
            className="
          mt-10 px-8 py-3 
          bg-gray-900 text-white 
          rounded-full font-medium 
          shadow-lg cursor-pointer
          hover:bg-pink-600 
          hover:-translate-y-1 
          transition-all duration-300
        "
          >
            {t("homepage.more")}
          </button>
        </div>

        {/* Image */}
        <div className="relative h-[350px] md:h-[450px] lg:h-[550px]">
          <img
            src={baner}
            alt="Fashion banner"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          <div className="absolute bottom-6 left-6 bg-white/85 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg">
            <p className="text-gray-900 font-semibold">Summer 2026</p>
            <p className="text-sm text-gray-500">Fashion & Elegance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
