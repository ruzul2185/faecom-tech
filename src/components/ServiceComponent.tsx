import { FaGear } from "react-icons/fa6";
import { Bookmark } from "./Bookmark";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ServiceCarousel from "./ServiceCarousel";
import { useRef } from "react";

const ServiceComponent = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  return (
    <section>
      <div className="bg-white mx-auto min-w-86.25 w-full rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5">
        <div>
          <div className="flex items-center justify-between sm:gap-5 rounded-[20px] p-1">
            <Bookmark
              icon={<FaGear />}
              title="Explore Our Services"
              className="bg-[#efeadf] text-[#ff6041] gap-3"
            />
          </div>
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center sm:mt-5">
            <div className="flex flex-col xl:flex-row">
              <p className="text-[30px] font-bold sm:text-5xl/normal max-w-135.5">
                Transforming Vision Into Digital Systems
              </p>
              <p className="text-[16px] text-[#534f5a] font-medium sm:text-xl/relaxed max-w-2xl mt-4">
                Beyond delivering enterprise-grade digital solutions, we empower
                teams with the knowledge and technical training needed to
                sustain innovation, ensuring long-term technological
                independence and growth.
              </p>
            </div>

            <div className="flex gap-5">
              <div
                ref={prevRef}
                className="inline-flex justify-center items-center rounded-full size-12.5 bg-white border border-[#d9d9d9] hover:bg-[#ff6041] cursor-pointer hover:text-white transition-colors duration-200 ease-in-out"
              >
                <IoIosArrowBack className="size-5" />
              </div>
              <div
                ref={nextRef}
                className="inline-flex justify-center items-center rounded-full size-12.5 bg-[#FF6041] border-[#FF6000] hover:bg-black cursor-pointer transition-colors duration-200 ease-in-out"
              >
                <IoIosArrowForward className="size-5" color="white" />
              </div>
            </div>
          </div>
        </div>
        <ServiceCarousel prevRef={prevRef} nextRef={nextRef} />
      </div>
    </section>
  );
};

export default ServiceComponent;
