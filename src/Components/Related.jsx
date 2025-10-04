import React from "react";
import { Link } from "react-router-dom";

const doctors = [
  { name: "Dr. Richard James", specialty: "General physician", image: "/d2.png" },
  { name: "Dr. Sarah White", specialty: "Cardiologist", image: "/d1.png" },
  { name: "Dr. Alex Green", specialty: "Dermatologist", image: "/d5.png" },
  { name: "Dr. Emily Stone", specialty: "Neurologist", image: "/d3.png" },
  { name: "Dr. Daniel Kim", specialty: "ENT Specialist", image: "/d4.png" },
];

const Top = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-[1px] py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
        Related Doctors
      </h1>
      <p className="text-center text-gray-500 mb-8 text-sm sm:text-base">
        Simply browse through our extensive list of trusted doctors.
      </p>

  
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {doctors.map((doctor, index) => (
          <Link
            key={index}
            to="/AllDoc"
            className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col overflow-hidden"
          >
            <div className="bg-[#EAEFFF] p-3 flex items-center justify-center h-[180px] sm:h-[200px]">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-full object-contain"
              />
            </div>

          
            <div className="p-3">
              <p className="text-green-600 font-medium text-xs">● Available</p>
              <h3 className="font-semibold text-sm mt-1">{doctor.name}</h3>
              <p className="text-xs text-gray-500">{doctor.specialty}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Top;
