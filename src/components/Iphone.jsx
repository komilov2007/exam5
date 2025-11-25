import React from 'react';
import iPhoneImage from '../assets/iphone.png';
import Ps25 from '../assets/ps53.png';

const IPhone = () => {
  return (
    <div className=" mx-auto max-w-[1420px] flex flex-col lg:flex-row gap-6 p-6 ">
      <div className="flex-1 rounded-[24px] p-[40px] bg-gradient-to-br from-[#31B6C9] to-[#6396CE] relative overflow-hidden shadow-lg">
        <h1 className="text-[28px] font-semibold text-white mb-6">
          <span className="text-black">Iphone</span> 15 Series
        </h1>
        <div className="flex   gap-8 flex-[0_0_60%] lg:flex-[0_0_60%]">
          <img src={iPhoneImage} alt="Phones" className="w-[320px] mb-8" />

          <div className="">
            <div className="flex gap-4 mb-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-[60px] h-[60px] bg-transperent border rounded-[16px] flex flex-col items-center justify-center shadow-md"
                >
                  <span className="text-[22px] font-bold text-[#333]">8</span>
                  <span className="text-[12px] text-gray-700">Days</span>
                </div>
              ))}
            </div>

            <h2 className=" text-[20px] font-semibold mb-2">
              It feels good to be the first
            </h2>

            <p className=" max-w-[360px] leading-[1.5] mb-8">
              Get ready for the future of smartphones. Experience innovation
              like never before. Stay tuned for the big iPhone 15 pre-sale.
            </p>

            <button className="px-6 py-3 bg-[#1A73E8] hover:bg-[#0F5BD7] transition rounded-[10px] text-white font-medium">
              Register Now
            </button>
          </div>

          <div className="absolute top-[-50px] right-[50px] w-[180px] h-[180px] border-[16px] border-white/30 rounded-full"></div>
          <div className="absolute bottom-[-40px] right-[-20px] w-[160px] h-[160px] border-[16px] border-white/20 rounded-full"></div>
        </div>
      </div>

      <div className="flex-1 rounded-[24px] p-[40px] bg-[#F4C785] flex-[0_0_40%] lg:flex-[0_0_40%] relative overflow-hidden shadow-lg">
        <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-[#153A73] rounded-bl-[200px]"></div>

        <h1 className="text-[26px] font-semibold text-[#153A73] relative z-[2] mb-[80px]">
          Play Station 5
        </h1>
        <div className="flex row-rewervse">
          <div>
            <p className="text-[#153A73] text-[18px] font-semibold relative z-[2] mb-6">
              Digital Edition + 2TB
            </p>

            <button className="mt-8 px-6 py-3 bg-[#1A73E8] hover:bg-[#0F5BD7] transition rounded-[10px] text-white font-medium relative z-[3]">
              Buy Now
            </button>
          </div>
          <img src={Ps25} alt="" className="w-[300px] relative z-[3]" />
        </div>

        <div className="absolute top-[160px] right-[40px] grid grid-cols-3 gap-1 opacity-50">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-[6px] h-[6px] bg-[#153A73] rounded-sm"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IPhone;
