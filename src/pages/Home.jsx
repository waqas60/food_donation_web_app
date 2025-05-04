import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-30 to-white">

      <section className="flex flex-col items-center justify-center text-center px-6 py-20 h-screen">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
          Connecting surplus food with hungry people.
        </h1>
        <p className="text-gray-700 text-lg max-w-xl mb-8">
          We link restaurants and suppliers to deliver fresh excess food to those in need—reducing waste, feeding lives.
        </p>

        <Link to="/restaurants">
          <button className="bg-teal-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-teal-700 transition shadow-md">
            Get Started
          </button>
        </Link>
      </section>

      <section className="px-6 py-16 bg-white">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="bg-teal-50 shadow-sm p-6 rounded-xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">Restaurants</h3>
            <p className="text-gray-700">Donate unsold but fresh food easily and help reduce food waste.</p>
          </div>

          <div className="bg-teal-50 shadow-sm p-6 rounded-xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">Suppliers</h3>
            <p className="text-gray-700">Transport food safely from restaurants to distribution centers or people.</p>
          </div>

          <div className="bg-teal-50 shadow-sm p-6 rounded-xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">Volunteers</h3>
            <p className="text-gray-700">Join the mission by helping deliver or organize food donations.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
