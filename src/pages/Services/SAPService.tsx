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
import { SAP_SERVICE_DATA } from "../../constants/ServicesDetails/SAPConstants";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { BiSolidBusiness } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import { PrimaryButton } from "../../components/Button";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SAPService = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const servicesFeaturesRef = useRef<HTMLDivElement>(null);
  const coreFeaturesRef = useRef<HTMLDivElement>(null);
  const comprehensiveRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const businessBenefitsRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

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
          ".hero-subtitle",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
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
        )
        .from(
          ".hero-button",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        );

      // ================= MAIN CONTENT SECTION =================
      gsap.from(".main-content-image", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainContentRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".main-content-bookmark", {
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

      gsap.from(".main-content-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainContentRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".main-content-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainContentRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".feature-item", {
        opacity: 0,
        x: -30,

        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainContentRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= SERVICES FEATURES SECTION =================
      gsap.from(".services-features-bookmark", {
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

      gsap.from(".services-features-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesFeaturesRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".services-features-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesFeaturesRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".service-feature-card", {
        opacity: 0,
        y: 60,

        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesFeaturesRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= CORE FEATURES SECTION =================
      gsap.from(".core-features-title", {
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

      gsap.from(".core-features-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: coreFeaturesRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".core-feature-card", {
        opacity: 0,
        scale: 0.9,
        y: 60,

        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: coreFeaturesRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= COMPREHENSIVE SOLUTIONS SECTION =================
      gsap.from(".comprehensive-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: comprehensiveRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".comprehensive-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: comprehensiveRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".comprehensive-image", {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: comprehensiveRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".comprehensive-heading", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: comprehensiveRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".comprehensive-item", {
        opacity: 0,
        x: -30,

        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: comprehensiveRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= TECH STACK SECTION =================
      gsap.from(".tech-stack-title", {
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

      gsap.from(".tech-stack-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: techStackRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".tech-stack-card", {
        opacity: 0,
        y: 60,

        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: techStackRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= PROCESS SECTION =================
      gsap.from(".process-title", {
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

      gsap.from(".process-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".process-step", {
        opacity: 0,
        scale: 0.8,
        y: 60,

        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= BUSINESS BENEFITS SECTION =================
      gsap.from(".business-benefits-bookmark", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: businessBenefitsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".business-benefits-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: businessBenefitsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".business-benefits-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: businessBenefitsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".business-benefit-item", {
        opacity: 0,
        x: -30,

        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: businessBenefitsRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= TECHNOLOGIES SECTION =================
      gsap.from(".technologies-bookmark", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: technologiesRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".technologies-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: technologiesRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".technologies-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: technologiesRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".technology-tag", {
        opacity: 0,
        scale: 0.8,

        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: technologiesRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= CTA SECTION =================
      gsap.from(".cta-title", {
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

      gsap.from(".cta-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".cta-button", {
        y: 30,
        opacity: 0,

        duration: 0.8,
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

  return (
    <div ref={container} className="min-h-screen ">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="mx-auto min-w-86.25 w-full items-center rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5  my-20"
      >
        <div className="hero-bookmark">
          <Bookmark
            icon={<BiSolidBusiness />}
            title="SAP Services"
            className="bg-white text-[#ff6041] mx-auto w-fit gap-3"
          />
        </div>
        <h1 className="hero-title text-4xl md:text-6xl font-bold text-gray-900 mt-8 mb-6 text-center">
          {SAP_SERVICE_DATA.hero.title}
        </h1>
        <p className="hero-subtitle text-xl text-gray-600 max-w-442.5 mx-auto text-center">
          {SAP_SERVICE_DATA.hero.subtitle}
        </p>
        <p className="hero-description text-xl text-gray-600 max-w-442.5 mx-auto text-center">
          {SAP_SERVICE_DATA.hero.description}
        </p>
        <div className="hero-button">
          <a href="/contact">
            <PrimaryButton title="Get Started" classname="rounded-[25px]" />
          </a>
        </div>
      </section>

      {/* Main Content Section */}
      <section ref={mainContentRef} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="main-content-image relative">
              <picture>
                <source
                  srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1772037064/sap-service_v4hgku.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1772037065/sap-service_chv6lo.webp"
                  type="image/webp"
                />
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dlvjnevcw/image/upload/v1772037066/sap-service_bzc5w4.png"
                  alt="SAP ERP Services"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </picture>
            </div>

            {/* Right - Content */}
            <div>
              <div className="main-content-bookmark flex items-center gap-2 mb-6">
                <Bookmark
                  title="SAP Services"
                  icon={<MdOutlineMiscellaneousServices color="#ff6041" />}
                  className="text-[#ff6041] bg-white gap-3"
                />
              </div>

              <h2 className="main-content-title text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Innovative ERP Strategies for Business Growth
              </h2>

              <p className="main-content-description text-lg text-gray-600 mb-8 leading-relaxed">
                This approach encompasses SAP implementation, customization, and
                integration, offering customized solutions to drive impactful
                results and long-term success in enterprise resource planning.
              </p>

              <p className="main-content-description text-lg text-gray-600 mb-8 leading-relaxed">
                A full suite of services designed to enhance enterprise
                operations, boost financial visibility, and implement creative
                strategies tailored to meet the unique needs of your business.
              </p>

              <div className="space-y-4">
                {[
                  "End-to-end SAP S/4HANA implementation",
                  "Greenfield, Brownfield & Hybrid migration strategies",
                  "Real-time analytics & in-memory processing",
                  "Business process redesign & optimization",
                  "System landscape transformation",
                  "Cloud & on-premise deployment",
                  "General Ledger (GL) configuration",
                  "Accounts Payable & Receivable setup",
                  "Asset accounting",
                  "Cost center & profit center accounting",
                  "Budgeting & financial reporting",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="feature-item flex items-start gap-3"
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
      <section ref={servicesFeaturesRef} className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="services-features-bookmark flex items-center gap-2 mb-6 justify-center">
              <Bookmark
                title="Services Core Features"
                icon={<MdOutlineMiscellaneousServices color="#ff6041" />}
                className="text-[#ff6041] bg-white border gap-3"
              />
            </div>
            <h2 className="services-features-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Partner in ERP Success
            </h2>
            <p className="services-features-description text-xl text-gray-600 max-w-3xl mx-auto">
              Our services go beyond traditional ERP solutions—offering
              innovative, data-driven, and tailored strategies to help your
              business thrive in enterprise resource landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SAP_SERVICE_DATA.servicesFeatures.map((feature, index) => (
              <div
                key={index}
                className="service-feature-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
            <h2 className="core-features-title text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive SAP Solutions
            </h2>
            <p className="core-features-description text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end SAP services covering all aspects of ERP
              implementation and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAP_SERVICE_DATA.coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="core-feature-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
      <section ref={comprehensiveRef} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="comprehensive-title text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive SAP Solutions
            </h2>
            <p className="comprehensive-description text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end SAP services covering all aspects of ERP
              implementation and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="comprehensive-image relative mb-6">
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1772037285/ERP_Implementation_iqlahf.avif"
                    type="image/avif"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1772037286/ERP_Implementation_gxqai7.webp"
                    type="image/webp"
                  />
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dlvjnevcw/image/upload/v1772037288/ERP_Implementation_vr9udo.png"
                    alt="SAP ERP Solutions"
                    className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-video"
                  />
                </picture>
                <div className="absolute top-4 right-4 bg-[#ff6041] text-white px-3 py-1 rounded-full text-xs font-bold">
                  ERP
                </div>
              </div>
              <h3 className="comprehensive-heading text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-[#ff6041] rounded-lg flex items-center justify-center">
                  <FaServer className="w-4 h-4 text-white" />
                </div>
                ERP Implementation
              </h3>
              {[
                "SAP S/4HANA implementation and migration",
                "SAP Business One setup and customization",
                "SAP SuccessFactors integration",
                "Custom SAP module development",
                "Data migration and integration services",
                "Process optimization and automation",
              ].map((item, index) => (
                <div
                  key={index}
                  className="comprehensive-item flex items-start gap-3"
                >
                  <FaCheckCircle className="w-4 h-4 text-[#ff6041] shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div className="comprehensive-image relative mb-6">
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1772037415/Analytics_Optimization_vigg7a.avif"
                    type="image/avif"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1772037416/Analytics_Optimization_qq8ubq.webp"
                    type="image/webp"
                  />
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dlvjnevcw/image/upload/v1772037417/Analytics_Optimization_iusdwu.png"
                    alt="SAP Analytics"
                    className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-video"
                  />
                </picture>
                <div className="absolute top-4 right-4 bg-[#ff6041] text-white px-3 py-1 rounded-full text-xs font-bold">
                  Analytics
                </div>
              </div>
              <h3 className="comprehensive-heading text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
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
                <div
                  key={index}
                  className="comprehensive-item flex items-start gap-3"
                >
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
            <h2 className="tech-stack-title text-3xl md:text-4xl font-bold text-white mb-6">
              Technology Expertise
            </h2>
            <p className="tech-stack-description text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the full power of SAP ecosystem to deliver
              comprehensive ERP solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SAP_SERVICE_DATA.techStack.map((tech, index) => (
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
            <h2 className="process-title text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Implementation Approach
            </h2>
            <p className="process-description text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful SAP
              implementation and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAP_SERVICE_DATA.processSteps.map((item, index) => (
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
      <section ref={businessBenefitsRef} className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="business-benefits-bookmark flex items-center gap-2 mb-6 justify-center">
              <Bookmark
                title="Business Benefits"
                icon={<BiSolidBusiness color="#ff6041" />}
                className="text-[#ff6041] bg-white border gap-3"
              />
            </div>
            <h2 className="business-benefits-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Business with SAP
            </h2>
            <p className="business-benefits-description text-xl text-gray-600 max-w-3xl mx-auto">
              Drive growth and efficiency with our comprehensive SAP solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAP_SERVICE_DATA.businessBenefits.map((benefit, index) => (
              <div
                key={index}
                className="business-benefit-item flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <FaCheckCircle className="w-5 h-5 text-[#ff6041] shrink-0" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section ref={technologiesRef} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="technologies-bookmark flex items-center gap-2 mb-6 justify-center">
              <Bookmark
                title="Technologies"
                icon={<GrTechnology color="#ff6041" />}
                className="text-[#ff6041] bg-white border gap-3"
              />
            </div>
            <h2 className="technologies-title text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              SAP Technologies We Work With
            </h2>
            <p className="technologies-description text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the full power of SAP ecosystem to deliver
              comprehensive ERP solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {SAP_SERVICE_DATA.technologies.map((tech, index) => (
              <span
                key={index}
                className="technology-tag px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-[#ff6041] hover:text-white transition-all duration-300"
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
            <h2 className="cta-title text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with SAP?
            </h2>
            <p className="cta-description text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's discuss how we can help you leverage the power of SAP to
              accelerate your business growth and achieve your ERP objectives.
            </p>
            <div className="cta-button flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#ff6041] hover:bg-[#e55a3d] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                Start Your SAP Journey
                <IoArrowRedoSharp size={20} />
              </a>
              <a
                href="/services"
                className="border-2 border-[#ff6041] text-[#ff6041] hover:bg-[#ff6041] hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
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

export default SAPService;
