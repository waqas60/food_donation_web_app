import React, { useState } from 'react';

const initialDonations = [
    { id: 1, item: '10 Food Packs - Green Spoon', status: 'Pending' },
    { id: 2, item: '5 Veg Meals - Spice Hub', status: 'Pending' },
    { id: 3, item: '20 Sandwiches - City Bites', status: 'Pending' },
];

const SupplierDashboard = () => {
    const [donations, setDonations] = useState(initialDonations);

    const handleDeliver = (id) => {
        setDonations(prev =>
            prev.map(d =>
                d.id === id ? { ...d, status: 'Delivered' } : d
            )
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-bold text-green-700 text-center mb-6">Supplier Dashboard</h1>

            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Pending Deliveries</h2>

                {donations.length === 0 ? (
                    <p className="text-gray-500">No donations available.</p>
                ) : (
                    <ul className="space-y-4">
                        {donations.map(donation => (
                            <li
                                key={donation.id}
                                className="flex justify-between items-center border p-4 rounded-lg"
                            >
                                <div>
                                    <p className="font-medium">{donation.item}</p>
                                    <p
                                        className={`text-sm ${donation.status === 'Delivered' ? 'text-green-600' : 'text-yellow-600'
                                            }`}
                                    >
                                        Status: {donation.status}
                                    </p>
                                </div>
                                {donation.status === 'Pending' && (
                                    <button
                                        onClick={() => handleDeliver(donation.id)}
                                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                                    >
                                        Mark as Delivered
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SupplierDashboard;
