import { Link } from "react-router";
const GuestCartState = () => {
  return (
    <div className="w-full min-h-[86vh] flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full bg-white border border-gray-200 rounded-xl shadow-sm p-8 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Your cart is waiting for you
        </h1>

        <p className="text-gray-500 mb-8">
          Log in to see your saved products and continue with your purchase
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/login"
            className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Log in
          </Link>

          <Link
            to="/register"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            Register
          </Link>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          Don't have an account yet? Creating one only takes a few seconds.
        </p>
      </div>
    </div>
  );
};

export default GuestCartState;
