import React from 'react';
import Meta from '../assets/meta.png';
import Quloqchin from '../assets/quloqchin.png';
import Bitcoin from '../assets/bitcoin.png';
export default function OurBlogs() {
  return (
    <section className="px-4 container mx-auto md:px-10 lg:px-20 py-10">
      <div className="flex  items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Our Blogs</h2>

        <button className="text-sm text-blue-600 hover:underline">
          View all →
        </button>
      </div>
      <hr className="border-t" style={{ borderColor: '#B4B4B4' }} />
      <div className="flex mt-[3%]  flex-col justify-between lg:flex-row gap-6">
        <div className="bg-white w-full rounded-xl shadow hover:shadow-lg transition overflow-hidden flex-[0_0_35%] lg:flex-[0_0_35%] w-full">
          <img src={Meta} className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-gray-500 text-sm mb-1">
              August 8, 2023 • 3 min read
            </p>
            <h3 className="text-lg font-semibold mb-2">
              Meta Platforms plans to release free...
            </h3>
            <p className="text-gray-600 text-sm">
              The parent company of Facebook, Meta Platforms, is introducing
              software...
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 flex-[0_0_65%] lg:flex-[0_0_65%] w-full">
          <div className="bg-white flex rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img src={Quloqchin} className="w-[240px] h-48 object-cover" />
            <div className="p-4">
              <p className="text-gray-500 text-sm mb-1">March 29, 2023</p>
              <h3 className="text-lg font-semibold mb-2">
                8 Things You Probably Didn't Know About Headphones
              </h3>
              <p className="text-gray-600 text-sm">
                Owning a headphone could mean a different thing for different
                people...
              </p>
            </div>
          </div>
          <div className="bg-white flex rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img src={Bitcoin} className="w-[240px] h-48 object-cover" />
            <div className="p-4">
              <p className="text-gray-500 text-sm mb-1">August 17, 2023</p>
              <h3 className="text-lg font-semibold mb-2">
                Analyzing the August 17th Bitcoin Price Drop
              </h3>
              <p className="text-gray-600 text-sm">
                Bitcoin's price dropped more than 8% in a 10-minute window...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
