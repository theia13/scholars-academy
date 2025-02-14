import { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-20 text-white flex items-center justify-between px-10 z-50 bg-[#B1040E]">
      <Link to="/" className="text-2xl font-bold">
        Scholars Academy
      </Link>

      <ul className="hidden md:flex space-x-6">
        <li>
          <Link to="/gallery" className="relative group">
            Gallery
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link to="/academics" className="relative group">
            Academics
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link to="/admissions" className="relative group">
            Admissions
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link to="/" className="relative group">
            About
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        <CiSearch className="text-2xl cursor-pointer" />

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      <div
        className={`fixed top-20 right-0 w-2/3 bg-[#B1040E] text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <ul className="flex flex-col space-y-4 p-6">
          <li>
            <Link to="/gallery" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/academics" onClick={() => setIsOpen(false)}>
              Academics
            </Link>
          </li>
          <li>
            <Link to="/admissions" onClick={() => setIsOpen(false)}>
              Admissions
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
