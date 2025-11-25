import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function FourCard() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://6905db6eee3d0d14c133f2d2.mockapi.io/api/phones')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
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
    <div className="container mx-auto max-w-[1400px] p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {phones.map((phone) => (
        <Link
          key={phone.id}
          to={`/fourprod/${phone.id}`}
          className="flex flex-col  justify-center items-center p-4 rounded-[20px] shadow hover:shadow-lg transition"
        >
          <div className="relative flex mr-10">
            <img
              src={phone.image}
              alt={phone.title}
              className="w-40 h-40 mb-2 roundeder object-cover"
            />
            {phone.colors?.length > 0 && (
              <div className="absolute top-2 right-2 flex  flex-col items-center gap-1">
                {phone.colors.slice(0, 3).map((c, idx) => (
                  <div
                    key={idx}
                    className="w-3 h-3  rounded-full"
                    style={{ backgroundColor: c }}
                  ></div>
                ))}
                {phone.colors.length > 3 && <p className="text-xs">+</p>}
              </div>
            )}
          </div>
          <h2 className="text-xl w-full text-left mt-5 mb-5">{phone.title}</h2>
          <div className="flex justify-between w-full">
            <p className="text-gray-700">${phone.price}</p>
            <p className="text-gray-700">
              {phone.rating}
              <span className="text-yellow-400 ml-1">★</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
