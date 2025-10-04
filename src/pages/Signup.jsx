import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import React from "react";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const emailExists = users.some((user) => user.email === data.email);
    if (emailExists) {
      alert("This email is already registered!");
      return;
    }

    // Create new user object with default fields
    const newUser = {
      ...data,
      phone: "+1 123 456 7890",
      address: "57th Cross, Richmond Circle, Church Road, London",
      gender: "Male",
      birthday: "20 July, 2024",
    };

    // Save new user to localStorage
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
    navigate("/login"); // redirect to login or profile page
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

      {/* Full Name */}
      <input
        {...register("fullName", {
          required: "Full Name is required",
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: "Full Name must contain only alphabets",
          },
        })}
        placeholder="Full Name"
        className="w-full p-2 mb-1 border rounded"
      />
      {errors.fullName && (
        <p className="text-red-600 text-sm mb-2">{errors.fullName.message}</p>
      )}

      {/* Email */}
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^@]+@[^@]+\.[^@]+$/,
            message: "Please enter a valid email",
          },
          validate: (value) =>
            value.split("").reverse().join("") !== value || "Email cannot be a palindrome",
        })}
        type="text"
        placeholder="Email"
        className="w-full p-2 mb-1 border rounded"
      />
      {errors.email && (
        <p className="text-red-600 text-sm mb-2">{errors.email.message}</p>
      )}

      {/* Password */}
      <input
        {...register("password", {
          required: "Password is required",
          pattern: {
            value: /^[0-9]+$/,
            message: "Password must contain only numbers",
          },
        })}
        type="password"
        placeholder="Password (numbers only)"
        className="w-full p-2 mb-4 border rounded"
      />
      {errors.password && (
        <p className="text-red-600 text-sm mb-2">{errors.password.message}</p>
      )}

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded mb-2"
      >
        Sign Up
      </button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}
