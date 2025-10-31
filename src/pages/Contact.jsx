import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Nav";



const Contact = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:mx-[100px] 2xl:mx-[180px] py-10 bg-white text-gray-800">
        <section className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold mb-10 text-gray-400">
            CONTACT <span className="text-black">US</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
            <img
              src="/cm.png"
              alt="Doctors"
              className="w-full max-w-sm md:max-w-md object-cover"
            />

            <div className="mt-6 md:mt-0 space-y-6 text-gray-700 text-center md:text-left">
              <div>
                <p className="text-2xl text-gray-600 font-semibold">
                  OUR OFFICE
                </p>
                <p className="leading-7 mt-2">
                  54709 Willms Station <br />
                  Suite 350, Washington, USA
                </p>
              </div>

              <div>
                <p className="leading-7">
                  Tel: (415) 555-0132 <br />
                  Email: greatstackdev@gmail.com
                </p>
              </div>

              <div>
                <p className="font-semibold text-2xl text-gray-600 mt-10">
                  CAREERS AT PRESCRIPTO
                </p>
                <p className="mt-2">
                  Learn more about our teams and job openings
                </p>
                <button className="px-6 py-3 mt-6 border border-[#1F2937] text-black font-medium  shadow-md hover:bg-gray-200 hover:shadow-lg transition duration-300">
                  Explore Jobs
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
