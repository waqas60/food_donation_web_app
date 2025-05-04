import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Login from '../pages/Login';

const navPaths = [
  { to: "/", name: "Home" },
  { to: "/restaurants", name: "Restaurants" },
  { to: "/suppliers", name: "Suppliers" },
  { to: "/status", name: "Status" }
];

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-green-600 tracking-tight">
          🍽️ FoodLoan
        </Link>

        <ul className="flex space-x-8 text-base font-medium text-gray-700">
          {navPaths.map((nav, index) => (
            <li key={index}>
              <Link
                to={nav.to}
                className={`transition-all duration-200 hover:text-green-600 ${location.pathname === nav.to ? "text-green-600 font-semibold" : ""
                  }`}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/login">
          <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
            Login
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
