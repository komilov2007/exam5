import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function FourCardDetail() {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://6905db6eee3d0d14c133f2d2.mockapi.io/api/phones')
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-7xl  mt-15 mx-auto p-4">
      <Link to="/" className="text-blue-500 mb-4 inline-block">
        ← Back to list
      </Link>
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* Chap rasm */}
        <img
          src={phone.image}
          alt={phone.title}
          className="w-80 lg:w-80 h-60 mb-4 rounded -cover"
        />

        {/* O‘rta ma’lumot */}
        <div className="flex-1">
          <h1 className="text-3xl mb-2">{phone.title}</h1>
          <p className="text-gray-700 mb-2">${phone.price}</p>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 mr-2">★</span>
            <span>{phone.rating}</span>
          </div>
          <div className="flex space-x-2 mb-4">
            {phone.colors?.map((c, idx) => (
              <span
                key={idx}
                className="w-8 h-8 rounded-full border"
                style={{ backgroundColor: c }}
              ></span>
            ))}
          </div>
          <p className="text-gray-600">{phone.description}</p>
        </div>

        {/* O‘ng sotib olish bo‘limi */}
        <div className="border p-4 shadow hover:shadow-lg transition rounded-[10px] min-w-[200px]">
          <div className="flex justify-between mb-4">
            <h2 className="font-semibold">${phone.price}</h2>
            <p className="text-yellow-500">-12%</p>
          </div>

          <div className="flex items-center mt-2 gap-2">
            <div className="bg-blue-700 rounded-full w-5 h-5"></div>
            <p>Buy now</p>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div className="w-5 h-5 rounded-full border border-blue-700"></div>
            <p>Buy in installments</p>
          </div>

          <div className="flex gap-2 mt-5 flex-wrap">
            {[3, 6, 12, 18].map((month) => (
              <div
                key={month}
                className="border rounded-[5px] flex flex-col justify-center items-center p-1 text-gray-700 w-16"
              >
                {month} <span>month</span>
              </div>
            ))}
          </div>

          <button className="py-2 mt-5 w-full rounded-[10px] text-blue-700 border border-blue-700">
            Add to cart
          </button>
        </div>
      </div>{' '}
      <div className="flex gap-10  mt-10 border-b-2 border-gray-200 pb-5">
        <p className="">Technical Details</p>
        <p>Similar Products</p>
        <p>Comments</p>
      </div>
      <div className="">
        <div className=" rounded-lg p-4 flex flex-col justify-between">
          <h2 className=" text-lg text-gray-500">
            <span className="mr-10 mt-10 text-black font-semibold">
              Product name:
            </span>
            {phone.title}
          </h2>
          <p className="text-lg mt-5 text-gray-500">
            <span className="mr-10 text-black font-semibold">
              Product name:
            </span>
            {phone.description}{' '}
          </p>
          <p className="text-lg mt-5 text-gray-500">
            <span className="mr-10 text-black font-semibold">
              Product name:
            </span>
            ${phone.price}
          </p>
        </div>
      </div>
    </div>
  );
}
