import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/cart";

axios.defaults.withCredentials = true;

export const addToCartService = async (productId, quantity = 1) => {
  try {
    const response = await axios.post(`${API_URL}/add`, {
      productId,
      quantity,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al agregar producto al carrito",
    );
  }
};

export const getCartService = async () => {
  const response = await axios.get(`${API_URL}`, {
    credentials: "include",
  });
  return response.data;
};

export const updateCartService = async (productId, quantity) => {
  try {
    const response = await axios.put(`${API_URL}/update`, {
      productId,
      quantity,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al actualizar el carrito",
    );
  }
};

export const removeFromCartService = async (productId) => {
  try {
    const response = await axios.delete(`${API_URL}/removeProduct`, {
      data: { productId },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al eliminar producto del carrito",
    );
  }
};

export const clearCartService = async () => {
  try {
    const response = await axios.delete(`${API_URL}/clear`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al limpiar el carrito",
    );
  }
};
