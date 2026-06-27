import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOrderService } from "../../services/orderServices";
import { ArrowLeft } from "lucide-react";
import OrderDetailSkeleton from "./skeletons/OrderDetailSkeleton";
import { cancelOrderService } from "../../services/orderServices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleCancelOrder = async () => {
    try {
      await cancelOrderService(orderId);

      toast.success("Pedido cancelado");

      navigate("/orders");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await getOrderService(orderId);
        console.log(response);
        setOrder(response.order);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return <OrderDetailSkeleton />;
  }

  if (!order) {
    return <div className="p-10 text-center">Pedido no encontrado</div>;
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 text-gray-500">
      <Link
        to="/orders"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-6"
      >
        <ArrowLeft size={18} />
        Volver a pedidos
      </Link>
      <div className="bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-2">Pedido #{order._id}</h1>
        <p>
          <span className="font-medium">Artículos:</span> {order.items.length}
        </p>
        <p className="text-gray-500">
          {new Date(order.createdAt).toLocaleDateString()}
        </p>

        <div className="flex gap-3 mt-4">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            Pago {order.payment.status}
          </span>

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            Pedido {order.orderStatus}
          </span>
        </div>

        <div className="mt-8">
          <h2 className="font-semibold text-lg mb-4">Productos</h2>

          <div className="space-y-4">
            {order?.items.map((item) => (
              <div
                key={item.productId}
                className="border border-gray-300 rounded-xl p-4 flex flex-col sm:flex-row gap-4"
              >
                <img
                  className="w-24 h-24 object-cover rounded-lg border"
                  src={item.image}
                  alt={item.title}
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.title}
                  </h3>

                  <div className="mt-2 space-y-1 text-sm">
                    <p>
                      <span className="font-medium">Cantidad:</span>{" "}
                      {item.quantity}
                    </p>

                    <p>
                      <span className="font-medium">Precio unitario:</span> $
                      {item.price}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center text-right">
                  <p className="text-sm text-gray-500">Subtotal</p>

                  <p className="font-bold text-lg text-gray-700">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Total del pedido</span>

            <span className="text-2xl font-bold text-gray-600">
              ${order.totalAmount}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          {order.payment.status === "pending" && (
            <>
              <Link
                to={`/payment/${orderId}`}
                className="bg-black text-white px-5 py-3 rounded-lg"
              >
                Continuar pago
              </Link>

              <button
                onClick={() => handleCancelOrder()}
                className="border px-5 py-3 rounded-lg"
              >
                Cancelar pedido
              </button>
            </>
          )}

          {order.payment.status === "paid" && (
            <Link className="bg-black text-white px-5 py-3 rounded-lg">
              Seguir comprando
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
