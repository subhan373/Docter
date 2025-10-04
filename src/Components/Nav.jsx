import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar({ loggedIn, user, setLoggedIn, setUser }) {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // avatar dropdown
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const navLinkClass = ({ isActive }) =>
    `relative pb-1 transition ${
      isActive ? "text-[#000B6D] font-semibold" : "text-gray-700"
    } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#000B6D] after:transition-all after:duration-300 ${
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getUserAvatar = () => {
    if (!user) return "";
    if (user.fullName) {
      const names = user.fullName.split(" ");
      return names.map((n) => n[0].toUpperCase()).join("").slice(0, 2);
    } else {
      return user.email[0].toUpperCase();
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null);
    localStorage.removeItem("loggedInUser");
    setDropdownOpen(false);
    navigate("/");
    setIsOpen(false);
  };

  return (
    <nav className="relative flex items-center justify-between py-4 bg-white border-b border-gray-300 px-2 sm:px-4 md:px-6 lg:px-0 ml-2 sm:ml-4 md:ml-6 lg:ml-46 mr-2 sm:mr-4 md:mr-6 lg:mr-46">
      <Link to="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="Prescripto" className="w-6 h-6 sm:w-8 sm:h-8" />
        <span className="text-lg sm:text-xl font-bold text-[#000B6D]">Prescripto</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 lg:gap-6 group">
        <NavLink to="/" className={navLinkClass}>HOME</NavLink>
        <NavLink to="/AllDoc" className={navLinkClass}>ALL DOCTORS</NavLink>
        <NavLink to="/about" className={navLinkClass}>ABOUT</NavLink>
        <NavLink to="/contact" className={navLinkClass}>CONTACT</NavLink>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4 relative">
        {loggedIn && user ? (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
              title={user.fullName || user.email}
            >
              {getUserAvatar()} <ChevronDown size={16} className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg border rounded-md z-50">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/signup"
            className="bg-[#5F6FFF] text-white px-5 lg:px-7 py-2 lg:py-3 rounded-full hover:bg-[#505ead] transition text-sm lg:text-base"
          >
            Create account
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-blue-600" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-50"
        >
          <NavLink to="/" onClick={() => setIsOpen(false)} className={navLinkClass}>Home</NavLink>
          <NavLink to="/AllDoc" onClick={() => setIsOpen(false)} className={navLinkClass}>All Doctors</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={navLinkClass}>Contact</NavLink>

          {loggedIn && user ? (
            <div className="flex flex-col items-center gap-2">
              <Link
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
                title={user.fullName || user.email}
              >
                {getUserAvatar()}
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="bg-[#5F6FFF] text-white px-4 py-2 rounded-full hover:bg-[#505ead] transition"
            >
              Create account
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
