import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOrderService, payOrder } from "../../services/orderServices";
import { clearCartState } from "../../features/cartSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { cancelOrderService } from "../../services/orderServices";
import Loader from "../../components/common/Loader";

const PaymentSection = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleCancelOrder = async () => {
    try {
      await cancelOrderService(orderId);
      toast.success("Pedido cancelado");
      navigate("/e-commerce/orders");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handlePay = async () => {
    try {
      const response = await payOrder(orderId);
      toast.success("Payment successful");
      dispatch(clearCartState());
      setOrder(response.order);
      navigate(`/e-commerce/${orderId}/success`);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await getOrderService(orderId);
        setOrder(response.order);
      } catch (error) {
        console.error(error);
        setError("Error loading order");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderData();
  }, [orderId]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-pink-50">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-[400px]">
        <h1 className="text-2xl font-bold text-gray-800">Payment</h1>

        <p className="mt-4 text-gray-600">
          Order ID:
          <span className="font-semibold ml-2">{order._id}</span>
        </p>

        <p className="mt-3 text-gray-600">
          Total:
          <span className="font-bold text-pink-600 ml-2">
            ${order.totalAmount}
          </span>
        </p>

        <p className="mt-3 text-gray-600">
          Status:
          <span className="ml-2 capitalize">{order.orderStatus}</span>
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => handlePay()}
            className="flex-1 bg-pink-600 text-white py-3 rounded-full hover:bg-pink-700 transition"
          >
            Pay
          </button>

          <button
            onClick={() => handleCancelOrder()}
            className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
