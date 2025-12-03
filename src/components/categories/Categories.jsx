import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { images } from "../data/products";
const Categories = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="container bg-white  flex justify-center mt-10 h-[520px]">
      <div className="w-full h-full">
        <h1 className="text-3xl font-semibold text-[#4a5565] mb-4 p-2 rounded ">
          {t(`categories.name`)}
        </h1>
        <Slider {...settings} className="px-2 mx-10 ">
          {images.map((d) => (
            <div
              key={d.id}
              className="bg-white max-w-[300px] h-[400px] text-black rounded-xl w-full flex flex-col items-center justify-center"
            >
              <Link to={`/e-commerce/${d?.category}`}>
                <div className="h-full w-full flex justify-center items-center rounded-t-xl relative">
                  <img
                    src={d?.src}
                    alt={d?.alt}
                    className="h-full w-full  object-cover"
                  />
                  <p className="bg-white w-full mt-2 bottom-2 absolute text-lg font-semibold capitalize">
                    {" "}
                    {t(`categories.${d?.category}`) || ""}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
