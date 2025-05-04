import React, { useState } from 'react';

const initialDonations = [
    { id: 1, item: '10 Food Packs - Green Spoon', status: 'Pending' },
    { id: 2, item: '5 Veg Meals - Spice Hub', status: 'Pending' },
    { id: 3, item: '20 Sandwiches - City Bites', status: 'Pending' },
];

const SupplierDashboard = () => {
    const [donations, setDonations] = useState(initialDonations);
    const [noteInputs, setNoteInputs] = useState({});
    const [imageInputs, setImageInputs] = useState({});

    const handleAccept = (id) => {
        setDonations((prev) =>
            prev.map((d) =>
                d.id === id ? { ...d, status: 'Accepted' } : d
            )
        );
    };

    const handleDeliver = (id) => {
        const note = noteInputs[id] || '';
        const proofImage = imageInputs[id] || '';
        setDonations((prev) =>
            prev.map((d) =>
                d.id === id
                    ? {
                        ...d,
                        status: 'Delivered',
                        note,
                        proofImage,
                    }
                    : d
            )
        );
    };

    const handleImageUpload = (e, id) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageInputs((prev) => ({ ...prev, [id]: reader.result }));
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-bold text-green-700 text-center mb-6">Supplier Dashboard</h1>

            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6">
                <h2 className="text-xl font-semibold">Available Food Donations</h2>

                {donations.length === 0 ? (
                    <p className="text-gray-500">No donations available.</p>
                ) : (
                    <ul className="space-y-6">
                        {donations.map((donation) => (
                            <li key={donation.id} className="border rounded-xl p-4 shadow-sm">
                                <div className="flex justify-between items-center mb-2">
                                    <p className="font-medium">{donation.item}</p>
                                    <span
                                        className={`text-sm font-medium ${donation.status === 'Delivered'
                                                ? 'text-green-600'
                                                : donation.status === 'Accepted'
                                                    ? 'text-yellow-600'
                                                    : 'text-gray-600'
                                            }`}
                                    >
                                        Status: {donation.status}
                                    </span>
                                </div>

                                {donation.status === 'Pending' && (
                                    <button
                                        onClick={() => handleAccept(donation.id)}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                    >
                                        Accept Pickup
                                    </button>
                                )}

                                {donation.status === 'Accepted' && (
                                    <div className="mt-4 space-y-3">
                                        <textarea
                                            placeholder="Add delivery notes (optional)"
                                            value={noteInputs[donation.id] || ''}
                                            onChange={(e) =>
                                                setNoteInputs((prev) => ({
                                                    ...prev,
                                                    [donation.id]: e.target.value,
                                                }))
                                            }
                                            className="w-full border px-3 py-2 rounded-md"
                                        />

                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleImageUpload(e, donation.id)}
                                            className="w-full"
                                        />

                                        {imageInputs[donation.id] && (
                                            <img
                                                src={imageInputs[donation.id]}
                                                alt="Proof"
                                                className="w-32 h-32 object-cover rounded-md border"
                                            />
                                        )}

                                        <button
                                            onClick={() => handleDeliver(donation.id)}
                                            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                                        >
                                            Mark as Delivered
                                        </button>
                                    </div>
                                )}

                                {donation.status === 'Delivered' && (
                                    <div className="mt-3 text-sm text-gray-700">
                                        {donation.note && <p><strong>Note:</strong> {donation.note}</p>}
                                        {donation.proofImage && (
                                            <img
                                                src={donation.proofImage}
                                                alt="Delivery Proof"
                                                className="w-32 h-32 mt-2 object-cover border rounded"
                                            />
                                        )}
                                    </div>
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
