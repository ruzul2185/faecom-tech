
import { Bookmark } from "../components/Bookmark";
import { PrimaryButton, SecondaryButton } from "../components/Button";
import KeywordBanner from "../components/home/KeywordBanner";
import NewsLetterComponent from "../components/home/NewsLetterComponent";
import PortfolioComponent from "../components/home/PortfolioComponent";
import TestimonialComponent from "../components/home/TestimonialComponent";
import TrainingComponent from "../components/home/TrainingComponent";
import InfiniteCarousel from "../components/InfiniteCarousel";
import ServiceComponent from "../components/ServiceComponent";
import StatCard from "../components/StatCard";
import { STATISTICS_CARD_INFO } from "../constants/HomePage";
import GalleryComponent from "../components/home/GalleryComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ================= HERO TIMELINE =================
      const tl = gsap.timeline();

      tl.from(".hero-bookmark", {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".hero-heading p, .hero-heading span",
          {
            y: 60,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".hero-subtext",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-buttons a",
          {
            y: 30,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.5",
        );

      // ================= GENERAL SECTIONS =================
      gsap.utils.toArray<HTMLElement>(".section-animate").forEach((section) => {
        if (section.classList.contains("business-section")) return;

        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // ================= BUSINESS SECTION =================

      // Left text comes from LEFT
      gsap.from(".business-left", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".business-section",
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });

      // Button comes from RIGHT
      gsap.from(".business-btn", {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".business-section",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Stats cards stagger from bottom
      gsap.from(".stat-card", {
        opacity: 0,
        y: 60,
        // stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-wrapper",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Right text block comes from RIGHT
      gsap.from(".business-right", {
        opacity: 0,
        x: 120,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-wrapper",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container },
  );

  return (
    // Main container wrapper
    <div ref={container} className="flex flex-col items-stretch gap-30 mt-30">
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-5xl mx-auto text-center flex flex-col gap-6.75 justify-center items-center">
        {/* Top badge / label */}
        <div className="hero-bookmark">
          <Bookmark
            iconSrc="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771953301/Sparkles_dlnthx.svg"
            title="Leading Tech, Education and Solutions"
            className="bg-white gap-3"
          />
        </div>
        {/* Main Heading */}
        <div className="hero-heading text-4xl sm:text-[64px] font-medium">
          <p>Engineering Reliable Software</p> <span>Delivering</span>{" "}
          <span className="text-[#ff6041]">Global</span>{" "}
          <span className="text-[#ffa077]">Trust</span>
        </div>
        {/* Subheading / Description */}
        <div className="hero-subtext text-[14px] sm:text-[20px]/[40px] font-medium text-[#7e7e7e] line max-w-226 w-[93%]">
          <p>
            We transform complex challenges into reliable digital
            infrastructures while delivering practical, industry-aligned
            training that equips individuals and teams to innovate with
            confidence.
          </p>
        </div>
        {/* Call-To-Action Buttons */}
        <div className="hero-buttons flex flex-col sm:flex-row justify-between gap-5 sm:gap-16.75">
          <a href="/services">
            <PrimaryButton title="Explore" classname="rounded-[25px]" />
          </a>
          <a href="/contact">
            <SecondaryButton title="Let's talk" classname="rounded-[25px]" />
          </a>
        </div>
      </section>

      <div className="section-animate">
        <InfiniteCarousel className="bg-white" />
      </div>

      <ServiceComponent />

      {/* ================= SECOND SECTION (CAROUSEL + INFO) ================= */}
      <section className="section-animate business-section relative mx-auto min-w-86.25 w-[93%] rounded-[50px] py-12.5 text-white flex flex-col gap-12.5 max-w-442.5 overflow-hidden">
        {/* Background image using <picture> for AVIF/WebP/PNG */}
        <picture className="absolute inset-0 -z-10 w-full h-full">
          <source
            srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771951641/bg_nqb1al.avif"
            type="image/avif"
          />
          <source
            srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771951642/bg_j4qvnl.webp"
            type="image/webp"
          />
          <img
            src="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771952156/bg_d1vgqz.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </picture>

        {/* Infinite scrolling carousel component */}
        <div className="section-animate">
          <InfiniteCarousel className="bg-[#d9d9d9]/13 z-10" />
        </div>

        {/* Business Integration Content */}
        <div className="py-12.5 w-[90%] mx-auto flex flex-col gap-9 sm:flex-row sm:justify-around sm:items-center z-10">
          {/* Text Content */}
          <div className="business-left flex flex-col gap-9 md:w-[60%]">
            <div className="text-[30px] font-medium sm:text-5xl">
              <p>Build, Optimize & Accelerate</p>
              <p>your Growth</p>
            </div>
            <div className="text-[14px] sm:text-2xl font-medium">
              <p>
                We design smart digital solutions that streamline operations,
                enhance performance, and drive measurable business growth
                through cutting-edge technology.
              </p>
            </div>
          </div>
          {/* CTA Button */}
          <a href="/contact" className="business-btn">
            <PrimaryButton title="Integrate now" classname="rounded-[25px]" />
          </a>
        </div>

        {/* Statistics + Supporting Content */}
        <div className="stats-wrapper py-12.5 w-[90%] mx-auto flex flex-col gap-9 lg:flex-row sm:justify-around sm:items-center z-10">
          {/* Statistics Cards Grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {STATISTICS_CARD_INFO.map((item, index) => (
              <div key={index} className="stat-card">
                <StatCard
                  key={index}
                  title={item.title}
                  paragraph={item.paragraph}
                />
              </div>
            ))}
          </div>
          {/* Right-side Text Content */}
          <div className="business-right flex flex-col gap-9 md:w-[60%] text-right">
            <div className="text-[30px] font-medium sm:text-5xl">
              <p>Code Innovation. Create Impact.</p>
              <p>Deliver Results.</p>
            </div>
            <div className="text-[14px] sm:text-2xl font-medium">
              <p>
                Leverage modern technology, automation, and intelligent systems
                to future-proof your business and stay ahead of the competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-animate">
        <TrainingComponent />
      </div>

      <div className="section-animate">
        <KeywordBanner />
      </div>

      <PortfolioComponent />

      {/* <BlogComponent /> */}

      <div className="section-animate">
        <TestimonialComponent />
      </div>

      <div className="section-animate">
        <GalleryComponent
          galleryConfig={{
            mediaAssets: [{ tag: "gallery" }],
          }}
        />
      </div>

      <div className="section-animate">
        <NewsLetterComponent />
      </div>
    </div>
  );
};

export default HomePage;
