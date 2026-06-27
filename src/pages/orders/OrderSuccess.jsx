import { CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const OrderSuccess = () => {
  const { orderId } = useParams();

  return (
    <section className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <CheckCircle size={30} className="mx-auto text-green-500 mb-5" />

        <h1 className="text-gray-700 text-3xl font-bold mb-3">
          ¡Compra realizada con éxito!
        </h1>

        <p className="text-gray-800 mb-5">
          Gracias por tu compra. Hemos recibido tu pedido y comenzaremos a
          prepararlo pronto.
        </p>

        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-500">Número de orden</p>

          <p className="text-gray-500 font-semibold text-lg break-all">
            #{orderId}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            to="/e-commerce/orders"
            className="bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Ver mis pedidos
          </Link>

          <Link
            to="/e-commerce"
            className="border text-gray-600 border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Seguir comprando
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;
