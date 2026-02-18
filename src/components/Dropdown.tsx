import { Link } from "react-router";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";

export interface DropdownItem {
  name: string;
  path: string;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
  isMobile?: boolean;
  closeSidebar?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  items,
  isMobile = false,
  closeSidebar,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  if (isMobile) {
    return (
      <li>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center justify-between w-full"
          type="button"
        >
          {label}
          <RiArrowDownSLine
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        <ul
          className={`transition-all duration-300 ${
            open ? "max-h-screen mt-3" : "max-h-0 overflow-hidden"
          }`}
        >
          {items.map((item) => (
            <li key={item.path} className="ml-4 py-2">
              <Link to={item.path} onClick={closeSidebar}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  // Desktop Version
  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button type="button" className="flex items-center gap-1">
        {label}
        <RiArrowDownSLine
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <ul
        className={`absolute left-0 mt-4 w-56 bg-white shadow-xl rounded-xl py-3 text-base transition-all duration-300 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-3"
        }`}
      >
        {items.map((item) => (
          <li key={item.path} className="px-5 py-2 hover:bg-gray-100">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Dropdown;
