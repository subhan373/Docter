import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="bg-[#5F6FFF] text-white mt-5 rounded-2xl
        mx-4 sm:mx-6 md:mx-10 lg:ml-[180px] lg:mr-[180px]"
    >
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 container mx-auto flex flex-col md:flex-row items-center justify-between h-auto md:h-[500px] lg:h-[400px]">

        <div className="md:w-1/2 space-y-6">
          <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold leading-tight">
            Book Appointment <br /> With Trusted Doctors
          </h1>

  
          <div className="flex  flex-col md:flex-row items-start md:items-center mt-5 gap-5 md:gap-18 ">
            <div className="flex -space-x-2">
              <img src="/2.png" alt="Person 1" className="w-12 sm:w-14 h-12 sm:h-14 rounded-full" />
              <img src="/1.png" alt="Person 2" className="w-12 sm:w-14 h-12 sm:h-14 rounded-full" />
              <img src="/3.png" alt="Person 3" className="w-12 sm:w-14 h-12 sm:h-14 rounded-full" />
            </div>

            <p className="text-gray-200 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl text-xs sm:text-sm  line-clamp-2  ">
              Simply browse through our extensive list of trusted doctors,..
            
            </p>
          </div>

   
          <Link
            to="/Appointment"
            className="inline-block px-5 sm:px-6 md:px-6 py-2 sm:py-3 bg-white text-[#000000] font-normal rounded-full shadow-md hover:bg-gray-100 transition mt-5"
          >
            Book appointment →
          </Link>
        </div>

        <div className="h-full flex flex-col justify-end items-center sm:items-end mt-8 md:mt-0">
          <img
            src="/doc1.png"
            alt="Doctors"
            className="w-full max-w-[160px] sm:max-w-[300px] md:max-w-[450px] lg:max-w-[600px] xl:max-w-[700px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
