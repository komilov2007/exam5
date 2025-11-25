import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CategoriesDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [camera, setCamera] = useState([]);

  useEffect(() => {
    fetch('https://6924b19082b59600d7210e2d.mockapi.io/product')
      .then((res) => res.json())
      .then((data) => {
        const current = data.find((item) => item.id == id);
        setProduct(current);
        if (current?.category === 'accessories') {
          fetch('https://6925949182b59600d7243905.mockapi.io/oxshash')
            .then((res) => res.json())
            .then((accessoriesData) => {
              setSimilar(accessoriesData.slice(0, 10));
            });
        }
        if (current?.category === 'camera') {
          fetch('https://6925949182b59600d7243905.mockapi.io/Categor')
            .then((res) => res.json())
            .then((cameraData) => {
              setSimilar(cameraData.slice(0, 10));
            });
        }
        if (current?.category === 'laptop') {
          fetch('https://6925a79482b59600d724996b.mockapi.io/laptop')
            .then((res) => res.json())
            .then((cameraData) => {
              setSimilar(cameraData.slice(0, 10));
            });
        }
        if (current?.category === 'phone') {
          fetch('https://6925a79482b59600d724996b.mockapi.io/smart')
            .then((res) => res.json())
            .then((cameraData) => {
              setSimilar(cameraData.slice(0, 10));
            });
        }
        if (current?.category === 'gaming') {
          fetch('https://6905db6eee3d0d14c133f2d2.mockapi.io/api/gaming')
            .then((res) => res.json())
            .then((cameraData) => {
              setSimilar(cameraData.slice(0, 10));
            });
        }
        if (current?.category === 'watch') {
          fetch('https://6925b1af82b59600d724c860.mockapi.io/smartwatch')
            .then((res) => res.json())
            .then((cameraData) => {
              setSimilar(cameraData.slice(0, 10));
            });
        } else {
          const filtered = data
            .filter(
              (item) => item.category === current.category && item.id != id
            )
            .slice(0, 10);

          setSimilar(filtered);
        }
      });
  }, [id]);

  if (!product) return <p className="mt-20 text-center">Loading...</p>;

  return (
    <div className="w-full max-w-[1370px]  mx-auto mt-20">
      {/* Detail qismi */}
      <div className="flex justify-around mt-30 items-start gap-10">
        <img
          src={product.image}
          alt={product.title}
          className="w-[300px] h-[300px] object-contain"
        />
        <div>
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-600 mt-3">{product.description}</p>
          <p className="text-xl font-semibold mt-4">${product.price}</p>
          <p className="mt-2 text-sm text-gray-500">
            Category: <b>{product.category}</b>
          </p>
        </div>
        <div className="borde p-4 shadow hover:shadow-lg transition rounded-[10px]">
          <div className="flex gap-40">
            <h1>${product.price}</h1>
            <p className="text-yellow-500">-12%</p>
          </div>

          <div className="flex items-center mt-5  gap-2">
            <div className="bg-blue-700  rounded-full w-5 h-5"></div>
            <p>Buy now</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border border-blue700"></div>
            <p>Buy in installments</p>
          </div>
          {/* {casdkhhb} */}
          <div className="flex gap-2 mt-5">
            <div className="border  rounded-[5px] flex flex-col justify-center items-center p-1 text-gray-700">
              3 <span>month</span>
            </div>
            <div className="flex">
              <div className="border  rounded-[5px] flex flex-col justify-center items-center p-1 text-gray-700">
                6 <span>month</span>
              </div>
            </div>
            <div className="flex">
              <div className="border  rounded-[5px] flex flex-col justify-center items-center p-1 text-gray-700">
                12 <span>month</span>
              </div>
            </div>
            <div className="flex">
              <div className="border  rounded-[5px] flex flex-col justify-center items-center p-1 text-gray-700">
                18 <span>month</span>
              </div>
            </div>
          </div>
          {/* {fldadjg} */}
          <button className="py-2 mt-5 px-21 rounded-[10px] text border border-blue-700">
            Add to cart
          </button>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-10 mb-4">Similar Products</h3>

      <div className="grid cotainer md:grid-cols-5 sm:grid-cols-5 gap-5">
        {similar.length > 0 ? (
          similar.map((item) => (
            <div
              key={item.id}
              className="p-4  rounded-lg bg-gray-200 shadow-sm hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[150px] object-contain"
              />
              <p className="mt-3 font-medium">{item.title}</p>
              <p className="text-gray-600 text-sm">${item.price}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-5 text-center">
            O‘xshash mahsulot notfound
          </p>
        )}
      </div>
    </div>
  );
}
