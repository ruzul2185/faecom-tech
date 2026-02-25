import {
  FaCode,
  FaDesktop,
  FaServer,
  FaCheckCircle,
  FaCogs,
  FaMobileAlt,
  FaDatabase,
  FaShieldAlt,
  FaRocket,
  FaPaintBrush,
  FaChartLine,
  FaLock,
  FaGlobe,
} from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { WEBDEV_SERVICE_DATA } from "../../constants/ServicesDetails/WebDevConstants";
import { Bookmark } from "../../components/Bookmark";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { PrimaryButton } from "../../components/Button";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WebDevService = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const coreFeaturesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
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
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        );

      // ================= MAIN CONTENT SECTION =================
      gsap.from(".main-content-image", {
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

      gsap.from(".main-content-heading", {
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

      gsap.from(".main-content-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainContentRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".main-content-feature", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainContentRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // ================= CORE FEATURES SECTION =================
      gsap.from(".core-features-bookmark", {
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

      gsap.from(".core-features-heading", {
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

      gsap.from(".core-features-subtext", {
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

      gsap.from(".core-feature-card", {
        opacity: 0,
        scale: 0.9,
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

      gsap.from(".service-card", {
        opacity: 0,
        scale: 0.9,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 70%",
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
        x: -80,
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
        x: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: capabilitiesRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".capability-item", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: capabilitiesRef.current,
          start: "top 70%",
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

      gsap.from(".technologies-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: technologiesRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".technologies-subtext", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: technologiesRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".tech-tag", {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: technologiesRef.current,
          start: "top 60%",
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
        scale: 0.9,
        y: 30,
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
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "desktop":
        return <FaDesktop />;
      case "server":
        return <FaServer />;
      case "cogs":
        return <FaCogs />;
      case "mobile":
        return <FaMobileAlt />;
      case "database":
        return <FaDatabase />;
      case "shield":
        return <FaShieldAlt />;
      case "rocket":
        return <FaRocket />;
      case "paint":
        return <FaPaintBrush />;
      case "chart":
        return <FaChartLine />;
      case "lock":
        return <FaLock />;
      case "globe":
        return <FaGlobe />;
      default:
        return <FaCode />;
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
            icon={<FaCode />}
            title="Web Development Services"
            className="bg-white text-[#ff6041] mx-auto w-fit gap-3"
          />
        </div>
        <h1 className="hero-heading text-4xl md:text-6xl text-center font-bold text-gray-900 mt-8 mb-6">
          {WEBDEV_SERVICE_DATA.hero.title}
        </h1>
        <p className="hero-subtext text-xl text-center text-gray-600 max-w-442.5 mx-auto">
          {WEBDEV_SERVICE_DATA.hero.subtitle}
        </p>
        <p className="hero-subtext text-xl text-center text-gray-600 max-w-442.5 mx-auto">
          {WEBDEV_SERVICE_DATA.hero.description}
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
                  srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771879315/web_development_iyhdrc.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771879318/web_development_sogyq3.webp"
                  type="image/webp"
                />
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771879317/web_development_bs3fhu.png" // fallback
                  alt="Web Development Services"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-500"
                />
              </picture>
            </div>

            {/* Right - Content */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                {/* <div className="w-12 h-0.5 bg-[#ff6041]"></div>
                <span className="text-[#ff6041] text-lg font-semibold tracking-wide">
                  Web Development
                </span> */}
                <div className="main-content-bookmark">
                  <Bookmark
                    title="Web Development"
                    icon={<MdOutlineMiscellaneousServices color="#ff6041" />}
                    className="bg-white text-[#ff6041] gap-3"
                  />
                </div>
              </div>

              <h2 className="main-content-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Build Powerful Digital Experiences That Drive Growth
              </h2>

              <p className="main-content-text text-lg text-gray-600 mb-8 leading-relaxed">
                Our web development expertise combines creative design with
                technical excellence to deliver fast, secure, and scalable
                websites that engage users and achieve business goals.
              </p>

              <p className="main-content-text text-lg text-gray-600 mb-8 leading-relaxed">
                From corporate websites to complex web applications, we build
                digital solutions that provide exceptional user experiences and
                support your business growth.
              </p>

              <div className="space-y-4">
                {[
                  "Custom web applications tailored to your business needs",
                  "Responsive design that works perfectly on all devices",
                  "High-performance websites optimized for speed and SEO",
                  "Secure development with industry best practices",
                  "Scalable architecture that grows with your business",
                  "Modern frontend frameworks for engaging user interfaces",
                  "Robust backend systems for reliable functionality",
                  "E-commerce solutions with payment integration",
                  "Progressive Web Apps for mobile-like experiences",
                  "Ongoing maintenance and support services",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="main-content-feature flex items-start gap-3"
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
              <div className="core-features-bookmark">
                <Bookmark
                  title="Core Features"
                  icon={<MdOutlineMiscellaneousServices color="#ff6041" />}
                  className="text-[#ff6041] bg-white border gap-3"
                />
              </div>
            </div>
            <h2 className="core-features-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Partner in Digital Excellence
            </h2>
            <p className="core-features-subtext text-xl text-gray-600 max-w-3xl mx-auto">
              Our web development services go beyond traditional website
              building—offering innovative, scalable, and tailored solutions to
              drive your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WEBDEV_SERVICE_DATA.coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="core-feature-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
              Comprehensive Development Solutions
            </h2>
            <p className="services-subtext text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end web development services covering all
              aspects of modern web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WEBDEV_SERVICE_DATA.servicesFeatures.map((feature, index) => (
              <div
                key={index}
                className="service-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
              Advanced Web Capabilities
            </h2>
            <p className="capabilities-subtext text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond core development, we offer specialized services to enhance
              your web presence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="capabilities-left space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                E-Commerce & CMS
              </h3>
              {WEBDEV_SERVICE_DATA.additionalCapabilities
                .slice(0, 3)
                .map((capability, index) => (
                  <div
                    key={index}
                    className="capability-item flex items-start gap-3"
                  >
                    <FaCheckCircle className="w-4 h-4 text-[#ff6041] shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed">
                      {capability}
                    </span>
                  </div>
                ))}
            </div>

            <div className="capabilities-right space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Optimization & Security
              </h3>
              {WEBDEV_SERVICE_DATA.additionalCapabilities
                .slice(3)
                .map((capability, index) => (
                  <div
                    key={index}
                    className="capability-item flex items-start gap-3"
                  >
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
              Our Development Process
            </h2>
            <p className="process-subtext text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful web
              development and deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WEBDEV_SERVICE_DATA.processSteps.map((item, index) => (
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
      <section ref={technologiesRef} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 mb-6 justify-center">
              {/* <div className="w-12 h-0.5 bg-[#ff6041]"></div>
              <span className="text-[#ff6041] text-lg font-semibold tracking-wide">
                Technologies
              </span>
              <div className="w-12 h-0.5 bg-[#ff6041]"></div> */}
              <div className="technologies-bookmark">
                <Bookmark
                  title="Technologies"
                  icon={<GrTechnology color="#ff6041" />}
                  className="text-[#ff6041] bg-white border gap-3"
                />
              </div>
            </div>
            <h2 className="technologies-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Web Development Technologies
            </h2>
            <p className="technologies-subtext text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to build
              modern, scalable web applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {WEBDEV_SERVICE_DATA.technologies.map((tech, index) => (
              <span
                key={index}
                className="tech-tag px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-[#ff6041] hover:text-white transition-all duration-300"
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
              Partner with us to build a powerful online presence that drives
              business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WEBDEV_SERVICE_DATA.businessBenefits.map((benefit, index) => (
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
              Ready to Build Your Digital Presence?
            </h2>
            <p className="cta-subtext text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's discuss how we can help you create a powerful web
              application that engages users and drives your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cta-button bg-[#ff6041] hover:bg-[#e55a3d] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                Start Your Web Project
                <IoArrowRedoSharp size={20} />
              </a>
              <a
                href="/services"
                className="cta-button border-2 border-[#ff6041] text-[#ff6041] hover:bg-[#ff6041] hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
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

export default WebDevService;
