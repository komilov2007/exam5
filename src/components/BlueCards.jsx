export default function BlueCards() {
  return (
    <div className="max-w-[1370px] rounded-[10px] mx-auto w-full bg-[#003D94] py-10 px-4">
      <div
        className="
        max-w-7xl mx-auto 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 
        gap-6 
        overflow-x-auto lg:overflow-visible 
        snap-x flex-shrink-0
        lg:grid
      "
        style={{ display: 'grid' }}
      >
        <div className="bg-white rounded-xl p-4 relative shadow-md snap-start">
          <span className="absolute top-3 left-3 bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-md">
            -50%
          </span>
          <div className="w-full h-28 flex items-center justify-center mb-3">
            <img
              src="https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UF1000,1000_QL80_.jpg"
              alt=""
              className="h-full object-contain"
            />
          </div>
          <p className="text-sm text-gray-700 line-clamp-2 mb-2">
            Logitech G502 Gaming Mouse
          </p>
          <div className="flex justify-between text-sm">
            <span className="line-through text-gray-400">$38.00</span>
            <span className="text-black font-semibold">$19.00</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 relative shadow-md snap-start">
          <span className="absolute top-3 left-3 bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-md">
            -30%
          </span>
          <div className="w-full h-28 flex items-center justify-center mb-3">
            <img
              src="https://m.media-amazon.com/images/I/61riubHJN2L._AC_UF894,1000_QL80_.jpg"
              alt=""
              className="h-full object-contain"
            />
          </div>
          <p className="text-sm text-gray-700 line-clamp-2 mb-2">
            NPET K10 Wired Gaming Keyboard
          </p>
          <div className="flex justify-between text-sm">
            <span className="line-through text-gray-400">$49.00</span>
            <span className="text-black font-semibold">$34.30</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 relative shadow-md snap-start">
          <span className="absolute top-3 left-3 bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-md">
            -20%
          </span>
          <div className="w-full h-28 flex items-center justify-center mb-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplliZ6d4wd0jiR3Ea8OQJwLJjem9XyPQgMg&s"
              alt=""
              className="h-full object-contain"
            />
          </div>
          <p className="text-sm text-gray-700 line-clamp-2 mb-2">
            Apple Watch Series 7 (GPS, 41mm)
          </p>
          <div className="flex justify-between text-sm">
            <span className="line-through text-gray-400">$289.00</span>
            <span className="text-black font-semibold">$231.20</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 relative shadow-md snap-start">
          <span className="absolute top-3 left-3 bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-md">
            -25%
          </span>
          <div className="w-full h-28 flex items-center justify-center mb-3">
            <img
              src="data:image/avif;base64,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"
              alt=""
              className="h-full object-contain"
            />
          </div>
          <p className="text-sm text-gray-700 line-clamp-2 mb-2">
            MacBook Air M2 (8GB RAM, 256GB SSD)
          </p>
          <div className="flex justify-between text-sm">
            <span className="line-through text-gray-400">$950.00</span>
            <span className="text-black font-semibold">$712.66</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 relative shadow-md snap-start">
          <span className="absolute top-3 left-3 bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-md">
            -17%
          </span>
          <div className="w-full h-28 flex items-center justify-center mb-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_jwcCiVAo5Ab3reanUKNQtSbR4k7w8_gpg&s"
              alt=""
              className="h-full object-contain"
            />
          </div>
          <p className="text-sm text-gray-700 line-clamp-2 mb-2">
            Samsung Titan smart watch
          </p>
          <div className="flex justify-between text-sm">
            <span className="line-through text-gray-400">$120.00</span>
            <span className="text-black font-semibold">$99.60</span>
          </div>
        </div>
      </div>
    </div>
  );
}
