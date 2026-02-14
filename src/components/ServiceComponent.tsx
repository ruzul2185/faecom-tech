import { FaGear } from "react-icons/fa6";
import { Bookmark } from "./Bookmark";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ServiceCarousel from "./ServiceCarousel";
import { useState } from "react";
import { SERVICE_CARD_INFO } from "../constants/HomePage";

const ServiceComponent = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const next = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % SERVICE_CARD_INFO.length);
  };

  const prev = () => {
    setImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + SERVICE_CARD_INFO.length) % SERVICE_CARD_INFO.length,
    );
  };

  return (
    <section>
      <div className="bg-white mx-auto min-w-86.25 w-full rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16">
        <div>
          <div className="flex items-center justify-between sm:gap-5 rounded-[20px] p-1">
            <Bookmark
              icon={<FaGear />}
              title="Explore Our Services"
              className="bg-[#d9d9d9] text-[#ff6041]"
            />
          </div>
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center sm:mt-5">
            <p className="text-[30px] font-medium sm:text-5xl/normal max-w-135.5">
              From Thought to Technology
            </p>
            <p className="text-[14px] text-[#534f5a] font-medium sm:text-xl/relaxed max-w-lg">
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
              elusmod.
            </p>
            <div className="flex gap-5">
              <div className="inline-flex justify-center items-center rounded-full size-12.5 bg-white border border-[#d9d9d9] hover:bg-[#ff6041] cursor-pointer hover:text-white transition-colors duration-200 ease-in-out">
                <IoIosArrowBack className="size-5" onClick={prev} />
              </div>
              <div className="inline-flex justify-center items-center rounded-full size-12.5 bg-[#FF6041] border-[#FF6000] hover:bg-black cursor-pointer transition-colors duration-200 ease-in-out">
                <IoIosArrowForward
                  className="size-5"
                  color="white"
                  onClick={next}
                />
              </div>
            </div>
          </div>
        </div>
        <ServiceCarousel imageIndex={imageIndex} />
      </div>
    </section>
  );
};

export default ServiceComponent;
