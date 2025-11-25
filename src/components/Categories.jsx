import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Categories() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://6924b19082b59600d7210e2d.mockapi.io/product')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="w-full max-w-[1370px] mx-auto mt-10 flex gap-6 justify-between overflow-x-auto pb-4">
      {items.map((item) => (
        <Link
          key={item.id}
          to={`/categories/${item.id}`}
          className="min-w-[180px] h-[200px] bg-white rounded-[16px] border border-gray-200 shadow-sm flex flex-col items-center justify-center hover:shadow-md transition"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-[100px] h-[100px] object-contain"
          />
          <p className="mt-3 text-gray-700 text-[15px] font-medium">
            {item.title}
          </p>
        </Link>
      ))}
    </div>
  );
}
