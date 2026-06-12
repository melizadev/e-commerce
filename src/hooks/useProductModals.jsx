import { useState } from "react";
const useProductModals = () => {
  const [editProduct, setEditProduct] = useState(null);
  const [newProduct, setNewProduct] = useState(null);
  const [idProduct, setIdProduct] = useState(null);
  return {
    editProduct,
    setEditProduct,
    newProduct,
    setNewProduct,
    idProduct,
    setIdProduct,
  };
};

export default useProductModals;
