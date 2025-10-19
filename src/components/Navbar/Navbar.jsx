import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "about", label: "About", path: "/" },
    { id: "skills", label: "Skills", path: "/skills" },
    { id: "experience", label: "Experience", path: "/experience" },
    { id: "work", label: "Projects", path: "/projects" },
    { id: "education", label: "Education", path: "/education" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Pratyush</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Vishwakarma</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu - horizontal */}
        <ul className="hidden md:flex flex-row space-x-8 items-center text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                location.pathname === item.path ? "text-[#8245ec]" : ""
              }`}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Social Icons - desktop */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Pratyushvishwakarma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/pratyush-vishwakarma/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu - vertical */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-blur-lg z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  location.pathname === item.path ? "text-[#8245ec]" : ""
                }`}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-center w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {/* Mobile Social Icons */}
            <div className="flex space-x-4 mt-2">
              <a
                href="https://github.com/codingmastr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
