import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import {
  IoMenu,
  IoClose,
  IoHeartOutline,
  IoCartOutline,
  IoPersonOutline,
} from 'react-icons/io5';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
      <div className="mx-auto max-w-[1420px] px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-10 h-10 object-contain" />
        </div>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-5 text-gray-700">
          <IoHeartOutline
            size={22}
            className="cursor-pointer hover:text-blue-500"
          />
          <IoCartOutline
            size={22}
            className="cursor-pointer hover:text-blue-500"
          />
          <IoPersonOutline
            size={22}
            className="cursor-pointer hover:text-blue-500"
          />
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-lg ${
                  isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="flex gap-6 pt-3 text-gray-700">
            <IoHeartOutline size={24} />
            <IoCartOutline size={24} />
            <IoPersonOutline size={24} />
          </div>
        </div>
      )}
    </header>
  );
}
