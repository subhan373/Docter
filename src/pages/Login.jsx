import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login({ setLoggedIn, setUser }) {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (matchedUser) {
      // Save state and localStorage
      setLoggedIn(true);
      setUser(matchedUser);
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      navigate("/"); // Redirect to home
    } else {
      setError("email", { message: "Invalid email or password" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
      <input
        {...register("email", { required: "Email is required" })}
        placeholder="Email"
        className="w-full p-2 mb-3 border rounded"
      />
      {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>}

      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-3 border rounded"
      />
      {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>}

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded"
      >
        Login
      </button>
    </form>
  );
}
