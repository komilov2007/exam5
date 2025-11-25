import Apple from '../assets/apple.png';
import Sony from '../assets/sony.png';
import Samsung from '../assets/samsung.png';
import Canon from '../assets/canon.png';
import Huawei from '../assets/huawei.png';
import Lenovo from '../assets/lenovo.png';
import SmartWatch from '../assets/smartwatch.png';
export default function TopBrands() {
  return (
    <section className="w-full container mx-auto px-4 md:px-10 lg:px-20 py-10">
      <div className="mb-8">
        <h2 className="text-[32px] font-semibold mb-4">Top Brands</h2>
        <hr className="border-t" style={{ borderColor: '#B4B4B4' }} />
        <div className="flex flex-wrap mt-[3%] items-center justify-center md:justify-between gap-6">
          <img src={Apple} alt="Apple" className="h-8 object-contain" />
          <img src={Sony} alt="Sony" className="h-8 object-contain" />
          <img src={Samsung} alt="Samsung" className="h-8 object-contain" />
          <img src={Canon} alt="Canon" className="h-8 object-contain" />
          <img src={Huawei} alt="Huawei" className="h-8 object-contain" />
          <img src={Lenovo} alt="Lenovo" className="h-8 object-contain" />
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-blue-800 to-orange-400 rounded-xl overflow-hidden flex flex-col md:flex-row items-center md:items-stretch">
        <div className="flex-1 p-6 md:p-10 text-white text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">SMART WATCH</h3>
          <p className="text-sm md:text-base mb-4">
            Various designs and brands
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md transition text-white">
            View
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center p-6 md:p-10">
          <img
            src={SmartWatch}
            alt="Smart Watch"
            className="w-full max-w-xs md:max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}
