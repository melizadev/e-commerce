import React from "react";

const CreateProductForm = () => {
  return (
    <div>
      <form type="submit">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="border border-gray-300 rounded-sm w-full"
        />
        <label htmlFor="slug">Slug:</label>
        <input
          type="text"
          id="slug"
          name="slug"
          required
          className="border border-gray-300 rounded-sm w-full"
        />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          required
          className="border border-gray-300 rounded-sm w-full"
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          required
          className="border border-gray-300 rounded-sm w-full"
        />
        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          name="stock"
          required
          className="border border-gray-300 rounded-sm w-full"
        />
        <label htmlFor="imageUrl">Image URL:</label>
        <input type="text" id="imageUrl" name="imageUrl" required />
      </form>
    </div>
  );
};

export default CreateProductForm;
