import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import foto1 from "../../assets/foto1.jpg";
import foto2 from "../../assets/foto2.jpg";
import foto3 from "../../assets/foto3.jpg";
import foto4 from "../../assets/foto4.jpg";
import foto5 from "../../assets/foto5.jpg";

const Banner = () => {
  const images = [{
    id: 1,
    src: foto1,
    alt: "Foto 1",
    category: "Dresses"
  },{
    id: 2,
    src: foto2,
    alt: "top",
    category: "Tops"
  },{
    id: 3,
    src: foto3,
    alt: "skirts",
    category: "Skirts"
  }, {
    id: 4,
    src: foto4,
    alt: "Heels",
    category: "Heels"
  }, {
    id: 5,
    src: foto5,
    alt: "Pants",
    category: "Pants"
  }];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Cambia este valor si quieres mostrar más de una imagen a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

  return (
    <div className="container">
        <h1 className=" px-3 text-[40px] text-[#6b6b6b] pb-3">Categories </h1>
      <div className="container m-auto">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className="relative w-full flex justify-center items-center">
              <img
                src={img?.src}
                alt={`Banner ${idx + 1}`}
                className="w-[600px] h-96 object-cover rounded-lg shadow-lg m-auto"
              />
     <h2 className="absolute bottom-0 w-full left-1/2 -translate-x-1/2 text-white text-2xl font-bold bg-black/50 px-4 py-2 rounded-b">
     {img?.category}</h2>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;