import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginService } from "../authServices";
import { loginSchema } from "./loginSchema";
import { useUser } from "../../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { checkSession } = useUser();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await loginService(data);

      await checkSession();

      toast.success(response);

      reset();

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[87vh] bg-gray-50 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col gap-5"
      >
        {/* Header */}
        <div className="flex flex-col gap-1 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome back</h2>
          <p className="text-sm text-gray-500">Log in to continue shopping</p>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className={`border rounded-lg px-3 py-2 text-gray-700 outline-none transition
        focus:ring-2 focus:ring-blue-400
        ${
          errors.email ? "border-red-400 focus:ring-red-300" : "border-gray-300"
        }`}
          />

          <div className="h-[18px]">
            <span
              className={`text-xs text-red-500 transition-all duration-300 ${
                errors.email
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-1"
              }`}
            >
              {errors.email?.message}
            </span>
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>

          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            className={`border rounded-lg px-3 py-2 text-gray-700 outline-none transition
        focus:ring-2 focus:ring-blue-400
        ${
          errors.password
            ? "border-red-400 focus:ring-red-300"
            : "border-gray-300"
        }`}
          />

          <div className="h-[18px]">
            <span
              className={`text-xs text-red-500 transition-all duration-300 ${
                errors.password
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-1"
              }`}
            >
              {errors.password?.message}
            </span>
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 rounded-lg transition active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Logging in..." : "Log in"}
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
