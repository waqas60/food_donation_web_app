import React, { useState } from 'react';

const RestaurantDashboard = () => {
    const [donations, setDonations] = useState([
        {
            id: 1,
            name: '10 Biryani Boxes',
            quantity: '10',
            expiry: '2025-05-06',
            image: '',
            status: 'Pending',
        },
        {
            id: 2,
            name: '5 Veg Meals',
            quantity: '5',
            expiry: '2025-05-05',
            image: '',
            status: 'Delivered',
        },
    ]);

    const [form, setForm] = useState({
        name: '',
        quantity: '',
        expiry: '',
        image: '',
    });

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm((prev) => ({ ...prev, image: reader.result }));
            };
            if (files[0]) reader.readAsDataURL(files[0]);
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleAddDonation = () => {
        if (!form.name.trim() || !form.quantity || !form.expiry) return;

        const newDonation = {
            id: donations.length + 1,
            ...form,
            status: 'Pending',
        };

        setDonations((prev) => [...prev, newDonation]);
        setForm({ name: '', quantity: '', expiry: '', image: '' });
    };

    const updateStatus = (id) => {
        setDonations((prev) =>
            prev.map((donation) =>
                donation.id === id
                    ? {
                        ...donation,
                        status:
                            donation.status === 'Pending'
                                ? 'Picked'
                                : donation.status === 'Picked'
                                    ? 'Delivered'
                                    : donation.status,
                    }
                    : donation
            )
        );
    };

    const upcomingDonations = donations.filter((d) => d.status !== 'Delivered');
    const pastDonations = donations.filter((d) => d.status === 'Delivered');

    return (
        <div className="max-w-4xl mx-auto p-6 bg-teal-50 min-h-screen">
            <h1 className="text-3xl font-bold text-teal-700 mb-6">Restaurant Dashboard</h1>

            {/* Add New Donation */}
            <div className="bg-white shadow-md rounded-2xl p-6 mb-10">
                <h2 className="text-xl font-semibold mb-4">Upload Food Donation</h2>
                <div className="grid gap-4">
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="Food Name"
                        className="border px-4 py-2 rounded-lg"
                    />
                    <input
                        type="number"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleInputChange}
                        placeholder="Quantity (e.g. 20)"
                        className="border px-4 py-2 rounded-lg"
                    />
                    <input
                        type="date"
                        name="expiry"
                        value={form.expiry}
                        onChange={handleInputChange}
                        className="border px-4 py-2 rounded-lg"
                    />
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleInputChange}
                        className="border px-4 py-2 rounded-lg"
                    />
                    {form.image && (
                        <img
                            src={form.image}
                            alt="Preview"
                            className="w-32 h-32 object-cover rounded-lg border"
                        />
                    )}
                    <button
                        onClick={handleAddDonation}
                        className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
                    >
                        Add Donation
                    </button>
                </div>
            </div>

            {/* Current Donations */}
            <div className="bg-white shadow-md rounded-2xl p-6 mb-10">
                <h2 className="text-xl font-semibold mb-4">Ongoing Donations</h2>
                {upcomingDonations.length === 0 ? (
                    <p className="text-gray-500">No active donations.</p>
                ) : (
                    <ul className="space-y-4">
                        {upcomingDonations.map((donation) => (
                            <li
                                key={donation.id}
                                className="flex justify-between items-center border p-4 rounded-lg"
                            >
                                <div>
                                    <h3 className="font-semibold text-lg text-teal-700">
                                        {donation.name} ({donation.quantity})
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Expiry: {donation.expiry}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span
                                        className={`text-sm font-medium ${donation.status === 'Picked'
                                                ? 'text-yellow-600'
                                                : 'text-teal-600'
                                            }`}
                                    >
                                        {donation.status}
                                    </span>
                                    {donation.status !== 'Delivered' && (
                                        <button
                                            onClick={() => updateStatus(donation.id)}
                                            className="text-sm bg-teal-500 text-white px-4 py-1 rounded-lg hover:bg-teal-600"
                                        >
                                            Mark as {donation.status === 'Pending' ? 'Picked' : 'Delivered'}
                                        </button>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Past Donations */}
            <div className="bg-white shadow-md rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-4">Past Donations</h2>
                {pastDonations.length === 0 ? (
                    <p className="text-gray-500">No past donations.</p>
                ) : (
                    <ul className="space-y-3">
                        {pastDonations.map((donation) => (
                            <li
                                key={donation.id}
                                className="flex justify-between items-center p-3 border rounded-lg"
                            >
                                <span>
                                    {donation.name} ({donation.quantity})
                                </span>
                                <span className="text-sm font-medium text-green-600">
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
