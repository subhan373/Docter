import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Nav";











const AboutUs = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:mx-[100px] 2xl:mx-[180px] py-10 space-y-16 bg-white text-gray-800">
        {/* About Section */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10 text-gray-400">
            ABOUT <span className="text-black">US</span>
          </h2>
          <div className="md:flex items-start gap-10">
            <img
              src="/about.png"
              alt="Doctors"
              className="w-full h-90 md:w-1/2 rounded-md object-cover"
            />
            <div className="mt-6 md:mt-0 space-y-4 text-justify text-gray-700">
              <p>
                Welcome to Prescripto, your trusted partner in managing your
                healthcare needs, conveniently and efficiently. At Prescripto,
                we understand the challenges individuals face when it comes to
                scheduling doctor appointments and managing their health
                records.
              </p>
              <br />
              <p>
                Prescripto is committed to excellence in healthcare technology.
                We continuously strive to enhance our platform, integrating the
                latest advancements to improve user experience and deliver
                superior service. Whether you're booking your first appointment
                or managing ongoing care, Prescripto is here to support you
                every step of the way.
              </p>
              <br />
              <p className="font-semibold">Our Vision</p>
              <p>
                Our vision at Prescripto is to create a seamless healthcare
                experience for every user. We aim to bridge the gap between
                patients and healthcare providers, making it easier for you to
                access the care you need, when you need it.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10">
            WHY CHOOSE <span className="text-black">US</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 border border-gray-300 overflow-hidden text-center">
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-300 min-h-[180px] flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold mb-2">EFFICIENCY</h3>
              <p className="text-gray-600">
                Streamlined appointment scheduling that fits into your busy
                lifestyle.
              </p>
            </div>
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-300 min-h-[180px] flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold mb-2">CONVENIENCE</h3>
              <p className="text-gray-600">
                Access to a network of trusted healthcare professionals in your
                area.
              </p>
            </div>
            <div className="p-6 min-h-[180px] flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold mb-2">PERSONALIZATION</h3>
              <p className="text-gray-600">
                Tailored recommendations and reminders to help you stay on top
                of your health.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
