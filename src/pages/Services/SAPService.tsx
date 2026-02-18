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

const SAPService = () => {
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
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className=" py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              {SAP_SERVICE_DATA.hero.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
              {SAP_SERVICE_DATA.hero.subtitle}
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8">
              {SAP_SERVICE_DATA.hero.description}
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
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <img
                src="/sap-bg.jpg"
                alt="SAP ERP Services"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-[#ff6041] rounded-2xl p-6 text-white max-w-xs shadow-xl">
                <div className="flex items-center mb-3">
                  <FaCheckCircle className="w-5 h-5 mr-2" />
                  <h4 className="font-bold text-lg">SAP Expertise</h4>
                </div>
                <p className="text-sm leading-relaxed">
                  Transform your business with our cutting-edge SAP ERP
                  solutions and expert guidance.
                </p>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                {/* <div className="w-12 h-0.5 bg-[#ff6041]"></div>
                <span className="text-[#ff6041] text-lg font-semibold tracking-wide">
                  SAP Services
                </span> */}
                <Bookmark
                  title="SAP Services"
                  icon={<MdOutlineMiscellaneousServices color="#ff6041" />}
                  className="text-[#ff6041] bg-white"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Innovative ERP Strategies for Business Growth
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This approach encompasses SAP implementation, customization, and
                integration, offering customized solutions to drive impactful
                results and long-term success in enterprise resource planning.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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

      {/* Services Core Features */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 mb-6 justify-center">
              {/* <div className="w-12 h-0.5 bg-[#ff6041]"></div>
              <span className="text-[#ff6041] text-lg font-semibold tracking-wide">
                Services Core Features
              </span>
              <div className="w-12 h-0.5 bg-[#ff6041]"></div> */}
              <Bookmark
                title="Services Core Features"
                icon={<MdOutlineMiscellaneousServices color="#ff6041" />}
                className="text-[#ff6041] bg-white border"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Partner in ERP Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services go beyond traditional ERP solutions—offering
              innovative, data-driven, and tailored strategies to help your
              business thrive in enterprise resource landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SAP_SERVICE_DATA.servicesFeatures.map((feature, index) => (
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

      {/* Core Features Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive SAP Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end SAP services covering all aspects of ERP
              implementation and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAP_SERVICE_DATA.coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive SAP Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end SAP services covering all aspects of ERP
              implementation and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="relative mb-6">
                <img
                  src="/sap-erp.png"
                  alt="SAP ERP Solutions"
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#ff6041] text-white px-3 py-1 rounded-full text-xs font-bold">
                  ERP
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
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
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="w-4 h-4 text-[#ff6041] shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div className="relative mb-6">
                <img
                  src="/sap-analytics.jpg"
                  alt="SAP Analytics"
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
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
      <section className="bg-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technology Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the full power of SAP ecosystem to deliver
              comprehensive ERP solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SAP_SERVICE_DATA.techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 text-white"
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
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Implementation Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful SAP
              implementation and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAP_SERVICE_DATA.processSteps.map((item, index) => (
              <div key={index} className="text-center">
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
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="w-12 h-0.5 bg-[#ff6041]"></div>
              <span className="text-[#ff6041] text-lg font-semibold tracking-wide">
                Business Benefits
              </span>
              <div className="w-12 h-0.5 bg-[#ff6041]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Business with SAP
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drive growth and efficiency with our comprehensive SAP solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAP_SERVICE_DATA.businessBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <FaCheckCircle className="w-5 h-5 text-[#ff6041] shrink-0" />
                <span className="text-gray-800 font-medium">{benefit}</span>
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
              <div className="w-12 h-0.5 bg-[#ff6041]"></div>
              <span className="text-[#ff6041] text-lg font-semibold tracking-wide">
                Technologies
              </span>
              <div className="w-12 h-0.5 bg-[#ff6041]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              SAP Technologies We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the full power of SAP ecosystem to deliver
              comprehensive ERP solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {SAP_SERVICE_DATA.technologies.map((tech, index) => (
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

      {/* Call to Action */}
      <section className="bg-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with SAP?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's discuss how we can help you leverage the power of SAP to
              accelerate your business growth and achieve your ERP objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
