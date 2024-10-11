
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import hanu from '../../assets/hanubglogo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className={`text-2xl flex  ${isScrolled ? "hover:text-indigo-600" : "text-white "}`}
        ><img src={hanu} alt="HunCode" className="w-40 lg:w-80 h-10 sm:w-20" /><span></span>
        </a>
        
        {/* <a
          href="/"
          className={`text-2xl flex  ${isScrolled ? "hover:text-indigo-600" : "text-white "}`}
        ><img src={hanu} alt="hanucode" className="" />
        </a> */}

        {/* Links for large screens */}
        <ul className="hidden md:flex space-x-8 items-center text-lg">
          <li>
            <a
              href="/"
              className={`${
                isScrolled ? "hover:text-indigo-600" : "text-white"
              }`}
              onClick={closeMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/us"
              className={`${
                isScrolled ? "hover:text-indigo-600" : "text-white"
              }`}
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/work"
              className={`${
                isScrolled ? "hover:text-indigo-600" : "text-white"
              }`}
              onClick={closeMenu}
            >
              Work
            </a>
          </li>
          <li className="">
            <a
              href="/service"
              className={`${
                isScrolled ? "hover:text-indigo-600" : "text-white"
              }`}
              onClick={closeMenu}
            >
              Services
            </a>
            <button
              onClick={toggleServices}
              className={`ml-2 focus:outline-none ${isScrolled ? "text-black" : "text-white"}`}
            >
              ▼ {/* Dropdown icon */}
            </button>
            {isServicesOpen && (
              <ul className="absolute mb-2  bg-gray-200 shadow-lg mt-2 rounded-md">
                <li>
                  <button onClick={() => navigate('/web-development')} className="block px-4 py-2 hover:bg-gray-200">
                  Website Development
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/app')} className="block px-4 py-2 hover:bg-gray-200">
                    App / Mobile Development
                  </button>
                </li>
              
                <li>
                  <button onClick={() => navigate('/seo')} className="block px-4 py-2 hover:bg-gray-200">
                  Search Engine Optimization(SEO)
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/service')} className="block px-4 py-2 hover:bg-gray-200">
                    UI/UX
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/service')} className="block px-4 py-2 hover:bg-gray-200">
                    Software Development
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/service')} className="block px-4 py-2 hover:bg-gray-200">
                    Graphic Design
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/service')} className="block px-4 py-2 hover:bg-gray-200">
                   Video Editing
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/service')} className="block px-4 py-2 hover:bg-gray-200">
                    Social Media Management
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="/blog"
                target="_blank"
              className={`${
                isScrolled ? "hover:text-indigo-600" : "text-white"
              }`}
              onClick={closeMenu}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/career"
              className={`${
                isScrolled ? "hover:text-indigo-600" : "text-white"
              }`}
              onClick={closeMenu}
            >
              Career
            </a>
          </li>
          {/* Call to action button */}
          <a
            href="tel:7905796216"
            className="inline-block px-6 py-2 bg-pink-600 text-white rounded-full"
            onClick={closeMenu}
          >
            Book a Call
          </a>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 shadow-lg">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="/us"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="/work"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200"
            onClick={closeMenu}
          >
           Work
          </a>
          <div className="relative">
  <a
    href="/service"
    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200"
    onClick={closeMenu} // Ensure the menu closes when clicked
  >
    Services
  </a>
  <button
    onClick={toggleServices}
    className="absolute ml-20 top-2 focus:outline-none"
  >
    ▼ {/* Dropdown icon */}
  </button>
  {isServicesOpen && (
    <ul className="absolute bg-white shadow-lg mt-2 rounded-md">
      <li>
        <button onClick={() => navigate('/web-development')} className="block px-4 py-2 hover:bg-gray-200">
        Website Development
        </button>
      </li>
      <li>
        <button onClick={() => navigate('/app')} className="block px-4 py-2 hover:bg-gray-200">
        App / Mobile Development
        </button>
      </li>
      <li>
        <button onClick={() => navigate('/service')} className="block px-4 py-2 hover:bg-gray-200">
        UI/UX
        </button>
      </li>
      <li>
        <button onClick={() => navigate('/seo')} className="block px-4 py-2 hover:bg-gray-200">
        SEO
        </button>
      </li>
      <li>
        <button onClick={() => navigate('/service')} className="block px-4 py-2 hover:bg-gray-200">
        Software Development
        </button>
      </li>
      <li>
        <button onClick={() => navigate('/service')} className="block px-4 py-2 hover:bg-gray-200">
        Graphic Design
        </button>
      </li>
      <li>
        <button onClick={() => navigate('/service')} className="block px-4 py-2 hover:bg-gray-200">
         Video Editing
        </button>
      </li>
      <li>
        <button onClick={() => navigate('/service')} className="block px-4 py-2 hover:bg-gray-200">
        Social Media Management
        </button>
      </li>
    </ul>
  )}
</div>

          <a
            href="/blog"
             target="_blank"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200"
            onClick={closeMenu}
          >
            Blog
          </a>
          <a
            href="/career"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200"
            onClick={closeMenu}
          >
            Career
          </a>
          <a
            href="tel:7905796216"
            className="inline-block px-6 py-2 bg-pink-600 text-white rounded-full"
            onClick={closeMenu}
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
