const DeleteModal = ({ onClick, onClose }) => {
  return (
    <div className="bg-gray-50 w-80 rounded-md shadow-md h-30 text-gray-700 p-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <p>Seguro que deseas eliminar el producto?</p>
      <div className="flex justify-between">
        <button onClick={() => onClick()}>Delete</button>
        <button onClick={() => onClose()}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteModal;
