import { FaChartLine, FaSearch, FaUsers, FaCheckCircle, FaRocket, FaPen, FaBullhorn, FaEnvelope, FaAd, FaChartBar, FaBullseye, FaTrophy, FaGlobe } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { Link } from "react-router";
import { DIGITAL_MARKETING_SERVICE_DATA } from "../../constants/ServicesDetails/DigitalMarketingConstants";

const DigitalMarketingService = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'search': return <FaSearch />;
      case 'users': return <FaUsers />;
      case 'chart-line': return <FaChartLine />;
      case 'pen': return <FaPen />;
      case 'rocket': return <FaRocket />;
      case 'bullhorn': return <FaBullhorn />;
      case 'envelope': return <FaEnvelope />;
      case 'ad': return <FaAd />;
      case 'analytics': return <FaChartBar />;
      case 'target': return <FaBullseye />;
      case 'trophy': return <FaTrophy />;
      case 'globe': return <FaGlobe />;
      default: return <FaChartLine />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className=" py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              {DIGITAL_MARKETING_SERVICE_DATA.hero.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
              {DIGITAL_MARKETING_SERVICE_DATA.hero.subtitle}
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              {DIGITAL_MARKETING_SERVICE_DATA.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#ff6041] hover:bg-[#e55a3d] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                Get Started
                <IoArrowRedoSharp size={20} />
              </Link>
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
                src="https://images.unsplash.com/photo-1460925705-8d18-4f79-8e8c0d7a4?auto=format&fit=crop&w=800&q=80"
                alt="Digital Marketing Services"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Right - Content */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-0.5 bg-[#ff6041]"></div>
                <span className="text-[#ff6041] text-lg font-semibold tracking-wide">Digital Marketing</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Drive Business Growth with Data-Driven Marketing
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our digital marketing expertise combines creative strategies with data analytics
                to deliver campaigns that increase brand visibility and generate qualified leads.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From SEO optimization to social media management, we create comprehensive
                marketing solutions that convert traffic into loyal customers.
              </p>

              <div className="space-y-4">
                {[
                  "Comprehensive SEO strategies to boost organic rankings",
                  "Targeted social media campaigns for brand awareness",
                  "PPC advertising for immediate lead generation",
                  "Content marketing that engages and converts",
                  "Data-driven approach for measurable results",
                  "Multi-channel marketing integration",
                  "Conversion rate optimization for better ROI",
                  "Advanced analytics and performance tracking",
                  "Custom strategies for business growth",
                  "Continuous optimization and scaling"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="w-4 h-4 text-[#ff6041] shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
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
              <div className="w-12 h-0.5 bg-[#ff6041]"></div>
              <span className="text-[#ff6041] text-lg font-semibold tracking-wide">Core Features</span>
              <div className="w-12 h-0.5 bg-[#ff6041]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Partner in Digital Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our digital marketing services go beyond traditional advertising—offering data-driven,
              multi-channel strategies that deliver measurable results and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIGITAL_MARKETING_SERVICE_DATA.coreFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#ff6041] rounded-full flex items-center justify-center text-white text-2xl mb-6">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
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
              Comprehensive Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end digital marketing services covering all aspects of online promotion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DIGITAL_MARKETING_SERVICE_DATA.servicesFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="w-12 h-0.5 bg-[#ff6041]"></div>
              <span className="text-[#ff6041] text-lg font-semibold tracking-wide">Performance Metrics</span>
              <div className="w-12 h-0.5 bg-[#ff6041]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Key Performance Metrics We Track
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We monitor and optimize the metrics that matter most for your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIGITAL_MARKETING_SERVICE_DATA.keyMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <FaChartBar className="w-5 h-5 text-[#ff6041] shrink-0" />
                  <span className="text-gray-800 font-medium">{metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Marketing Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful marketing campaigns and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIGITAL_MARKETING_SERVICE_DATA.processSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#ff6041] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
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
              <div className="w-12 h-0.5 bg-[#ff6041]"></div>
              <span className="text-[#ff6041] text-lg font-semibold tracking-wide">Technologies</span>
              <div className="w-12 h-0.5 bg-[#ff6041]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Marketing Technologies & Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage industry-leading marketing tools and platforms to drive campaign success.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {DIGITAL_MARKETING_SERVICE_DATA.technologies.map((tech, index) => (
              <span key={index} className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-[#ff6041] hover:text-white transition-all duration-300">
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
              Partner with us to accelerate your digital marketing success and achieve business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIGITAL_MARKETING_SERVICE_DATA.businessBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
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
              Ready to Accelerate Your Digital Growth?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's discuss how we can help you create powerful digital marketing campaigns
              that drive brand visibility and generate qualified leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#ff6041] hover:bg-[#e55a3d] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                Start Your Marketing Campaign
                <IoArrowRedoSharp size={20} />
              </Link>
              <Link
                to="/services"
                className="border-2 border-[#ff6041] text-[#ff6041] hover:bg-[#ff6041] hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingService;