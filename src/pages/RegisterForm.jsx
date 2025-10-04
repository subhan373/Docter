// src/components/RegisterForm.jsx
import { useForm } from "react-hook-form";
import React from "react";


export default function RegisterForm({ onRegister }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const user = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      gender: "Male",
      birthday: "20 July, 2024",
      phone: "+1 123 456 7890",
      address: "57th Cross, Richmond Circle, Church Road, London"
    };
    onRegister(user);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Create Account</h2>
      <input {...register("fullName")} placeholder="Full Name" className="w-full p-2 mb-3 border rounded" />
      <input {...register("email")} type="email" placeholder="Email" className="w-full p-2 mb-3 border rounded" />
      <input {...register("password")} type="password" placeholder="Password" className="w-full p-2 mb-3 border rounded" />
      <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">Create Account</button>
    </form>
  );
}
