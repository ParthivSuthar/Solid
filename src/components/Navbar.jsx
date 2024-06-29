import { navLinks } from "../data/data.";
import logo from "../assets/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const menu = <i className="fa-solid fa-bars text-2xl text-white"></i>;
  const close = <i className="fa-solid fa-xmark text-2xl text-white"></i>;

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <header className="w-full flex items-center justify-between h-16 bg-gradient-to-r from-red-500 to-blue-700">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div>
          <img src={logo} />
        </div>
        <nav className="lg:flex hidden">
          {navLinks.map((link, index) => (
            <ul key={index} className="hidden lg:flex mr-5 justify-between">
              <li>
                <a
                  className="text-white text-xl sm:text-2xl lg:text-3xl "
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            </ul>
          ))}
        </nav>
        <div className="lg:hidden flex items-center">
          <button className="animate-bounce" onClick={toggleMenu}>
            {menuOpen ? close : menu}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed top-14 p-5 right-0 w-full bg-gradient-to-r from-pink-600 to-blue-900 text-transparent text-yellow-300 z-20 flex items-center justify-center lg:hidden backdrop-blur-3xl">
          <ul>
            {navLinks.map((link, index) => (
              <li
                className="py-4 hover:scale-105 transform transition duration-300 hover:text-white"
                key={index}
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
