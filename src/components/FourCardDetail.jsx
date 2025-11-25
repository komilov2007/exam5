import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function PhonesDetail() {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://6924b19082b59600d7210e2d.mockapi.io/phone')
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((p) => String(p.id) === id);
        if (!selected) throw new Error('Phone not found');
        setPhone(selected);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-7xl mt-20 mx-auto p-4 mt-6">
      <Link to="/" className="text-blue-500 mb-4 inline-block">
        ← Back to list
      </Link>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left - Image */}
        <div className="flex-shrink-0 lg:w-1/3">
          <img
            src={phone.image || 'https://via.placeholder.com/300'}
            alt={phone.title}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Center - Info */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">{phone.title}</h1>
          <p className="text-gray-700 text-lg sm:text-xl">${phone.price}</p>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">★</span>
            <span>{phone.rating || 'No rating'}</span>
          </div>

          {phone.colors && (
            <div className="flex gap-2">
              {phone.colors.map((c, idx) => (
                <span
                  key={idx}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border"
                  style={{ backgroundColor: c }}
                ></span>
              ))}
            </div>
          )}

          <p className="text-gray-600">{phone.description}</p>
        </div>

        {/* Right - Purchase Card */}
        <div className="w-full lg:w-64 border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">${phone.price}</span>
            <span className="text-yellow-500">-12%</span>
          </div>

          <button className="bg-blue-700 text-white py-2 rounded-lg mt-2 w-full">
            Buy now
          </button>
          <button className="border border-blue-700 text-blue-700 py-2 rounded-lg mt-2 w-full">
            Buy in installments
          </button>

          <div className="flex gap-2 mt-4 flex-wrap">
            {[3, 6, 12, 18].map((month) => (
              <div
                key={month}
                className="border rounded-md p-2 text-center text-gray-700 flex-1 min-w-[60px]"
              >
                {month} <span className="text-sm">month</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10 border-b-2 border-gray-200 pb-2">
        <p className="cursor-pointer hover:text-blue-500">Technical Details</p>
        <p className="cursor-pointer hover:text-blue-500">Similar Products</p>
        <p className="cursor-pointer hover:text-blue-500">Comments</p>
      </div>

      {/* Details Section */}
      <div className="mt-6 flex flex-col gap-4">
        <div className="rounded-lg p-4 border bg-gray-50 flex flex-col gap-2">
          <h2 className="text-lg text-gray-700">
            <span className="font-semibold text-black">Product name:</span>{' '}
            {phone.title}
          </h2>
          <p className="text-gray-700">
            <span className="font-semibold text-black">Description:</span>{' '}
            {phone.description}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-black">Price:</span> $
            {phone.price}
          </p>
        </div>
      </div>
    </div>
  );
}
