import React from "react";
import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";
import Date from "../Components/Date";
import Related from "../Components/Related";

const Appointment = () => {
  return (
    <>
   

     
      <div className="flex flex-col lg:flex-row mx-4 sm:mx-8 md:mx-12 lg:mx-[180px] mt-8 gap-6">

        <div className="w-full lg:w-1/4 bg-[#5F6FFF] flex items-center justify-center rounded-lg shadow-md">
          <img
            src="/d12.png"
            alt="Dr. Richard James"
            className="rounded-lg w-[180px] sm:w-[200px] h-[220px] sm:h-[250px] object-cover"
          />
        </div>


        <div className="w-full lg:w-3/4 bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 flex items-center">
            Mark Singh
            <svg
              className="w-4 h-4 text-blue-600 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414L9 13.414l4.707-4.707z"
                clipRule="evenodd"
              />
            </svg>
          </h2>

          <p className="text-gray-600 text-sm mt-1">
            MBBS - General Physician{" "}
            <span className="ml-2 bg-gray-100 px-2 py-0.5 rounded-full text-xs">
              2 Years
            </span>
          </p>

     
          <div className="mt-4">
            <div className="flex items-center text-sm font-medium text-gray-800 mb-1">
              <svg
                className="w-4 h-4 mr-1 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8-5a1 1 0 100 2 1 1 0 000-2zm2 10a1 1 0 01-2 0V9a1 1 0 012 0v6z" />
              </svg>
              About
            </div>
            <p className="text-sm text-gray-700">
              Mark Singh  has a strong commitment to delivering comprehensive
              medical care, focusing on preventive medicine, early diagnosis,
              and effective treatment strategies.
            </p>
          </div>

        
          <p className="text-sm text-gray-800 mt-4">
            <strong>Appointment fee:</strong>{" "}
            <span className="text-black">$50</span>
          </p>
        </div>
      </div>

  
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-[180px]">
        <Date />
        <Related />
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default Appointment;
