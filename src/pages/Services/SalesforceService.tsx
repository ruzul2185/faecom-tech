import { Bookmark } from "../../components/Bookmark";
import {
  FaCloud,
  FaServer,
  FaCogs,
  FaRocket,
  FaShieldAlt,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { SALESFORCE_SERVICE_DATA } from "../../constants/ServicesDetails/SalesforceConstants";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { BiSolidBusiness } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import { PrimaryButton } from "../../components/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const SalesforceService = () => {
  const container = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const servicesFeaturesRef = useRef<HTMLDivElement>(null);
  const coreFeaturesRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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
          ".hero-heading",
          {
            y: 60,
            opacity: 0,
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
          ".hero-button",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.5",
        );

      // ================= MAIN CONTENT SECTION =================
      gsap.from(".main-left", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainContentRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".main-right", {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainContentRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".main-bookmark", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainContentRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".main-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainContentRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".main-feature", {
        opacity: 0,
        y: 30,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainContentRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // ================= SERVICES FEATURES SECTION =================
      gsap.from(".services-bookmark", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesFeaturesRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".services-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesFeaturesRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".services-subtext", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesFeaturesRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".services-card", {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesFeaturesRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // ================= CORE FEATURES SECTION =================
      gsap.from(".core-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: coreFeaturesRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".core-subtext", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: coreFeaturesRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".core-feature-card", {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: coreFeaturesRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // ================= SOLUTIONS SECTION =================
      gsap.from(".solutions-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: solutionsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".solutions-subtext", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: solutionsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".solutions-left", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: solutionsRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".solutions-right", {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: solutionsRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= TECH STACK SECTION =================
      gsap.from(".tech-stack-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: techStackRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".tech-stack-subtext", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: techStackRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".tech-stack-card", {
        opacity: 0,
        y: 60,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: techStackRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= PROCESS SECTION =================
      gsap.from(".process-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".process-subtext", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".process-step", {
        opacity: 0,
        scale: 0.8,
        y: 60,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= BENEFITS SECTION =================
      gsap.from(".benefits-bookmark", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".benefits-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".benefits-subtext", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".benefit-card", {
        opacity: 0,
        y: 60,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= TECHNOLOGIES SECTION =================
      gsap.from(".tech-bookmark", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".tech-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".tech-subtext", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".tech-tag", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= CTA SECTION =================
      gsap.from(".cta-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".cta-subtext", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".cta-button", {
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container },
  );
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "cloud":
        return <FaCloud />;
      case "server":
        return <FaServer />;
      case "cogs":
        return <FaCogs />;
      case "rocket":
        return <FaRocket />;
      case "shield":
        return <FaShieldAlt />;
      case "chart-line":
        return <FaChartLine />;
      default:
        return <FaCloud />;
    }
  };

  return (
    <div ref={container} className="min-h-screen ">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="mx-auto min-w-86.25 w-full rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5 items-center my-20"
      >
        <div className="hero-bookmark">
          <Bookmark
            icon={<BiSolidBusiness />}
            title="Salesforce Services"
            className="bg-white text-[#ff6041] mx-auto w-fit gap-3"
          />
        </div>
        <h1 className="hero-heading text-4xl md:text-6xl text-center font-bold text-gray-900 mt-8 mb-6">
          {SALESFORCE_SERVICE_DATA.hero.title}
        </h1>
        <p className="hero-subtext text-xl text-center text-gray-600 max-w-442.5 mx-auto">
          {SALESFORCE_SERVICE_DATA.hero.subtitle}
        </p>
        <p className="hero-subtext text-xl text-center text-gray-600 max-w-442.5 mx-auto">
          {SALESFORCE_SERVICE_DATA.hero.description}
        </p>
        <a href="/contact" className="hero-button">
          <PrimaryButton title="Get Started" classname="rounded-[25px]" />
        </a>
      </section>

      {/* Main Content Section */}
      <section ref={mainContentRef} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="main-left relative">
              <picture>
                <source
                  srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771569341/salesforce_v06hj0.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771569345/salesforce_peqfgg.webp"
                  type="image/webp"
                />
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771569344/salesforce_e9sgib.png"
                  alt="Salesforce CRM Services"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </picture>
              {/* <div className="absolute bottom-6 left-6 bg-[#ff6041] rounded-2xl p-6 text-white max-w-xs shadow-xl">
                <div className="flex items-center mb-3">
                  <FaCheckCircle className="w-5 h-5 mr-2" />
                  <h4 className="font-bold text-lg">Salesforce Expertise</h4>
                </div>
                <p className="text-sm leading-relaxed">
                  Transform your business with our cutting-edge Salesforce CRM
                  solutions and expert guidance.
                </p>
              </div> */}
            </div>

            {/* Right - Content */}
            <div className="main-right">
              <div className="flex items-center gap-2 mb-6">
                {/* <div className="w-12 h-0.5 bg-[#ff6041]"></div>
                <span className="text-[#ff6041] text-lg font-semibold tracking-wide">
                  Salesforce Services
                </span> */}
                <div className="main-bookmark">
                  <Bookmark
                    title="Salesforce Services"
                    icon={<MdOutlineMiscellaneousServices color="#ff6041" />}
                    className="bg-white text-[#ff6041] gap-3"
                  />
                </div>
              </div>

              <h2 className="main-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Innovative CRM Strategies for Business Growth
              </h2>

              <p className="main-feature text-lg text-gray-600 mb-8 leading-relaxed">
                This approach encompasses CRM implementation, customization, and
                optimization, offering customized solutions to drive impactful
                results and long-term success in customer relationship
                management.
              </p>

              <p className="main-feature text-lg text-gray-600 mb-8 leading-relaxed">
                A full suite of services designed to enhance sales operations,
                boost customer engagement, and implement creative strategies
                tailored to meet the unique needs of your business.
              </p>

              <div className="space-y-4">
                {[
                  "End-to-end Salesforce setup & configuration",
                  "Sales Cloud & Service Cloud implementation",
                  "Custom object & module creation",
                  "Workflow rules & automation setup",
                  "Lead-to-cash process optimization",
                  "Data migration & system integration",
                  "Opportunity & pipeline management",
                  "Lead scoring & assignment automation",
                  "Sales forecasting & quota management",
                  "Territory management",
                  "Activity tracking & reporting dashboards",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="main-feature flex items-start gap-3"
                  >
                    <FaCheckCircle className="w-4 h-4 text-[#ff6041] shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Core Features */}
      <section
        ref={servicesFeaturesRef}
        className="bg-gray-50 py-20 lg:py-32 services-core-features-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 mb-6 justify-center">
              {/* <div className="w-12 h-0.5 bg-[#ff6041]"></div>
              <span className="text-[#ff6041] text-lg font-semibold tracking-wide">
                Services Core Features
              </span>
              <div className="w-12 h-0.5 bg-[#ff6041]"></div> */}
              <div className="services-bookmark">
                <Bookmark
                  title="Services Core Features"
                  icon={<MdOutlineMiscellaneousServices color="#ff6041" />}
                  className="text-[#ff6041] bg-white border gap-3"
                />
              </div>
            </div>
            <h2 className="services-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Partner in CRM Success
            </h2>
            <p className="services-subtext text-xl text-gray-600 max-w-3xl mx-auto">
              Our services go beyond traditional CRM solutions—offering
              innovative, data-driven, and tailored strategies to help your
              business thrive in customer relationship landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SALESFORCE_SERVICE_DATA.servicesFeatures.map((feature, index) => (
              <div
                key={index}
                className="services-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section ref={coreFeaturesRef} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="core-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Salesforce Solutions
            </h2>
            <p className="core-subtext text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end Salesforce services covering all aspects of
              CRM implementation and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SALESFORCE_SERVICE_DATA.coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="core-feature-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ opacity: 1 }}
              >
                <div className="w-16 h-16 bg-[#ff6041] rounded-xl flex items-center justify-center mb-6">
                  <div className="text-white text-2xl">
                    {getIcon(feature.icon)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <FaCheckCircle className="w-3 h-3 text-[#ff6041] shrink-0 mt-1.5" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Solutions Section */}
      <section ref={solutionsRef} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="solutions-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Salesforce Solutions
            </h2>
            <p className="solutions-subtext text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end Salesforce services covering all aspects of
              CRM implementation and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="solutions-left space-y-8">
              <div className="relative mb-6">
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771880425/CRM_Solutions_i2rwoq.avif"
                    type="image/avif"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771880428/CRM_Solutions_uevq0h.webp"
                    type="image/webp"
                  />
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771880427/CRM_Solutions_bxjmbe.png" // fallback
                    alt="Salesforce CRM Solutions"
                    className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-video"
                  />
                </picture>
                <div className="absolute top-4 right-4 bg-[#ff6041] text-white px-3 py-1 rounded-full text-xs font-bold">
                  CRM
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-[#ff6041] rounded-lg flex items-center justify-center">
                  <FaCloud className="w-4 h-4 text-white" />
                </div>
                CRM Solutions
              </h3>
              {[
                "Sales Cloud implementation and customization",
                "Salesforce Service Cloud setup and optimization",
                "Custom app development on Salesforce platform",
                "Data migration and integration services",
                "Analytics and reporting implementation",
                "User training and adoption programs",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="w-4 h-4 text-[#ff6041] shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="solutions-right space-y-8">
              <div className="relative mb-6">
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771880244/Analytics___Optimization_iotgmy.avif"
                    type="image/avif"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771880247/Analytics___Optimization_rdjeec.webp"
                    type="image/webp"
                  />
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771880245/Analytics___Optimization_lzmmmi.png" // fallback
                    alt="Salesforce Analytics"
                    className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-video"
                  />
                </picture>
                <div className="absolute top-4 right-4 bg-[#ff6041] text-white px-3 py-1 rounded-full text-xs font-bold">
                  Analytics
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-[#ff6041] rounded-lg flex items-center justify-center">
                  <FaChartLine className="w-4 h-4 text-white" />
                </div>
                Analytics & Optimization
              </h3>
              {[
                "Custom dashboard development",
                "Performance monitoring and optimization",
                "Data-driven insights and reporting",
                "Predictive analytics implementation",
                "ROI measurement and improvement",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="w-4 h-4 text-[#ff6041] shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section ref={techStackRef} className="bg-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="tech-stack-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Tech Stack Expertise
            </h2>
            <p className="tech-stack-subtext text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the full power of Salesforce ecosystem to deliver
              comprehensive CRM solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SALESFORCE_SERVICE_DATA.techStack.map((tech, index) => (
              <div
                key={index}
                className="tech-stack-card bg-gray-800 rounded-xl p-6 text-white"
              >
                <h3 className="text-lg font-bold mb-3">{tech}</h3>
                <p className="text-gray-300 text-sm">
                  Expert implementation and optimization for maximum performance
                  and ROI.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="process-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Implementation Process
            </h2>
            <p className="process-subtext text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful Salesforce
              implementation and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SALESFORCE_SERVICE_DATA.processSteps.map((item, index) => (
              <div key={index} className="process-step text-center">
                <div className="w-20 h-20 bg-[#ff6041] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section ref={benefitsRef} className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 mb-6 justify-center">
              {/* <div className="w-12 h-0.5 bg-[#ff6041]"></div>
              <span className="text-[#ff6041] text-lg font-semibold tracking-wide">
                Business Benefits
              </span>
              <div className="w-12 h-0.5 bg-[#ff6041]"></div> */}
              <div className="benefits-bookmark">
                <Bookmark
                  title="Business Benefits"
                  icon={<BiSolidBusiness color="#ff6041" />}
                  className="text-[#ff6041] bg-white border gap-3"
                />
              </div>
            </div>
            <h2 className="benefits-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Business with Salesforce
            </h2>
            <p className="benefits-subtext text-xl text-gray-600 max-w-3xl mx-auto">
              Drive growth and efficiency with our comprehensive Salesforce
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SALESFORCE_SERVICE_DATA.businessBenefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-card flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <FaCheckCircle className="w-5 h-5 text-[#ff6041] shrink-0" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section ref={techRef} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 mb-6 justify-center">
              {/* <div className="w-12 h-0.5 bg-[#ff6041]"></div>
              <span className="text-[#ff6041] text-lg font-semibold tracking-wide">
                Technologies
              </span>
              <div className="w-12 h-0.5 bg-[#ff6041]"></div> */}
              <div className="tech-bookmark">
                <Bookmark
                  title="Technologies"
                  icon={<GrTechnology color="#ff6041" />}
                  className="text-[#ff6041] bg-white border gap-3"
                />
              </div>
            </div>
            <h2 className="tech-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Salesforce Technologies We Work With
            </h2>
            <p className="tech-subtext text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the full power of Salesforce ecosystem to deliver
              comprehensive CRM solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {SALESFORCE_SERVICE_DATA.technologies.map((tech, index) => (
              <span
                key={index}
                className="tech-tag px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-[#ff6041] hover:text-white transition-all duration-300"
                style={{ opacity: 1 }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={ctaRef} className="bg-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="cta-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with Salesforce?
            </h2>
            <p className="cta-subtext text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's discuss how we can help you leverage the power of Salesforce
              to accelerate your business growth and achieve your CRM
              objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cta-button bg-[#ff6041] hover:bg-[#e55a3d] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center gap-2"
                style={{ opacity: 1 }}
              >
                Start Your Salesforce Journey
                <IoArrowRedoSharp size={20} />
              </a>
              <a
                href="/services"
                className="cta-button border-2 border-[#ff6041] text-[#ff6041] hover:bg-[#ff6041] hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                style={{ opacity: 1 }}
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesforceService;
