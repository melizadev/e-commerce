import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema";
import { registerService } from "../../pages/auth/authServices";
import { useState } from "react";
import { Navigate } from "react-router";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { checkSession } = useUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await registerService(data);

      await checkSession();

      reset();

      toast.success(response.message);

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="min-h-[85vh] bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          noValidate
        >
          {/* Username */}
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              {...register("username")}
              required
              className="border border-gray-300  text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
            />
            {errors.username && (
              <p className="text-xs text-red-500 mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              {...register("email")}
              required
              className="border border-gray-300  text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              {...register("password")}
              required
              minLength={6}
              className="border text-gray-700 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
            />
            <p id="password-hint" className="text-xs text-gray-500 mt-1">
              Must be at least 6 characters.
            </p>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 text-white font-semibold py-2.5 rounded-lg transition"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
