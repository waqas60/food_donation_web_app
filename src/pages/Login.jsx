import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('restaurant');
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === 'restaurant') {
      navigate('/restaurant-dashboard');
    } else {
      navigate('/supplier-dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-50 px-4">
      <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-teal-700 mb-8">
          Login as {role === 'restaurant' ? 'Restaurant' : 'Supplier'}
        </h2>

        <div className="flex justify-center gap-6 mb-8">
          <label className="flex items-center space-x-2 text-teal-700 font-medium">
            <input
              type="radio"
              value="restaurant"
              checked={role === 'restaurant'}
              onChange={handleRoleChange}
              className="accent-teal-600"
            />
            <span>Restaurant</span>
          </label>

          <label className="flex items-center space-x-2 text-teal-700 font-medium">
            <input
              type="radio"
              value="supplier"
              checked={role === 'supplier'}
              onChange={handleRoleChange}
              className="accent-teal-600"
            />
            <span>Supplier</span>
          </label>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="•••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-xl font-semibold hover:bg-teal-700 transition"
          >
            {role === 'restaurant' ? 'Go to Restaurant Dashboard' : 'Go to Supplier Dashboard'}
          </button>

          <div className="text-sm text-center text-gray-500 mt-6">
            <p>Test Login: <strong>admin@gmail.com</strong> / <strong>admin</strong></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
