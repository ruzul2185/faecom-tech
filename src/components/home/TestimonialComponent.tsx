import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { REVIEW_INFO } from "../../constants/HomePage";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const TestimonialComponent = () => {
  return (
    <section>
      <div className="testimonial-bg max-w-442.5 mx-auto rounded-[50px] flex flex-col items-center h-160 justify-evenly">
        <div className="text-2xl font-medium text-white flex items-center gap-4 ">
          <HiArrowLongLeft />
          <p>TESTIMONIAL</p>
          <HiArrowLongRight />
        </div>
        <div className="text-white text-4xl lg:text-8xl font-medium">
          What our Client say
        </div>
        <div className="relative w-full sm:w-[75%]">
          {/* Left Arrow */}
          <button
            className="custom-prev hidden 2xl:flex absolute -left-15 top-1/2 -translate-y-1/2 z-10
  w-12 h-12 items-center justify-center
  rounded-full bg-transparent text-white border-2 border-white]
  shadow-lg transition-colors duration-300
  hover:bg-black hover:border-white cursor-pointer"
          >
            <HiArrowLongLeft size={22} className="text-white" />
          </button>
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 2,
              },
            }}
          >
            {REVIEW_INFO.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  name={item.name}
                  role={item.role}
                  image={item.image}
                  review={item.review}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Right Arrow */}
          <button
            className="custom-next hidden 2xl:flex absolute -right-15 top-1/2 -translate-y-1/2 z-10 
  w-12 h-12 items-center justify-center 
  rounded-full bg-white text-[#ff6041] 
  border-2 border-white shadow-lg
  transition-all duration-300
  hover:bg-transparent hover:text-white cursor-pointer"
          >
            <HiArrowLongRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponent;
