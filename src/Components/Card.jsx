import React from "react";
import { Link } from "react-router-dom";



export default function Card() {
  return (
    <section
      className="bg-[#5F6FFF] text-white mt-5 rounded-2xl 
        mx-4 sm:mx-6 md:mx-10 lg:mx-[180px]"
    >
      <div
        className="px-4 sm:px-6 md:px-8 lg:px-10 
        container mx-auto flex flex-col md:flex-row 
        items-center justify-between h-auto md:h-[300px]"
      >
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold leading-tight">
            Book Appointment <br /> With 100+ Trusted Doctors
          </h1>

          <button
            className="inline-block px-5 sm:px-6 py-2 sm:py-3 
              bg-white text-[#000000] font-normal rounded-full 
              shadow-md hover:bg-gray-100 transition mt-5"
          >
            {" "}
            Create account →
          </button>
        </div>

        <div className="h-full flex flex-col justify-end items-center sm:items-end mt-8 md:mt-0">
          <img
            src="/dd.png"
            alt="Doctors"
            className="w-[180px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[380px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
