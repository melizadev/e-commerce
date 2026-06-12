import { useState, useEffect } from "react";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/services";
import { fetchProducts } from "../services/services";
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetchProducts();
      setProducts(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handleCreateProduct = async (productData) => {
    try {
      await createProduct(productData);
      await getProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateProduct = async (productData) => {
    try {
      console.log(productData);
      await updateProduct(productData);

      await getProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      await getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  return {
    handleCreateProduct,
    handleUpdateProduct,
    handleDelete,
    products,
  };
};

export default useProducts;
