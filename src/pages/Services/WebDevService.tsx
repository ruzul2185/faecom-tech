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

const WebDevService = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className=" py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              {WEBDEV_SERVICE_DATA.hero.title}
            </h1>
            <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed mb-6">
              {WEBDEV_SERVICE_DATA.hero.subtitle}
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {WEBDEV_SERVICE_DATA.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#ff6041] hover:bg-[#e55a3d] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                Get Started
                <IoArrowRedoSharp size={20} />
              </a>
            </div>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#ff6041] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <img
                src="/web-bg.jpg"
                alt="Web Development Services"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Right - Content */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                {/* <div className="w-12 h-0.5 bg-[#ff6041]"></div>
                <span className="text-[#ff6041] text-lg font-semibold tracking-wide">
                  Web Development
                </span> */}
                <Bookmark
                  title="Web Development"
                  icon={<MdOutlineMiscellaneousServices color="#ff6041" />}
                  className="bg-white text-[#ff6041]"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Build Powerful Digital Experiences That Drive Growth
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our web development expertise combines creative design with
                technical excellence to deliver fast, secure, and scalable
                websites that engage users and achieve business goals.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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
                  <div key={index} className="flex items-start gap-3">
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
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 mb-6 justify-center">
              {/* <div className="w-12 h-0.5 bg-[#ff6041]"></div>
              <span className="text-[#ff6041] text-lg font-semibold tracking-wide">
                Core Features
              </span>
              <div className="w-12 h-0.5 bg-[#ff6041]"></div> */}
              <Bookmark
                title="Core Features"
                icon={<MdOutlineMiscellaneousServices color="#ff6041" />}
                className="text-[#ff6041] bg-white border"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Partner in Digital Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our web development services go beyond traditional website
              building—offering innovative, scalable, and tailored solutions to
              drive your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WEBDEV_SERVICE_DATA.coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Development Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end web development services covering all
              aspects of modern web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WEBDEV_SERVICE_DATA.servicesFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Advanced Web Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond core development, we offer specialized services to enhance
              your web presence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                E-Commerce & CMS
              </h3>
              {WEBDEV_SERVICE_DATA.additionalCapabilities
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

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Optimization & Security
              </h3>
              {WEBDEV_SERVICE_DATA.additionalCapabilities
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
      <section className="bg-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful web
              development and deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WEBDEV_SERVICE_DATA.processSteps.map((item, index) => (
              <div key={index} className="text-center">
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
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 mb-6 justify-center">
              {/* <div className="w-12 h-0.5 bg-[#ff6041]"></div>
              <span className="text-[#ff6041] text-lg font-semibold tracking-wide">
                Technologies
              </span>
              <div className="w-12 h-0.5 bg-[#ff6041]"></div> */}
              <Bookmark
                title="Technologies"
                icon={<GrTechnology color="#ff6041" />}
                className="text-[#ff6041] bg-white border"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Web Development Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to build
              modern, scalable web applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {WEBDEV_SERVICE_DATA.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-[#ff6041] hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us to build a powerful online presence that drives
              business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WEBDEV_SERVICE_DATA.businessBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
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
      <section className="bg-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's discuss how we can help you create a powerful web
              application that engages users and drives your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#ff6041] hover:bg-[#e55a3d] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                Start Your Web Project
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

export default WebDevService;
