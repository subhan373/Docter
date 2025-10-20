import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 mt-10">
      <div className="px-4 sm:px-6 md:px-10 lg:mx-[180px] py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src="/logo.png" alt="Prescripto Logo" className="w-10 h-10 object-contain" />
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700">Prescripto</h2>
          </div>
          <p className="text-base sm:text-sm md:text-base text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>


        <div className="md:ml-20">
          <h3 className="text-base sm:text-sm font-semibold text-gray-800 mb-4">COMPANY</h3>
          <ul className="space-y-2 text-base sm:text-sm">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About us</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact us</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy policy</a></li>
          </ul>
        </div>

  
        <div className="md:ml-5">
          <h3 className="text-base sm:text-sm font-semibold text-gray-800 mb-4">GET IN TOUCH</h3>
          <ul className="space-y-2 text-base sm:text-sm">
            <li>+1-212-456-7890</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 lg:mx-[180px] text-center py-4 text-sm sm:text-xs md:text-sm text-gray-500">
        Copyright © 2024 GreatStack - All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
