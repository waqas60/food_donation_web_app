import React from 'react';
import Navbar from '../components/Navbar';

const foodDonatingOrgs = [
  {
    name: "Baitussalam Food Bank",
    image: "https://baitussalam.org/images/logo-2.svg"
  },
  {
    name: "Food Savers",
    image: "https://foodsavers.org.pk/wp-content/uploads/2019/06/Logo-2-1.png"
  },
  {
    name: "Be My Guest",
    image: "https://bemyguest.com.pk/wp-content/uploads/2024/11/tr-logo.svg"
  },
  {
    name: "Rizq Bachao",
    image: "https://rizq.org/wp-content/themes/give-child/assets/images/logo.png"
  }
];


const Restaurants = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">Restaurants</h1>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {foodDonatingOrgs.map((restaurant, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-50 object-contain item-center"
              />


              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{restaurant.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
