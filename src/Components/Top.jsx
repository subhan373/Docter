import React from "react";
import { Link } from "react-router-dom";

const doctors = [
  { name: "Dr. Richard James", specialty: "General physician", image: "/d2.png" },
  { name: "Dr. Sarah White", specialty: "Cardiologist", image: "/d1.png" },
  { name: "Dr. Alex Green", specialty: "Dermatologist", image: "/d5.png" },
  { name: "Dr. Emily Stone", specialty: "Neurologist", image: "/d3.png" },
  { name: "Dr. Daniel Kim", specialty: "ENT Specialist", image: "/d4.png" },
  { name: "Dr. Lisa Ray", specialty: "Orthopedic", image: "/d7.png" },
  { name: "Dr. Mark Singh", specialty: "Dentist", image: "/d8.png" },
  { name: "Dr. Olivia Khan", specialty: "Psychiatrist", image: "/d9.png" },
  { name: "Dr. James Bond", specialty: "Urologist", image: "/d10.png" },
  { name: "Dr. Sophia Lee", specialty: "Gynecologist", image: "/d12.png" },
];

const Top = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-[180px] py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
        Top Doctors to Book
      </h1>
      <p className="text-center text-gray-500 mb-8 text-sm sm:text-base">
        Simply browse through our extensive list of trusted doctors.
      </p>

  
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {doctors.map((doctor, index) => (
          <Link
            key={index}
            to="/Alldoc"
            className="bg-white rounded-lg shadow hover:shadow-md transition flex flex-col"
          >
   
            <div className="bg-[#EAEFFF] p-2 rounded-t-lg flex flex-col items-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-[160px] sm:h-[190px] object-contain"
              />
            </div>

            <p className="text-green-600 font-semibold text-xs ml-2 mt-1">
              ● Available
            </p>

            <div className="p-2 ml-1">
              <h3 className="font-bold text-xs sm:text-sm">{doctor.name}</h3>
              <p className="text-[11px] text-gray-500">{doctor.specialty}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link
          to="/AllDoc"
          className="px-5 py-2 bg-gray-200 rounded-full text-sm hover:bg-gray-300 transition"
        >
          More
        </Link>
      </div>
    </div>
  );
};

export default Top;
