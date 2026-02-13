import { Link } from "react-router";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="">
      <div className="flex justify-between items-center h-18 py-2.5 sm:w-[93%] mx-auto bg-white lg:px-20 rounded-b-[20px]">
        <Link to={"/"} className="m-3">
          <img src="logo.png" className="w-50 sm:w-78" />
        </Link>

        <div className="md:hidden">
          <RiMenu3Line className="size-8 m-3" />
        </div>

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
  );
};

export default Navbar;
