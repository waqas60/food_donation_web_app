import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navPaths = [
  { to: "/", name: "Home" },
  { to: "/restaurants", name: "Restaurants" },
  { to: "/suppliers", name: "Suppliers" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold text-teal-700 tracking-tight">
          🍽️ Feedsy
        </Link>

        <ul className="hidden md:flex space-x-8 text-base font-medium text-gray-700">
          {navPaths.map((nav, index) => (
            <li key={index}>
              <Link
                to={nav.to}
                className={`transition-all duration-200 hover:text-teal-600 ${location.pathname === nav.to ? "text-teal-600 font-semibold" : ""}`}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/login">
          <button className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition shadow">
            Login
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
