import { useRef } from "react";
import { Bookmark } from "../Bookmark";
import { FaGear } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PortfolioCarousel from "./PortfolioCarousel";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PortfolioComponent = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%", // waits longer before playing
          end: "bottom 20%",
          toggleActions: "play none none none",
          markers: false, // set true for debugging
        },
      });

      tl.from(".portfolio-text", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".portfolio-arrows",
          {
            x: 60,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".portfolio-carousel",
          {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section className="portfolio-section" ref={sectionRef}>
      <div className="rounded-2xl mx-auto w-[93%] max-w-442.5 px-5 sm:px-20 py-12 bg-[linear-gradient(to_bottom,white_50%,#05091D_50%)] flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-5 sm:flex-row">
          <div className="portfolio-text flex flex-col items-start gap-4">
            <Bookmark
              title="Portfolio"
              icon={<FaGear color="#ff6041" />}
              className="text-[#ff6041] bg-[#efeadf] gap-3"
            />
            <p className="font-medium text-3xl">
              Explore our Recent{" "}
              <span className="text-[#ff6041]">Projects</span>
            </p>
          </div>
          <div className="portfolio-arrows flex gap-5 items-center">
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
        <div className="portfolio-carousel">
          <PortfolioCarousel prevRef={prevRef} nextRef={nextRef} />
        </div>
      </div>
    </section>
  );
};

export default PortfolioComponent;
