import React from "react";
import { Link } from "react-router-dom";



const specialties = [
  {
    name: "General Physician",
    path: "/speciality/general-physician",
    icon: "/g1.svg",
  },
  { name: "Gynecologist", path: "/speciality/gynecologist", icon: "/g2.svg" },
  { name: "Dermatologist", path: "/speciality/dermatologist", icon: "/g3.svg" },
  { name: "Pediatricians", path: "/speciality/pediatricians", icon: "/g4.svg" },
  { name: "Neurologist", path: "/speciality/neurologist", icon: "/g5.svg" },
  {
    name: "Gastroenterologist",
    path: "/speciality/gastroenterologist",
    icon: "/g6.svg",
  },
];

const Find = () => {
  return (
    <div className="text-center pt-25 pb-24 px-[10px] md:mx-[180px]">
      <h2 className="text-3xl font-semibold mb-6">Find by Speciality</h2>
      <p className="text-gray-700 mb-16 max-w-xl mx-auto">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 mt-8">
        {specialties.map((spec, index) => (
          <div key={index} className="flex flex-col items-center">
            <Link
              to={spec.path}
              className="w-24 h-24 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-md hover:-translate-y-5 transition-transform duration-500 ease-in-out bg-white"
            >
              <img
                src={spec.icon}
                alt={spec.name}
                className="w-24 h-24 sm:w-24 sm:h-24 object-contain"
              />
            </Link>

            <label className="mt-4 text-xs sm:text-sm font-medium text-gray-700 text-center w-32 sm:w-40">
              {spec.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Find;
