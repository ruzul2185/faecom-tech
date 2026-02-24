import {
  FaBug,
  FaShieldAlt,
  FaTachometerAlt,
  FaCheckCircle,
  FaRobot,
  FaSearch,
  FaCog,
  FaMobileAlt,
  FaCloud,
  FaLock,
} from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { QA_SERVICE_DATA } from "../../constants/ServicesDetails/QAConstants";
import { Bookmark } from "../../components/Bookmark";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { PrimaryButton } from "../../components/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const QAService = () => {
  const container = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const coreFeaturesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
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

      // ================= CORE FEATURES SECTION =================
      gsap.from(".core-bookmark", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: coreFeaturesRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".core-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: coreFeaturesRef.current,
          start: "top 80%",
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
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".core-card", {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: coreFeaturesRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // ================= SERVICES SECTION =================
      gsap.from(".services-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".services-subtext", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
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
          trigger: servicesRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= CAPABILITIES SECTION =================
      gsap.from(".capabilities-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: capabilitiesRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".capabilities-subtext", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: capabilitiesRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".capabilities-left", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: capabilitiesRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".capabilities-right", {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: capabilitiesRef.current,
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

      // ================= BENEFITS SECTION =================
      gsap.from(".benefits-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 85%",
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
          start: "top 80%",
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
      case "search":
        return <FaSearch />;
      case "robot":
        return <FaRobot />;
      case "tachometer":
        return <FaTachometerAlt />;
      case "shield":
        return <FaShieldAlt />;
      case "cog":
        return <FaCog />;
      case "mobile":
        return <FaMobileAlt />;
      case "cloud":
        return <FaCloud />;
      case "lock":
        return <FaLock />;
      default:
        return <FaBug />;
    }
  };

  return (
    <div ref={container} className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="mx-auto min-w-86.25 w-full rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5 items-center my-20"
      >
        <div className="hero-bookmark">
          <Bookmark
            icon={<FaBug />}
            title="QA Services"
            className="bg-white text-[#ff6041] mx-auto w-fit gap-3"
          />
        </div>
        <h1 className="hero-heading text-4xl text-center md:text-6xl font-bold text-gray-900 mt-8 mb-6">
          {QA_SERVICE_DATA.hero.title}
        </h1>
        <p className="hero-subtext text-xl text-center text-gray-600 max-w-442.5 mx-auto">
          {QA_SERVICE_DATA.hero.subtitle}
        </p>
        <p className="hero-subtext text-xl text-center text-gray-600 max-w-442.5 mx-auto">
          {QA_SERVICE_DATA.hero.description}
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
                  srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771880906/Comprehensive_Quality_Assurance_for_Software_Excellence_oubiv5.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771880910/Comprehensive_Quality_Assurance_for_Software_Excellence_hc2gm5.webp"
                  type="image/webp"
                />
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771880908/Comprehensive_Quality_Assurance_for_Software_Excellence_cgfwvz.png" // fallback
                  alt="Quality Assurance Services"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-500"
                />
              </picture>
            </div>

            {/* Right - Content */}
            <div className="main-right">
              <div className="flex items-center gap-2 mb-6">
                {/* <div className="w-12 h-0.5 bg-[#ff6041]"></div>
                <span className="text-[#ff6041] text-lg font-semibold tracking-wide">
                  QA Services
                </span> */}
                <div className="main-bookmark">
                  <Bookmark
                    title="QA Services"
                    icon={<MdOutlineMiscellaneousServices color="#ff6041" />}
                    className="text-[#ff6041] bg-white border gap-3"
                  />
                </div>
              </div>

              <h2 className="main-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Comprehensive Quality Assurance for Software Excellence
              </h2>

              <p className="main-feature text-lg text-gray-600 mb-8 leading-relaxed">
                Our comprehensive QA approach encompasses manual testing,
                automation, and performance testing, offering customized
                solutions to ensure your software meets the highest quality
                standards.
              </p>

              <p className="main-feature text-lg text-gray-600 mb-8 leading-relaxed">
                A full suite of testing services designed to enhance software
                reliability, boost performance, and implement quality strategies
                tailored to meet the unique needs of your business.
              </p>

              <div className="space-y-4">
                {[
                  "Comprehensive testing strategies aligned with business goals",
                  "Manual and automated testing for complete coverage",
                  "Performance testing to ensure optimal user experience",
                  "Security testing to identify vulnerabilities",
                  "Cross-platform compatibility testing",
                  "API and backend testing for robust functionality",
                  "Mobile app testing across iOS and Android devices",
                  "Continuous testing integration with CI/CD pipelines",
                  "Detailed bug reporting and tracking",
                  "Regular quality audits and improvement recommendations",
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

      {/* Core Features Section */}
      <section ref={coreFeaturesRef} className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 mb-6 justify-center">
              {/* <div className="w-12 h-0.5 bg-[#ff6041]"></div>
              <span className="text-[#ff6041] text-lg font-semibold tracking-wide">
                Core Features
              </span>
              <div className="w-12 h-0.5 bg-[#ff6041]"></div> */}
              <div className="core-bookmark">
                <Bookmark
                  title="Core Features"
                  icon={<MdOutlineMiscellaneousServices color="#ff6041" />}
                  className="text-[#ff6041] bg-white border gap-3"
                />
              </div>
            </div>
            <h2 className="core-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Partner in Software Quality
            </h2>
            <p className="core-subtext text-xl text-gray-600 max-w-3xl mx-auto">
              Our QA services go beyond traditional testing—offering innovative,
              comprehensive, and tailored strategies to ensure your software
              delivers exceptional user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {QA_SERVICE_DATA.coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="core-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-[#ff6041] rounded-full flex items-center justify-center text-white text-2xl mb-6">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <FaCheckCircle className="w-3 h-3 text-[#ff6041] shrink-0 mt-1" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Features */}
      <section ref={servicesRef} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="services-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive QA Solutions
            </h2>
            <p className="services-subtext text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end quality assurance services covering all
              aspects of software testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {QA_SERVICE_DATA.servicesFeatures.map((feature, index) => (
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

      {/* Additional Capabilities */}
      <section ref={capabilitiesRef} className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="capabilities-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Additional Testing Capabilities
            </h2>
            <p className="capabilities-subtext text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond our core services, we offer specialized testing solutions
              to meet all your quality assurance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="capabilities-left space-y-8">
              <div className="relative mb-6">
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771882086/Specialized_Testing_QA_rex62j.avif"
                    type="image/avif"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771882092/Specialized_Testing_QA_nhzjv8.webp"
                    type="image/webp"
                  />
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771882090/Specialized_Testing_QA_kythuo.png" // fallback
                    alt="QA Testing Process"
                    className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-video"
                  />
                </picture>
                <div className="absolute top-4 right-4 bg-[#ff6041] text-white px-3 py-1 rounded-full text-xs font-bold">
                  Testing
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-[#ff6041] rounded-lg flex items-center justify-center">
                  <FaSearch className="w-4 h-4 text-white" />
                </div>
                Specialized Testing
              </h3>
              {QA_SERVICE_DATA.additionalCapabilities
                .slice(0, 3)
                .map((capability, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="w-4 h-4 text-[#ff6041] shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed">
                      {capability}
                    </span>
                  </div>
                ))}
            </div>

            <div className="capabilities-right space-y-8">
              <div className="relative mb-6">
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771881954/Advanced_QA_Solutions_QA_kyveok.avif"
                    type="image/avif"
                  />
                  <source
                    srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771881959/Advanced_QA_Solutions_QA_bjfihh.webp"
                    type="image/webp"
                  />
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771881958/Advanced_QA_Solutions_QA_rnjret.png" // fallback
                    alt="Advanced QA Solutions"
                    className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-video"
                  />
                </picture>
                <div className="absolute top-4 right-4 bg-[#ff6041] text-white px-3 py-1 rounded-full text-xs font-bold">
                  Advanced QA
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-[#ff6041] rounded-lg flex items-center justify-center">
                  <FaShieldAlt className="w-4 h-4 text-white" />
                </div>
                Advanced QA Solutions
              </h3>
              {QA_SERVICE_DATA.additionalCapabilities
                .slice(3)
                .map((capability, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="w-4 h-4 text-[#ff6041] shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed">
                      {capability}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="bg-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="process-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Our QA Process
            </h2>
            <p className="process-subtext text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a structured approach to ensure comprehensive software
              quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {QA_SERVICE_DATA.processSteps.map((item, index) => (
              <div key={index} className="process-step text-center">
                <div className="w-20 h-20 bg-[#ff6041] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
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
              QA Technologies We Work With
            </h2>
            <p className="tech-subtext text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage industry-leading tools and technologies to deliver
              comprehensive testing solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {QA_SERVICE_DATA.technologies.map((tech, index) => (
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

      {/* Business Benefits */}
      <section ref={benefitsRef} className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="benefits-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Business Benefits
            </h2>
            <p className="benefits-subtext text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us to enhance your software quality and drive
              business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {QA_SERVICE_DATA.businessBenefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-[#ff6041] shrink-0" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={ctaRef} className="bg-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="cta-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Ensure Your Software Quality?
            </h2>
            <p className="cta-subtext text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's discuss how we can help you implement comprehensive QA
              strategies to deliver flawless software experiences to your users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cta-button bg-[#ff6041] hover:bg-[#e55a3d] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center gap-2"
                style={{ opacity: 1 }}
              >
                Start Your QA Journey
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

export default QAService;
