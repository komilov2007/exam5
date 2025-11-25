import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoArrowUp,
} from 'react-icons/io5';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#031B45] text-white pt-16 pb-8 mt-10 overflow-x-hidden">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li>about us</li>
            <li>blog</li>
            <li>returns</li>
            <li>order status</li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Info</h3>
          <ul className="space-y-2 text-gray-300">
            <li>How it works?</li>
            <li>our promises</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact us</h3>
          <div className="flex items-start gap-2 mb-3">
            <IoLocationOutline size={20} />
            <p className="text-gray-300">123 Main Street, Anytown, USA</p>
          </div>
          <div className="flex items-start gap-2 mb-3">
            <IoCallOutline size={20} />
            <p className="text-gray-300">+1 (555) 123-4567</p>
          </div>
          <div className="flex items-start gap-2">
            <IoMailOutline size={20} />
            <p className="text-gray-300">TechHeimSupport@gmail.com</p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Sign up for News and updates
          </h3>
          <div className="flex items-center border border-gray-400 rounded-md px-3 py-2 mb-4">
            <IoMailOutline size={20} className="text-gray-300" />
            <input
              type="email"
              placeholder="E-mail Address"
              className="bg-transparent flex-1 ml-2 outline-none text-gray-200"
            />
            <span className="text-xl">{'>'}</span>
          </div>
          <div className="flex gap-4 text-white text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row md:justify-between md:items-center gap-6 flex-wrap">
        <div className="flex items-center gap-2 text-gray-300 flex-wrap">
          <span>© 2023 Tech Heim.</span>
        </div>
        <div className="flex gap-3 flex-wrap">
          <div className="w-12 h-6 bg-white rounded-md"></div>
          <div className="w-12 h-6 bg-white rounded-md"></div>
          <div className="w-12 h-6 bg-white rounded-md"></div>
          <div className="w-12 h-6 bg-white rounded-md"></div>
        </div>
        <div className="flex flex-wrap gap-6 text-gray-300 text-sm">
          <span>cookie settings</span>
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
          <span>Imprint</span>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="fixed right-6 bottom-6 z-40">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-full shadow-lg"
        >
          <IoArrowUp size={22} />
        </button>
      </div>
    </footer>
  );
}
