import { SERVICE_CARD_INFO } from "../constants/HomePage";
import ServiceCard from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

interface Props {
  prevRef: React.RefObject<HTMLDivElement | null>;
  nextRef: React.RefObject<HTMLDivElement | null>;
}

const ServiceCarousel = ({ prevRef, nextRef }: Props) => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.navigation.prevEl = prevRef.current;
      swiperRef.current.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.update();
    }
  }, [prevRef, nextRef]);

  return (
    <div className="relative serviceSwiper">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={50}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          el: ".custom-pagination-service",
          clickable: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onBeforeInit={(swiper) => {
          // Fix for custom navigation refs
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation!.prevEl = prevRef.current;
            swiper.params.navigation!.nextEl = nextRef.current;
          }
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          730: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
          1800: {
            slidesPerView: 5,
          },
        }}
      >
        {SERVICE_CARD_INFO.map((item, index) => (
          <SwiperSlide key={index}>
            <ServiceCard
              key={index}
              title={item.title}
              desc={item.desc}
              link={item.link}
              svgLink={item.svgLink}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination-service mt-6 flex justify-center"></div>
    </div>
  );
};

export default ServiceCarousel;
