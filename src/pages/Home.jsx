import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="flex flex-col items-center justify-center text-center px-6 py-20 h-screen">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
          Bridging the Gap Between Food & People
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mb-8">
          Our platform connects restaurants with suppliers to deliver leftover food to people in need.
          Together, we reduce waste and fight hunger.
        </p>

        <Link to="/restaurants">
          <button className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-green-700 transition">
          
          </button>
        </Link>
      </section>

      <section className="px-6 py-16 bg-white">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Restaurants</h3>
            <p className="text-gray-600">Donate unsold but fresh food easily and help reduce food waste.</p>
          </div>

          <div className="shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Suppliers</h3>
            <p className="text-gray-600">Transport food safely from restaurants to distribution centers or people.</p>
          </div>

          <div className="shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Volunteers</h3>
            <p className="text-gray-600">Join the mission by helping deliver or organize food donations.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
