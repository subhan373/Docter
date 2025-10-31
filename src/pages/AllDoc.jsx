import React, { useState } from "react";
import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";
import DoctorFil from "../Components/DoctorFil";








const doctors = [
  {
    id: 1,
    name: "Dr. Richard James",
    specialty: "General physician",
    image: "/d2.png",
  },
  {
    id: 2,
    name: "Dr. Sarah White",
    specialty: "Cardiologist",
    image: "/d1.png",
  },
  {
    id: 3,
    name: "Dr. Alex Green",
    specialty: "Dermatologist",
    image: "/d5.png",
  },
  {
    id: 4,
    name: "Dr. Emily Stone",
    specialty: "Neurologist",
    image: "/d3.png",
  },
  {
    id: 5,
    name: "Dr. Daniel Kim",
    specialty: "ENT Specialist",
    image: "/d4.png",
  },
  { id: 6, name: "Dr. Lisa Ray", specialty: "Orthopedic", image: "/d8.png" },
  { id: 7, name: "Dr. Mark Singh", specialty: "Dentist", image: "/d7.png" },
  {
    id: 8,
    name: "Dr. Olivia Khan",
    specialty: "Psychiatrist",
    image: "/d9.png",
  },
  { id: 9, name: "Dr. James Bond", specialty: "Urologist", image: "/d10.png" },
  {
    id: 10,
    name: "Dr. Sophia Lee",
    specialty: "Gynecologist",
    image: "/d11.png",
  },
  { id: 11, name: "Dr. Mark Singh", specialty: "Dentist", image: "/d12.png" },
  {
    id: 12,
    name: "Dr. Olivia Khan",
    specialty: "Psychiatrist",
    image: "/d13.png",
  },
  { id: 13, name: "Dr. James Bond", specialty: "Urologist", image: "/d14.png" },
  {
    id: 14,
    name: "Dr. Sophia Lee",
    specialty: "Gynecologist",
    image: "/d15.png",
  },
];

const AllDoc = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const filteredDoctors = selectedSpecialty
    ? doctors.filter((doc) => doc.specialty === selectedSpecialty)
    : doctors;

  return (
    <div className="min-h-screen flex flex-col">
      <h3 className="mt-6 font-normal text-[#4B5563] text-center sm:text-left ml-0 sm:ml-45">
        Browse through the doctors specialist.
      </h3>

      <div className="px-4 sm:px-6 md:px-10 lg:px-[180px] py-5 flex flex-col lg:flex-row gap-6">
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowFilter(true)}
            className="px-4 py-2 bg-[#5F6FFF] text-white rounded-lg shadow"
          >
            Filter Doctors
          </button>
        </div>

        {/* Sidebar Filter (Desktop) */}
        <div className="hidden lg:block w-48">
          <DoctorFil
            selected={selectedSpecialty}
            setSelected={setSelectedSpecialty}
          />
        </div>

        {/* Filter Drawer (Mobile) */}
        {showFilter && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex">
            <div className="bg-white w-64 p-4 h-full shadow-lg z-50">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-gray-700 font-semibold">Filter</h2>
                <button
                  onClick={() => setShowFilter(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <DoctorFil
                selected={selectedSpecialty}
                setSelected={setSelectedSpecialty}
              />
            </div>
          </div>
        )}

        {/* Doctors Grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-lg shadow hover:shadow-md transition flex flex-col"
            >
              <div className="bg-[#EAEFFF] p-2 rounded-t-lg flex flex-col items-center">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-[160px] sm:h-[180px] object-contain"
                />
              </div>

              <p className="text-green-600 font-semibold text-xs ml-2 mt-1">
                ● Available
              </p>

              <div className="p-2 ml-1">
                <h3 className="font-bold text-xs sm:text-sm">{doctor.name}</h3>
                <p className="text-[11px] text-gray-500">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllDoc;
