import React, { useState } from 'react';

const RestaurantDashboard = () => {
    const [donations, setDonations] = useState([
        { id: 1, item: '10 Biryani Boxes', status: 'Pending' },
        { id: 2, item: '5 Veg Meals', status: 'Delivered' }
    ]);

    const [newItem, setNewItem] = useState('');

    const handleAddDonation = () => {
        if (!newItem.trim()) return;

        setDonations(prev => [
            ...prev,
            { id: prev.length + 1, item: newItem, status: 'Pending' }
        ]);

        setNewItem('');
    };


    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-green-700 mb-6">Restaurant Dashboard</h1>

            {/* Add New Donation */}
            <div className="bg-white shadow-md rounded-xl p-4 mb-6">
                <h2 className="text-xl font-semibold mb-2">Add New Food Donation</h2>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        placeholder="e.g. 20 Sandwiches"
                        className="border px-3 py-2 rounded-md w-full"
                    />
                    <button
                        onClick={handleAddDonation}
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                    >
                        Add
                    </button>
                </div>
            </div>

            {/* Donation List */}
            <div className="bg-white shadow-md rounded-xl p-4">
                <h2 className="text-xl font-semibold mb-4">Your Donations</h2>
                {donations.length === 0 ? (
                    <p className="text-gray-500">No donations yet.</p>
                ) : (
                    <ul className="space-y-3">
                        {donations.map((donation) => (
                            <li
                                key={donation.id}
                                className="flex justify-between items-center p-3 border rounded-md"
                            >
                                <span>{donation.item}</span>
                                <span
                                    className={`text-sm font-medium ${donation.status === 'Delivered'
                                        ? 'text-green-600'
                                        : 'text-yellow-600'
                                        }`}
                                >
                                    {donation.status}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default RestaurantDashboard;
