import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";
import Slider from "react-slick";


const Categories = () => {
  const images = [{
    id: 1,
    src: 'https://www.dynamiteclothing.com/dw/image/v2/BDRP_PRD/on/demandware.static/-/Sites-root_dynamite_catalog/default/dw73c50e47/images/100095459/100095459_0QO_1920x2880.jpg?sw=320&sh=480',
    alt: "Foto 1",
    category: "Dresses"
  },{
    id: 2,
    src: 'https://s2.ppllstatics.com/mujerhoy/www/multimedia/202504/29/media/cortadas/blusa-casual-2-apliques-kKxG--650x900@MujerHoy.jpg',
    alt: "top",
    category: "Tops"
  },{
    id: 3,
    src: 'https://i.pinimg.com/564x/18/d2/77/18d277073fc826c82b0e572194844be4.jpg',
    alt: "skirts",
    category: "Skirts"
  }, {
    id: 4,
    src: 'https://luisatoledo.es/3303-category_list/zapatos-destalonados-terciopelo-rosana.jpg',
    alt: "Heels",
    category: "Heels"
  }, {
    id: 5,
    src: 'https://img.abercrombie.com/is/image/anf/KIC_156-4076-0096-340_model1.jpg?policy=product-large',
    alt: "Pants",
    category: "Pants"
  }];

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

 
return (
  <div className="container min-h-[500px] mt-4"> 
      <h1 className="px-3 text-[40px] text-[#6b6b6b] pb-3">Categories</h1>
    <div className="container h-full sm:flex sm:flex-col ">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="relative max-w-[250px] h-[350px]  mb-2 flex justify-center items-center rounded-md shadow-gray-300 hover:shadow-md transition-shadow duration-200">
            <Link
              to={`/${img?.category}`}
              className="no-underline text-inherit hover:no-underline"
            >
              <img
                src={img.src}
                alt={`Banner ${idx + 1}`}
                className=" w-[100%] h-[100%]  object-cover rounded-md "
              />
              <h2 className="absolute bottom-0 w-full left-1/2 -translate-x-1/2 text-white text-2xl font-bold bg-black/50 px-4 py-2 rounded">
                {img?.category || ''}
              </h2>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  </div>
);
}
export default Categories;