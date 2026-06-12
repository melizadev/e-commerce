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

  useEffect(() => {
    console.log("value", value);
  }, [value]);
  return (
    <div className="border border-blue-300 shadow-xl mt-4 text-gray-700 bg-white p-4 rounded w-130 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h3 className="text-lg font-bold mb-4">
        {mode === "edit" ? "Editar Producto" : "Crear Producto"}
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block font-bold mb-2">Título</label>
        <input
          className="border p-2 rounded w-full mb-2"
          {...register("title", {
            required: "El título es obligatorio",
          })}
        />

        {errors.title && (
          <p className="text-red-500 text-sm mb-2">{errors.title.message}</p>
        )}

        <label className="block font-bold mb-2">Categoría</label>
        <input
          className="border p-2 rounded w-full mb-2"
          {...register("category", {
            required: "La categoría es obligatoria",
          })}
        />

        <label className="block font-bold mb-2">Stock</label>
        <input
          type="number"
          className="border p-2 rounded w-full mb-2"
          {...register("stock", {
            required: "El stock es obligatorio",
            valueAsNumber: true,
          })}
        />

        <label className="block font-bold mb-2">Precio</label>
        <input
          type="number"
          step="0.01"
          className="border p-2 rounded w-full mb-2"
          {...register("price", {
            required: "El precio es obligatorio",
            valueAsNumber: true,
          })}
        />

        <label className="block font-bold mb-2">Imagen</label>
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
            Cancelar
          </button>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {mode === "edit" ? "Actualizar" : "Crear"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
