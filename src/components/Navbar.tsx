import { Link } from "react-router";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="">
        <div className="flex justify-between items-center h-18 py-2.5 sm:w-[93%] mx-auto bg-white lg:px-20 rounded-b-[20px]">
          <Link to={"/"} className="m-3">
            <img src="logo.png" className="w-50 sm:w-78" />
          </Link>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <RiMenu3Line
              className="size-8 m-3 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-between text-[20px] font-medium lg:px-12.5 lg:py-2.5 xl:gap-10">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"blogs"}>Blogs</Link>
            </li>
            <li>
              <Link to={"contacts"}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-4">
          <RiCloseLine
            className="size-7 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col gap-6 text-lg font-medium px-6">
          <li>
            <Link to={"/"} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to={"/services"} onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to={"/blogs"} onClick={() => setIsOpen(false)}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to={"/contacts"} onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
