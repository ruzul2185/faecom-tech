import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const Top = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 z-50  cursor-pointer
        bg-[#ff6041] text-white px-6 py-6 rounded-full
        transition-all duration-300 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}
      `}
    >
      <FaArrowUp color="white"/>
    </button>
  );
};

export default Top;
