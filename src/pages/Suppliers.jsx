import React from 'react';

const suppliers = [
  {
    name: "FoodLink Express",
    location: "Karachi",
    service: "Urban Food Delivery",
    image: "https://foodlinkny.org/wp-content/uploads/2020/10/Foodlink_color-logo.svg"
  }
];

const Suppliers = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-teal-700 text-center mb-10">Our Trusted Suppliers</h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {suppliers.map((supplier, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <img
              src={supplier.image}
              alt={supplier.name}
              className="w-full h-50 object-contain item-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{supplier.name}</h2>
              <p className="text-teal-600">{supplier.service}</p>
              <p className="text-gray-500 text-sm">{supplier.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suppliers;
