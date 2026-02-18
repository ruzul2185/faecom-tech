import { Swiper, SwiperSlide } from "swiper/react";
import PortfolioCard from "./PortfolioCard";
import { PORTFOLIO_INFO } from "../../constants/HomePage";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

interface PortfolioCarouselProps {
  prevRef: React.RefObject<HTMLDivElement | null>;
  nextRef: React.RefObject<HTMLDivElement | null>;
}

const PortfolioCarousel = ({ prevRef, nextRef }: PortfolioCarouselProps) => {
  return (
    <div className="portfolioSwiper">
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
          el: ".custom-pagination-portfolio",
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
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
        }}
      >
        {[...PORTFOLIO_INFO, ...PORTFOLIO_INFO].map((item, index) => (
          <SwiperSlide key={index}>
            <PortfolioCard
              title={item.title}
              backgroundImage={item.backgroundImage}
              link={item.link}
              service={item.sevice}
              location={item.location}
              overview={item.overview}
              result={item.result}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination-portfolio mt-6 flex justify-center"></div>
    </div>
  );
};

export default PortfolioCarousel;
