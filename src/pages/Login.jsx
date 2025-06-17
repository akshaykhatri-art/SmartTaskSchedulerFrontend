import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function Login() {
  const [form, setForm] = useState({
    email: "akshay@gmail.com",
    password: "Akshay@123",
  });
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/login`,
        form
      );
      toast.success(res.data.message || "Login successful!");
      login(res.data.token);
    } catch (err) {
      const error = err.response?.data;
      if (error?.error) toast.error(error.error);
      if (error?.errors) {
        Object.values(error.errors).forEach((msg) => toast.error(msg));
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 max-w-md mx-auto mt-10 space-y-4"
    >
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
        Smart Task Scheduler
      </h1>
      <h2 className="text-2xl font-semibold text-center text-gray-700">
        Login
      </h2>
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <button className="bg-green-600 hover:bg-green-700 text-white p-3 w-full rounded">
        Login
      </button>
      <p className="text-sm text-center text-gray-600">
        Don’t have an account?{" "}
        <a href="/register" className="text-blue-600 hover:underline">
          Register here
        </a>
      </p>
    </form>
  );
}
