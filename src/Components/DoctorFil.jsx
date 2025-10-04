import React from "react";

const specialties = [
  "General physician",
  "Cardiologist",
  "Dermatologist",
  "Neurologist",
  "ENT Specialist",
  "Orthopedic",
  "Dentist",
  "Psychiatrist",
  "Urologist",
  "Gynecologist",
];

export default function DoctorFilter({ selected, setSelected }) {
  return (
    <>
     
    <div>

      
      <ul className="flex flex-col gap-2">
        {specialties.slice(0, 6).map((spec) => (
          <li key={spec}>
            <button
              className={`w-full text-left px-2 py- rounded-lg border transition text-gray-500 hover:bg-gray-200
                ${
                  selected === spec
                    ? "border-[#5F6FFF] bg-[#EAEFFF] font-normal"
                    : "border-gray-300 hover:border-[#000000]"
                }`}
              onClick={() => setSelected(spec)}
            >
              {spec}
            </button>
          </li>
        ))}

        <li>
          <button
            className="w-full text-left px-2 py-1 rounded-lg border border-gray-300 hover:border-[#5F6FFF] text-sm text-gray-500"
            onClick={() => setSelected("")}
          >
            Clear Filter
          </button>
        </li>
      </ul>
    </div>
    </>
  );
}
