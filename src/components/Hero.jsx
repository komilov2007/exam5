import Laptop from '../assets/laptop.png';
export default function Hero() {
  return (
    <section className="pt-28 pb-16">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1c]">
              Tech Heim
            </h1>
            <p className="mt-3 text-lg text-gray-700">
              "Join the{' '}
              <span className="text-orange-500 font-semibold">
                digital revolution
              </span>
              "
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition">
              Explore More
            </button>
          </div>
          <div className="flex justify-center overflow-hidden">
            <img
              src={Laptop}
              alt="Laptop"
              className="w-full max-w-full md:max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
