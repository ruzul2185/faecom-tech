import { Swiper, SwiperSlide } from "swiper/react";
import { TRAINING_INFO } from "../../constants/HomePage";
import TrainingCard from "./TrainingCard";
import { Autoplay } from "swiper/modules";

const TrainingComponent = () => {
  return (
    <section className="w-full relative">
      <div className="w-[93%] max-w-442.5 mx-auto rounded-[20px] py-7.5 flex flex-col items-center gap-15 relative z-10">
        {/* Background image with AVIF/WebP/PNG fallback */}
        <picture className="absolute inset-0 -z-10 w-full h-full">
          <source
            srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771952313/hero-bg_jykw27.avif"
            type="image/avif"
          />
          <source
            srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771952315/hero-bg_s8ctrj.webp"
            type="image/webp"
          />
          <img
            src="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771952314/hero-bg_ktb0ge.png"
            alt="Hero Background"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </picture>
        <p className="text-white text-center text-2xl md:text-4xl font-medium py-20 px-5">
          Training that will give you head start
        </p>
        <div className="w-full sm:w-[75%]">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={50}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 2,
              },
            }}
          >
            {TRAINING_INFO.map((item, index) => (
              <SwiperSlide key={index}>
                <TrainingCard
                  title={item.title}
                  backgroundImage={item.backgroundImage}
                  backgroundImageWebp={item.backgroundImageWebp}
                  backgroundImageAvif={item.backgroundImageAvif}
                  link={item.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrainingComponent;
