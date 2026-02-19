import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { SERVICES, TRAININGS } from "../constants/Navbar";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50">
        <div className="flex justify-between items-center h-18 py-2.5 sm:w-[93%] mx-auto bg-white lg:px-20 rounded-b-[20px] max-w-442.5">
          <a href="/" className="m-3">
            <img src="/logo.png" className="w-40 sm:w-52" />
          </a>

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
              <a href="/">Home</a>
            </li>

            <Dropdown label="Services" path="/services" items={SERVICES} />

            <Dropdown label="Trainings" path="/trainings" items={TRAININGS} />
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
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
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 
  transform transition-transform duration-300 overflow-y-auto ${
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
            <a href="/" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>

          <Dropdown
            label="Services"
            path="/services"
            items={SERVICES}
            isMobile
            closeSidebar={() => setIsOpen(false)}
          />

          <Dropdown
            label="Trainings"
            path="/trainings"
            items={TRAININGS}
            isMobile
            closeSidebar={() => setIsOpen(false)}
          />

          <li>
            <a href="/blogs" onClick={() => setIsOpen(false)}>
              Blogs
            </a>
          </li>
          <li>
            <a href="/about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
