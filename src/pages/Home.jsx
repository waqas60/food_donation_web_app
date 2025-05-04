import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 h-screen  to-white">
        <h1 className="text-5xl md:text-6xl font-extrabold text-teal-800 mb-6 leading-tight">
          Save Food From Waste
        </h1>
        <p className="text-gray-700 text-xl max-w-2xl mb-10">
          Share Food. Reduce Waste. Feed Lives. Empower Communities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/login">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-teal-700 transition shadow-lg">
              Join as Restaurant
            </button>
          </Link>

          <Link to="/login">
            <button className="bg-white text-teal-700 border border-teal-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-teal-50 transition shadow-lg">
              Join as Supplier
            </button>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-teal-800 mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-teal-600 mb-2">1</div>
            <h3 className="text-xl font-semibold mb-2">Restaurants Donate</h3>
            <p>Restaurants register and submit their surplus food via our platform.</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-600 mb-2">2</div>
            <h3 className="text-xl font-semibold mb-2">Suppliers Pick Up</h3>
            <p>Registered transporters collect and move food to distribution points.</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-600 mb-2">3</div>
            <h3 className="text-xl font-semibold mb-2">Volunteers Distribute</h3>
            <p>Volunteers assist in sorting and distributing food to those in need.</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-600 mb-2">4</div>
            <h3 className="text-xl font-semibold mb-2">Communities Nourished</h3>
            <p>People receive fresh meals and our community impact grows.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-teal-800 mb-12">
            Who Can Join
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-teal-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">Restaurants</h3>
              <p>Donate unsold but fresh food and reduce waste while helping others.</p>
            </div>
            <div className="bg-teal-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">Suppliers</h3>
              <p>Ensure safe and quick delivery of meals to communities in need.</p>
            </div>
            <div className="bg-teal-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">Volunteers</h3>
              <p>Help organize, distribute, and support logistics for food donations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-4xl font-bold text-teal-800 mb-12">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="italic">“Nourish Together is a brilliant initiative. It helps us make sure no good food goes to waste.”</p>
            <h4 className="mt-4 font-semibold text-teal-700">— Restaurant Owner, Karachi</h4>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="italic">“Delivering food feels like delivering hope. I’m proud to be a part of this mission.”</p>
            <h4 className="mt-4 font-semibold text-teal-700">— Supplier, Lahore</h4>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="italic">“I’ve seen firsthand how many lives we’ve touched. It’s amazing to help out.”</p>
            <h4 className="mt-4 font-semibold text-teal-700">— Volunteer, Islamabad</h4>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-white py-20 text-center">
        <h2 className="text-4xl font-bold text-teal-800 mb-8">Our Impact So Far</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <div className="text-5xl font-bold text-teal-600">150+</div>
            <p className="mt-2 text-lg">Restaurants Participated</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-teal-600">25,000+</div>
            <p className="mt-2 text-lg">Meals Delivered</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-teal-600">300+</div>
            <p className="mt-2 text-lg">Volunteers Engaged</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
