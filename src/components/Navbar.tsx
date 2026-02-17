import { Link } from "react-router";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <>
      <nav className="sticky top-0 z-500">
        <div className="flex justify-between items-center h-18 py-2.5 sm:w-[93%] mx-auto bg-white lg:px-20 rounded-b-[20px] max-w-442.5">
          <Link to={"/"} className="m-3">
            <img src="/faecom-logo.svg" className="w-50 sm:w-70" />
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
              <a href={"/"}>Home</a>
            </li>
            <li>
              <a href={"/services"}>Services</a>
            </li>
            {/* <li>
              <Link to={"/trainings"}>Trainings</Link>
            </li> */}
            <li>
              <a href={"blogs"}>Blogs</a>
            </li>
            <li>
              <a href={"/about"}>About</a>
            </li>
            <li>
              <a href={"contact"}>Contact</a>
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
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-501 transform transition-transform duration-300 ${
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
            <Link to={"/services"} onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to={"/trainings"} onClick={() => setIsOpen(false)}>
              Trainings
            </Link>
          </li>
          <li>
            <Link to={"/blogs"} onClick={() => setIsOpen(false)}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to={"/about"} onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
