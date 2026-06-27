import { Link } from "react-router-dom";
import { Package } from "lucide-react";
import { useEffect, useState } from "react";
import { getOrdersService } from "../../services/orderServices";
import OrdersSkeleton from "./skeletons/OrdersSkeleton";
import Pagination from "../../components/pagination/Pagination";
import usePagination from "../../hooks/usePagination";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { totalPages, currentPage, setCurrentPage, paginatedItems } =
    usePagination(orders);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrdersService();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <OrdersSkeleton />;
  }

  if (orders.length === 0) {
    return (
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <Package size={60} className="text-gray-400 mb-4" />

        <h2 className="text-2xl font-semibold mb-2">Aún no tienes pedidos</h2>

        <p className="text-gray-500 mb-5">
          Cuando realices una compra, tus pedidos aparecerán aquí.
        </p>

        <Link to="/" className="bg-black text-white px-5 py-3 rounded-lg">
          Ir a comprar
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-pink-600">Mis pedidos</h1>

      <div className="space-y-5">
        {paginatedItems.map((order) => (
          <article key={order._id} className="bg-white shadow rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:justify-between gap-5">
              <div>
                <p className="text-sm text-gray-500">Número de orden</p>

                <h2 className="font-semibold break-all text-gray-600">
                  #{order._id}
                </h2>
              </div>

              <div>
                <p className="text-sm text-gray-500">Fecha</p>

                <p className="text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Productos</p>

                <p className="text-gray-500">
                  {order.items.length} artículo(s)
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Total</p>

                <p className="font-bold text-gray-500">${order.totalAmount}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-4">
              <div className="flex gap-3">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Pago {order.payment.status}
                </span>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Pedido {order.orderStatus}
                </span>
              </div>

              <Link
                to={`/e-commerce/orders/${order._id}`}
                className=" text-gray-700 px-5 py-2 rounded-lg"
              >
                Ver detalle
              </Link>
            </div>
          </article>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default Orders;
