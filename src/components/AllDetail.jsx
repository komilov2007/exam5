import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function PhonesDetail() {
  const { id } = useParams();

  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const urls = [
    'https://6924b19082b59600d7210e2d.mockapi.io/product',
    'https://6925949182b59600d7243905.mockapi.io/oxshash',
    'https://6925949182b59600d7243905.mockapi.io/Categor',
    'https://6925a79482b59600d724996b.mockapi.io/laptop',
    'https://6925a79482b59600d724996b.mockapi.io/smart',
    'https://6905db6eee3d0d14c133f2d2.mockapi.io/api/gaming',
    'https://6925b1af82b59600d724c860.mockapi.io/smartwatch',
  ];

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const responses = await Promise.all(urls.map((url) => fetch(url)));
        const jsonData = await Promise.all(responses.map((r) => r.json()));
        const allData = jsonData.flat();
        const selected = allData.find((p) => String(p.id) === id);
        if (!selected) throw new Error('Phone not found');
        setPhone(selected);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-7xl mt-30 mx-auto p-4">
      <Link to="/" className="text-blue-500 mb-4 inline-block">
        ← Back to list
      </Link>

      <div className="flex justify-between gap-6">
        {/* Chap */}
        <img
          src={phone.image}
          alt={phone.title}
          className="w-80 h-60 mb-4 rounded"
        />

        {/* O‘rta */}
        <div>
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

        {/* O‘ng */}
        <div className="border p-4 shadow rounded-[10px]">
          <div className="flex gap-40">
            <h1>${phone.price}</h1>
            <p className="text-yellow-500">-12%</p>
          </div>

          <div className="flex items-center mt-5 gap-2">
            <div className="bg-blue-700 rounded-full w-5 h-5"></div>
            <p>Buy now</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border border-blue700"></div>
            <p>Buy in installments</p>
          </div>

          <div className="flex gap-2 mt-5">
            {[3, 6, 12, 18].map((m) => (
              <div
                key={m}
                className="border rounded-[5px] flex flex-col justify-center items-center p-1 text-gray-700"
              >
                {m} <span>month</span>
              </div>
            ))}
          </div>

          <button className="py-2 mt-5 px-21 rounded-[10px] border border-blue-700">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
