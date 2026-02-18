import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";

export interface DropdownItem {
  name: string;
  path: string;
}

interface DropdownProps {
  label: string;
  path: string; // main clickable path
  items: DropdownItem[];
  isMobile?: boolean;
  closeSidebar?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  path,
  items,
  isMobile = false,
  closeSidebar,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  // ================= MOBILE VERSION =================
  if (isMobile) {
    return (
      <li>
        <div className="flex items-center justify-between w-full">
          {/* Main Clickable Label */}
          <a href={path} onClick={closeSidebar} className="flex-1 text-left">
            {label}
          </a>

          {/* Toggle Button */}
          <button onClick={() => setOpen((prev) => !prev)} type="button">
            <RiArrowDownSLine
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Dropdown Items */}
        <ul
          className={`transition-all duration-300 ${
            open ? "max-h-screen mt-3" : "max-h-0 overflow-hidden"
          }`}
        >
          {items.map((item) => (
            <li key={item.path} className="ml-4 py-2">
              <a href={item.path} onClick={closeSidebar}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  // ================= DESKTOP VERSION =================
  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center gap-1">
        {/* Main Clickable Label */}
        <a href={path}>{label}</a>

        {/* Toggle Arrow */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((prev) => !prev);
          }}
        >
          <RiArrowDownSLine
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      <ul
        className={`absolute left-0 mt-4 w-56 bg-white shadow-xl rounded-xl py-3 text-base transition-all duration-300 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-3"
        }`}
      >
        {items.map((item) => (
          <li key={item.path} className="px-5 py-2 hover:bg-gray-100">
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Dropdown;
