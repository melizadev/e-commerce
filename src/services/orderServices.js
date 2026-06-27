import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
export const checkoutOrder = async () => {
  try {
    const response = await axios.post(`${API_URL}/orders/checkout`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al crear orden de compra",
    );
  }
};

export const getOrderService = async (orderId) => {
  try {
    const response = await axios.get(`${API_URL}/orders/${orderId}`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al crear orden de compra",
    );
  }
};

export const payOrder = async (orderId) => {
  const response = await axios.post(
    `${API_URL}/orders/${orderId}/pay`,
    {},
    {
      withCredentials: true,
    },
  );

  return response.data;
};

export const getOrdersService = async () => {
  try {
    const response = await axios.get(`${API_URL}/orders`, {
      withCredentials: true,
    });
    return response.data.orders;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al cargar ordenes");
  }
};

export const cancelOrderService = async (orderId) => {
  const response = await axios.patch(
    `${API_URL}/orders/${orderId}/cancel`,
    {},
    {
      withCredentials: true,
    },
  );

  return response.data;
};
