import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Phones() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://6924b19082b59600d7210e2d.mockapi.io/phone')
      .then((res) => res.json())
      .then((data) => {
        setPhones(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid container flex justify-center mx-auto max-w-[1400px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {phones.map((phone) => (
        <Link
          key={phone.id}
          to={`/phones/${phone.id}`}
          className=" flex flex-col justify-center items-center  p-4 rounded-[20px] shadow hover:shadow-lg transition"
        >
          <div className="flex">
            <img
              src={phone.image}
              alt={phone.title}
              className="w-40 border-b-2 h-40 mb-2 rounded"
            />
            <div className="flex  items-center gap-1 mt-10 pl-8 flex-col">
              <div className="rounded-full w-3 h-3 bg-[#51504C]"></div>
              <div className="rounded-full w-3 h-3 bg-[#BCD7FF]"></div>
              <div className="rounded-full w-3 h-3 bg-[#EADEE9]"></div>
              <p>+</p>
            </div>
          </div>
          <h2 className="text-xl flex jutify-start mt-5 mb-5">{phone.title}</h2>
          <div className="flex gap-35">
            <p className="text-gray-700">${phone.price}</p>
            <p className="text-gray-700">
              {phone.rating}
              <span className="text-yellow-400 mb-2">★</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
