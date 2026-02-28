import { useState } from "react";
import { Bookmark } from "../components/Bookmark";
import { PrimaryButton } from "../components/Button";
import { FaGlobe, FaUsers, FaRocket, FaChevronDown } from "react-icons/fa6";
import AffiliationBanner from "../components/home/AffiliationBanner";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
          ".hero-title",
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        );

      // ================= HERO CONTENT SECTION =================
      gsap.from(".hero-image", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroContentRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".hero-stat", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroContentRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".hero-card", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroContentRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= COMPANY SECTION =================
      gsap.from(".company-image", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: companyRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".company-badge", {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: companyRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".company-bookmark", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: companyRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".company-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: companyRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".company-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: companyRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".company-tag", {
        opacity: 0,
        scale: 0.8,
        // stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: companyRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= VISION & MISSION SECTION =================
      gsap.from(".vision-bookmark", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".vision-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".vision-card", {
        opacity: 0,
        scale: 0.9,
        y: 60,
        // stagger: 0.2,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= LEADERSHIP SECTION =================
      gsap.from(".leadership-image", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leadershipRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".leadership-bookmark", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leadershipRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".leadership-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leadershipRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".leadership-content", {
        opacity: 0,
        y: 30,
        // stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leadershipRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".leadership-stat", {
        opacity: 0,
        scale: 0.8,
        // stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leadershipRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= FAQ SECTION =================
      gsap.from(".faq-bookmark", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".faq-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".faq-item", {
        opacity: 0,
        y: 30,
        // stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".faq-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container },
  );

  const faqs = [
    {
      question: "What services does FaecomTech offer?",
      answer:
        "We offer comprehensive IT solutions including software development, digital transformation consulting, cloud services, data analytics, and engineering-based technology solutions tailored for B2B organizations.",
    },
    {
      question: "Which industries does FaecomTech serve?",
      answer:
        "We primarily serve engineering-based businesses and B2B organizations across various sectors including construction, manufacturing, infrastructure, and professional services worldwide.",
    },
    {
      question: "What is FaecomTech's global presence?",
      answer:
        "We have a strong presence across the US, Canada, the UK, the Middle East, Europe, Asia and other regions, allowing us to combine global expertise with personalized local support for our clients.",
    },
    {
      question: "How does FaecomTech ensure project success?",
      answer:
        "We combine technology, strategy, and creativity with our experienced team's expertise. Our approach focuses on understanding client needs, delivering cost-effective solutions, and providing ongoing support throughout the digital transformation journey.",
    },
    {
      question:
        "What makes FaecomTech different from other IT service providers?",
      answer:
        "Our unique background in structural engineering through Faecom Engineering Pvt. Ltd. gives us deep understanding of engineering and B2B business needs. We bridge the gap between legacy industries and modern digital infrastructure with customized, scalable solutions.",
    },
  ];

  return (
    <div ref={container} className="flex flex-col items-stretch gap-15 mt-30">
      {/* ================= HERO SECTION ================= */}
      <section
        ref={heroRef}
        className="max-w-5xl mx-auto w-[93%] text-center flex flex-col gap-6.75 justify-center items-center"
      >
        {/* Top badge */}
        <div className="hero-bookmark">
          <Bookmark
            icon={<FaGlobe className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6041]" />}
            title="Your Partner in Learning & Innovation"
            className="bg-white gap-3"
          />
        </div>

        {/* Main heading */}
        <div className="hero-title text-4xl sm:text-[64px] font-medium">
          <p>Learn. Innovate. Grow.</p>
          <span className="text-[#ff6041]">Your Trusted IT Partner</span>
          <p>For Training & Technology Services</p>
        </div>

        {/* Subheading */}
        <div className="hero-description text-[14px] sm:text-[20px]/[40px] font-medium text-[#7e7e7e] max-w-226">
          <p>
            Transforming skills into success and ideas into powerful digital
            solutions.
          </p>
        </div>
      </section>

      {/* ================= HERO CONTENT GRID ================= */}
      <section
        ref={heroContentRef}
        className="mx-auto w-[93%] flex flex-col gap-12.5 max-w-442.5"
      >
        <div className="py-12.5 flex flex-col gap-9 lg:flex-row lg:justify-around lg:items-center">
          {/* Left - Image */}
          <div className="flex flex-col gap-9 lg:w-[35%]">
            <div className="hero-image rounded-3xl overflow-hidden shadow-2xl h-75 sm:h-100">
              <img
                loading="lazy"
                src="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771956080/photo-1522071820081-009f0129c71c_fmsdbf.avif"
                alt="Team working"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://res.cloudinary.com/dlvjnevcw/image/upload/v1771956080/photo-1522071820081-009f0129c71c_fmsdbf.avif";
                }}
              />
            </div>
          </div>

          {/* Center - Statistics */}
          <div className="hero-stat flex flex-col gap-9 lg:w-[25%] text-center lg:text-left">
            <div className="text-[64px] sm:text-[80px] lg:text-[100px] font-bold text-[#ff6041] leading-none">
              30
              <span className="text-[40px] sm:text-[50px] lg:text-[60px]">
                +
              </span>
            </div>
            <div className="text-[20px] sm:text-[24px] font-medium text-gray-800">
              <p>Personalization At Seems</p>
              <p>Ultimate Scale.</p>
            </div>
          </div>

          {/* Right - Content Card */}
          <div className="flex flex-col gap-9 lg:w-[35%]">
            <div className="hero-card bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-[#EFEADF]">
              <p className="text-[14px] sm:text-[16px] text-gray-600 leading-relaxed mb-4">
                IT solutions that empower businesses to thrive in fast changing
                digital world.{" "}
                <span className="underline font-medium text-gray-800">
                  over a decade
                </span>{" "}
                of experience, our team combines technology, strategy, and
                creativity to build systems that drive growth and efficiency.
              </p>
              <p className="text-[14px] sm:text-[16px] text-gray-600 leading-relaxed mb-6">
                <span className="underline font-medium text-gray-800">
                  IT solutions
                </span>{" "}
                that empower businesses to thrive in fast changing digital
                world. With over a decade of experience.
              </p>
              <a href="#vision">
                <PrimaryButton
                  title="Know More Us"
                  classname="rounded-[25px] w-full sm:w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT COMPANY SECTION ================= */}
      <section
        ref={companyRef}
        className="relative mx-auto min-w-86.25 w-[93%] max-w-442.5 rounded-[50px] py-12.5 text-white flex flex-col gap-12.5"
      >
        <div className="py-12.5 w-[90%] mx-auto flex flex-col gap-9 lg:flex-row lg:justify-around lg:items-center">
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
          {/* Left - Image with decorative elements */}
          <div className="flex flex-col gap-9 lg:w-[45%] relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#ff6041]/10 rounded-full" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFC2A7]/20 rounded-full" />
            <div className="company-image relative rounded-3xl overflow-hidden shadow-xl h-75 sm:h-100">
              <img
                loading="lazy"
                src="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771956222/photo-1600880292203-757bb62b4baf_zhuz6b.avif"
                alt="Our company"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://res.cloudinary.com/dlvjnevcw/image/upload/v1771956222/photo-1600880292203-757bb62b4baf_zhuz6b.avif";
                }}
              />
            </div>
            {/* Floating badge */}
            <div className="company-badge absolute -bottom-4 right-4 sm:right-8 bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ff6041] rounded-full flex items-center justify-center">
                  <FaGlobe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-orange-500 sm:text-lg">Global</p>
                  <p className="text-xs sm:text-sm text-gray-600">Presence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col gap-9 lg:w-[50%]">
            <div className="company-bookmark">
              <Bookmark
                icon={
                  <FaUsers className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6041]" />
                }
                title="Company Overview"
                className="bg-white text-amber-950 w-fit gap-3"
              />
            </div>
            <div className="company-heading text-[30px] font-medium sm:text-5xl">
              <p>Building Digital Excellence</p>
              <p>
                Through{" "}
                <span className="text-[#ff6041]">Engineering Heritage</span>
              </p>
            </div>
            <div className="company-text text-[14px] sm:text-[16px] lg:text-xl leading-relaxed text-gray-200 space-y-4">
              <p>
                FaecomTech, an affiliate of{" "}
                <a
                  href="https://www.faecom.com/"
                  target="_blank"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  Faecom Engineering Pvt. Ltd.
                </a>{" "}
                , builds on a strong global foundation in structural engineering
                to deliver innovative, cost-effective IT services and business
                solutions.
              </p>
              <p>
                Backed by an experienced team, we partner with leading B2B
                organizations worldwide to drive successful digital
                transformation. With a presence across the US, Canada, the UK,
                the Middle East, and beyond.
              </p>
              <p className="text-[#ff6041] font-medium">
                Our mission is to help our clients confidently embrace the
                digital future.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="company-tag flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 sm:px-4">
                <span className="w-2 h-2 bg-[#ff6041] rounded-full" />
                <span className="text-xs sm:text-sm font-medium">
                  US & Canada
                </span>
              </div>
              <div className="company-tag flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 sm:px-4">
                <span className="w-2 h-2 bg-[#ff6041] rounded-full" />
                <span className="text-xs sm:text-sm font-medium">UK</span>
              </div>
              <div className="company-tag flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 sm:px-4">
                <span className="w-2 h-2 bg-[#ff6041] rounded-full" />
                <span className="text-xs sm:text-sm font-medium">
                  Middle East
                </span>
              </div>
              <div className="company-tag flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 sm:px-4">
                <span className="w-2 h-2 bg-[#ff6041] rounded-full" />
                <span className="text-xs sm:text-sm font-medium">Europe</span>
              </div>
              <div className="company-tag flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 sm:px-4">
                <span className="w-2 h-2 bg-[#ff6041] rounded-full" />
                <span className="text-xs sm:text-sm font-medium">Asia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION SECTION ================= */}
      <section
        ref={visionRef}
        id="vision"
        className="max-w-442.5 mx-auto w-[93%]  text-center flex flex-col gap-6.75 justify-center items-center"
      >
        <div className="vision-bookmark">
          <Bookmark
            icon={<FaRocket className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6041]" />}
            title="OUR PURPOSE"
            className="bg-white gap-3"
          />
        </div>
        <div className="vision-heading text-4xl sm:text-[64px] font-medium">
          <p>
            What Drives Us <span className="text-[#ff6041]">Forward</span>
          </p>
        </div>
      </section>

      <section className="mx-auto w-[93%] max-w-442.5 flex flex-col gap-12.5">
        <div className="py-12.5 flex flex-col gap-9 sm:grid sm:grid-cols-2">
          {/* Vision Card */}
          <div className="vision-card group relative overflow-hidden rounded-3xl bg-[#ff6041] p-6 sm:p-8 lg:p-10 text-white transition-all duration-500 hover:shadow-2xl border border-white/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 backdrop-blur-sm">
                <FaGlobe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-[24px] sm:text-[30px] lg:text-4xl font-bold mb-3 sm:mb-4">
                Our Vision
              </h3>
              <p className="text-[14px] sm:text-[16px] lg:text-lg leading-relaxed text-white/90">
                To be a global technology and digital leader, which companies
                can count on to succeed in a fast-changing digital era through a
                coming together of sector expertise, speed, and innovation.
              </p>
              <div className="mt-6 sm:mt-8 flex gap-2">
                <span className="inline-block w-3 h-3 bg-white rounded-full opacity-60" />
                <span className="inline-block w-3 h-3 bg-white rounded-full opacity-40" />
                <span className="inline-block w-3 h-3 bg-white rounded-full opacity-20" />
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="vision-card group relative overflow-hidden rounded-3xl bg-[#EFEADF] p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:shadow-2xl border border-[#ff6041]/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6041]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFC2A7]/30 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#ff6041] rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <FaRocket className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-[24px] sm:text-[30px] lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
                Our Mission
              </h3>
              <p className="text-[14px] sm:text-[16px] lg:text-lg leading-relaxed text-gray-700">
                We at FaecomTech are committed to empowering businesses
                especially B2B and engineering-based businesses, with efficient,
                cost-effective, and scalable IT solutions. We aim to close the
                gap between legacy industries and emerging digital
                infrastructure through customized service, global outreach, and
                cutting-edge technology.
              </p>
              <div className="mt-6 sm:mt-8 flex gap-2">
                <span className="inline-block w-3 h-3 bg-[#ff6041] rounded-full" />
                <span className="inline-block w-3 h-3 bg-[#ff6041]/60 rounded-full" />
                <span className="inline-block w-3 h-3 bg-[#ff6041]/30 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER / LEADERSHIP SECTION ================= */}
      <section
        ref={leadershipRef}
        className="mx-auto w-[93%] max-w-442.5 flex flex-col gap-12.5"
      >
        <div className="py-12.5 flex flex-col gap-9 lg:flex-row lg:justify-around lg:items-center">
          {/* Left - Founder Image with animations */}
          <div className="flex flex-col gap-9 lg:w-[40%] relative group">
            {/* Animated decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#ff6041]/20 rounded-full animate-pulse" />
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFC2A7]/30 rounded-full animate-bounce"
              style={{ animationDuration: "3s" }}
            />

            {/* Main image container with hover effect */}
            <div className="leadership-image relative rounded-3xl overflow-hidden shadow-2xl h-87.5 sm:h-112.5 group-hover:shadow-[0_20px_60px_-15px_rgba(255,96,65,0.3)] transition-all duration-700">
              <picture className="w-full h-full group">
                <source
                  srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771956383/ceo_wrs43f.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771956386/ceo_edre9r.webp"
                  type="image/webp"
                />
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771956384/ceo_ppyi7h.png"
                  alt="Founder"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://res.cloudinary.com/dlvjnevcw/image/upload/v1771956288/photo-1560250097-0b93528c311a_gvxb3p.avif";
                  }}
                />
              </picture>
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-t from-[#ff6041]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating quote badge */}
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <p className="text-[#ff6041] text-sm font-medium italic">
                    "Knowledge meets opportunity"
                  </p>
                </div>
              </div>
            </div>

            {/* Animated corner accents */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-[#ff6041] rounded-tr-xl opacity-60" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-[#ff6041] rounded-bl-xl opacity-60" />
          </div>

          {/* Right - Founder Content with staggered animations */}
          <div className="flex flex-col gap-6 lg:w-[55%] ">
            <div className="leadership-bookmark">
              <Bookmark
                icon={
                  <span className="text-[#ff6041] font-bold text-sm">CEO</span>
                }
                title="LEADERSHIP VISION"
                className="bg-white w-fit animate-fade-in gap-3"
              />
            </div>

            <div className="leadership-heading text-[30px] font-medium sm:text-5xl animate-slide-up">
              <p>Bridging The Gap</p>
              <p>
                Between <span className="text-[#ff6041]">Education</span> &{" "}
                <span className="text-[#FFC2A7]">Employability</span>
              </p>
            </div>

            {/* Animated content blocks */}
            <div className="leadership-content space-y-6">
              <div className="group p-4 rounded-2xl bg-white border border-[#EFEADF] shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#ff6041]/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ff6041]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#ff6041] transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-[#ff6041] group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Vision</h4>
                    <p className="text-[14px] sm:text-[16px] text-gray-600 leading-relaxed">
                      At FaecomTech, our vision is to create a platform where
                      knowledge meets opportunity. As the IT industry evolves
                      rapidly, we focus on developing professionals who are
                      technically skilled, adaptable, and future ready.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-4 rounded-2xl bg-white border border-[#EFEADF] shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#ff6041]/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ff6041]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#ff6041] transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-[#ff6041] group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Leadership Experience
                    </h4>
                    <p className="text-[14px] sm:text-[16px] text-gray-600 leading-relaxed">
                      With extensive experience in technical training, ERP
                      implementations, and web and app innovation, our
                      leadership understands the impact of practical guidance
                      and real-world exposure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated stats */}
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="leadership-stat flex items-center gap-3 bg-[#EFEADF] rounded-2xl px-5 py-3 border border-[#EFEADF]/50 hover:bg-[#ff6041] hover:text-white transition-all duration-300 group cursor-default">
                <span className="text-2xl font-bold text-[#ff6041] group-hover:text-white">
                  10+
                </span>
                <span className="text-sm font-medium">Years Experience</span>
              </div>
              <div className="leadership-stat flex items-center gap-3 bg-[#EFEADF] rounded-2xl px-5 py-3 border border-[#EFEADF]/50 hover:bg-[#ff6041] hover:text-white transition-all duration-300 group cursor-default">
                <span className="text-2xl font-bold text-[#ff6041] group-hover:text-white">
                  500+
                </span>
                <span className="text-sm font-medium">
                  Professionals Trained
                </span>
              </div>
              <div className="leadership-stat flex items-center gap-3 bg-[#EFEADF] rounded-2xl px-5 py-3 border border-[#EFEADF]/50 hover:bg-[#ff6041] hover:text-white transition-all duration-300 group cursor-default">
                <span className="text-2xl font-bold text-[#ff6041] group-hover:text-white">
                  50+
                </span>
                <span className="text-sm font-medium">ERP Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section
        ref={faqRef}
        className="relative mx-auto min-w-86.25 w-[93%] max-w-442.5 rounded-[50px] py-12.5 text-white flex flex-col gap-12.5"
      >
        <div className="py-12.5 w-[90%] mx-auto flex flex-col gap-9">
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
          <div className="text-center">
            <div className="faq-bookmark">
              <Bookmark
                icon={
                  <span className="text-[#ff6041] font-bold text-sm">FAQ</span>
                }
                title="FREQUENTLY ASKED QUESTIONS"
                className="bg-white/10 mx-auto w-fit border border-white/20 gap-3"
              />
            </div>
            <div className="faq-heading text-[30px] font-medium sm:text-5xl mt-6">
              <p>
                Got Questions?{" "}
                <span className="text-[#ff6041]">We Have Answers</span>
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto w-full space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item rounded-2xl overflow-hidden transition-all duration-300 ${
                  openFaq === index
                    ? "bg-[#ff6041]"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left"
                >
                  <span className="text-[14px] sm:text-[16px] lg:text-lg font-medium pr-4 text-white">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300 ${
                      openFaq === index
                        ? "rotate-180 text-white"
                        : "text-[#ff6041]"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 text-[14px] sm:text-[16px] text-white/90 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="faq-cta text-center mt-8 sm:mt-12">
            <p className="text-white/60 text-[14px] sm:text-[16px] mb-4">
              Still have questions?
            </p>
            <a href="/contact">
              <PrimaryButton
                title="Contact Us"
                classname="rounded-[25px] mx-auto"
              />
            </a>
          </div>
        </div>
      </section>

      <AffiliationBanner />
    </div>
  );
};

export default AboutUs;
