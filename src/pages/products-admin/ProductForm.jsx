import { useForm } from "react-hook-form";
import { useEffect } from "react";

const ProductForm = ({ value, onSubmit, mode, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (value) {
      reset(value);
    }
  }, [value, reset]);

  return (
    <div className="border border-blue-300 shadow-xl mt-4 text-gray-700 bg-white p-4 rounded w-130 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h3 className="text-lg font-bold mb-4">
        {mode === "edit" ? "Edit Product" : "Create Product"}
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block font-bold mb-2">Title</label>
        <input
          className="border p-2 rounded w-full mb-2"
          {...register("title", {
            required: "Title is required",
          })}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mb-2">{errors.title.message}</p>
        )}
        <label className="block font-bold mb-2">Category</label>
        <input
          className="border p-2 rounded w-full mb-2"
          {...register("category", {
            required: "Category is required",
          })}
        />
        <label className="block font-bold mb-2">Stock</label>
        <input
          type="number"
          className="border p-2 rounded w-full mb-2"
          {...register("stock", {
            required: "Stock is required",
            valueAsNumber: true,
          })}
        />
        <label className="block font-bold mb-2">Price</label>
        <input
          type="number"
          step="0.01"
          className="border p-2 rounded w-full mb-2"
          {...register("price", {
            required: "Price is required",
            valueAsNumber: true,
          })}
        />
        <label className="block font-bold mb-2">Image</label>
        <input
          className="border p-2 rounded w-full mb-4"
          {...register("imageUrl")}
        />
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => onClose()}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {mode === "edit" ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
