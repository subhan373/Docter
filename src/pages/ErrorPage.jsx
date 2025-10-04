import React from "react";
import { Link } from "react-router-dom";
import { Home, Mail } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7fbff] to-[#eef2ff] flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden md:flex">
        {/* Left: text */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-4">
            <span className="inline-block bg-[#E6EEFF] text-[#0B2A66] px-3 py-1 rounded-full text-sm font-medium">
              Page not found
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold text-[#0A1B4D] leading-[0.9]">
            404
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
            Oops — we can’t find that page.
          </h2>

          <p className="mt-3 text-gray-600 max-w-md">
            The page you’re looking for might have been removed, had its name
            changed, or is temporarily unavailable. Try one of the options
            below or contact our support.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 justify-center px-5 py-3 rounded-full bg-[#5F6FFF] text-white font-medium shadow-md hover:scale-105 transform transition"
            >
              <Home size={18} />
              Go back home
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 justify-center px-5 py-3 rounded-full border border-gray-200 bg-white text-gray-800 font-medium hover:shadow-sm transition"
            >
              <Mail size={18} />
              Contact support
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Tip: Check the URL for typos or try the navigation menu.
          </p>
        </div>

        {/* Right: illustration */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-tr from-white to-[#f8fbff] p-6">
          <div className="max-w-xs md:max-w-sm transform motion-safe:animate-float">
            <img
              src="fd.gif"
              alt="Page not found illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
