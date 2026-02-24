import { FaGear } from "react-icons/fa6";
import { Bookmark } from "./Bookmark";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ServiceCarousel from "./ServiceCarousel";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ServiceComponent = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current, // ✅ use ref instead of string
          start: "top 80%",
          toggleActions: "play none none none",
          once: true, // optional: ensures it runs only once
        },
      });

      tl.from(".service-bookmark", {
        y: -40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".service-heading",
          {
            x: -80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".service-text",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ".service-arrows",
          {
            x: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .from(
          ".service-carousel",
          {
            y: 80,
            scale: 0.98,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6",
        );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="service-section">
      <div className="bg-white mx-auto min-w-86.25 w-full rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5">
        <div>
          <div className="service-bookmark flex items-center justify-between sm:gap-5 rounded-[20px] p-1">
            <Bookmark
              icon={<FaGear />}
              title="Explore Our Services"
              className="bg-[#efeadf] text-[#ff6041] gap-3"
            />
          </div>
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center sm:mt-5">
            <div className="flex flex-col xl:flex-row">
              <p className="service-heading text-[30px] font-bold sm:text-5xl/normal max-w-135.5">
                Transforming Vision Into Digital Systems
              </p>
              <p className="service-text text-[16px] text-[#534f5a] font-medium sm:text-xl/relaxed max-w-2xl mt-4">
                Beyond delivering enterprise-grade digital solutions, we empower
                teams with the knowledge and technical training needed to
                sustain innovation, ensuring long-term technological
                independence and growth.
              </p>
            </div>

            <div className="service-arrows flex gap-5">
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
        <div className="service-carousel">
          <ServiceCarousel prevRef={prevRef} nextRef={nextRef} />
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
