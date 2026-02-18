import { Link } from "react-router";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import Dropdown, { type DropdownItem } from "./Dropdown";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const services: DropdownItem[] = [
    { name: "Web Development", path: "/web-development" },
    { name: "Software Development", path: "/software-development" },
    { name: "Digital Marketing", path: "/digital-marketing" },
    { name: "Zoho Services", path: "/zoho-services" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50">
        <div className="flex justify-between items-center h-18 py-2.5 sm:w-[93%] mx-auto bg-white lg:px-20 rounded-b-[20px] max-w-442.5">
          <Link to="/" className="m-3">
            <img src="/faecom-logo.svg" className="w-40 sm:w-52" />
          </Link>

          {/* Mobile Icon */}
          <div className="md:hidden">
            <RiMenu3Line
              className="size-8 m-3 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center text-[18px] font-medium gap-8">
            <li>
              <Link to="/">Home</Link>
            </li>

            <Dropdown label="Services" items={services} />

            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
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
        <div className="flex justify-end p-4">
          <RiCloseLine
            className="size-7 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <ul className="flex flex-col gap-6 text-lg font-medium px-6">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>

          <Dropdown
            label="Services"
            items={services}
            isMobile
            closeSidebar={() => setIsOpen(false)}
          />

          <li>
            <Link to="/blogs" onClick={() => setIsOpen(false)}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
