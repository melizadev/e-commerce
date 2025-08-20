import { Link } from "react-router";
import { MoveRight } from "lucide-react";
const ShowResults = ({ searchResults }) => {
  if (!searchResults || searchResults.length === 0) {
    return (
      <div className=" min-h-[calc(100vh-160px)] w-full text-center text-gray-500 py-8 bg-white flex flex-col items-center justify-center">
        <h2> Lo sentimos, no tenemos un resultado para tu búsqueda</h2>
        <span className="flex">
          <Link className="font-semibold mr-2" to="/home">
            Volver al Inicio
          </Link>
          <MoveRight />
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-160px)] bg-white">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Resultado de tu busqueda:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3">
          {searchResults.map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="w-[200px] h-[250px] cursor-pointer object-cover"
              />
              <div>
                <h2 className="text-gray-700 font-semibold text-base">
                  {product.title}
                </h2>
                <p className="text-pink-600 font-bold">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ShowResults;
