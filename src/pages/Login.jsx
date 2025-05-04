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

    // Navigate based on role
    if (role === 'restaurant') {
      navigate('/restaurant-dashboard');
    } else {
      navigate('/supplier-dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
          Login as {role === 'restaurant' ? 'Restaurant' : 'Supplier'}
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="restaurant"
              checked={role === 'restaurant'}
              onChange={handleRoleChange}
            />
            <span>Restaurant</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="supplier"
              checked={role === 'supplier'}
              onChange={handleRoleChange}
            />
            <span>Supplier</span>
          </label>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="•••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            {role === 'restaurant' ? 'Go to Restaurant Dashboard' : 'Go to Supplier Dashboard'}
          </button>

          <div>
            <p>email: admin@gmail.com</p>
            <p>Password: admin</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
