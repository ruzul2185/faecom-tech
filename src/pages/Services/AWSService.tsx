import { Bookmark } from "../../components/Bookmark";
import { FaAws, FaCloud, FaShieldAlt, FaCogs, FaRocket, FaCheckCircle, FaHandshake, FaServer, FaChartLine } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { Link } from "react-router";
import { AWS_SERVICE_DATA } from "../../constants/ServicesDetails/AWSConstants";

const AWSService = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'cloud': return <FaCloud />;
      case 'server': return <FaServer />;
      case 'rocket': return <FaRocket />;
      case 'cogs': return <FaCogs />;
      case 'shield': return <FaShieldAlt />;
      case 'chart-line': return <FaChartLine />;
      default: return <FaAws />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className=" py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              {AWS_SERVICE_DATA.hero.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
              {AWS_SERVICE_DATA.hero.subtitle}
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              {AWS_SERVICE_DATA.hero.description}
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
                src="/tech/aws.svg"
                alt="AWS Cloud Services"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              {/* <div className="absolute bottom-6 left-6 bg-[#ff6041] rounded-2xl p-6 text-white max-w-xs shadow-xl">
                <div className="flex items-center mb-3">
                  <FaCheckCircle className="w-5 h-5 mr-2" />
                  <h4 className="font-bold text-lg">AWS Expertise</h4>
                </div>
                <p className="text-sm leading-relaxed">Transform your business with our cutting-edge AWS cloud solutions and expert guidance.</p>
              </div> */}
            </div>

            {/* Right - Content */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-0.5 bg-[#ff6041]"></div>
                <span className="text-[#ff6041] text-lg font-semibold tracking-wide">AWS Services</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Innovative Cloud Strategies for Business Growth
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This approach encompasses cloud architecture, deployment, and DevOps, offering customized solutions
                to drive impactful results and long-term success in cloud landscape.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A full suite of services designed to enhance cloud operations, boost performance, and implement
                creative strategies tailored to meet the unique needs of your business.
              </p>

              <div className="space-y-4">
                {[
                  "Tailored AWS strategies aligned with your business goals",
                  "Competitor analysis and cloud market research for actionable insights",
                  "Migration roadmaps for short-term campaigns and long-term growth",
                  "Infrastructure setup and optimization for maximum performance",
                  "Community management to interact with your team and stakeholders",
                  "On-premise and off-premise security implementation",
                  "Targeted resource allocation on AWS services and platforms",
                  "Development of a unique cloud strategy for your business",
                  "Regular performance audits to stay ahead of competitors",
                  "Detailed reports on infrastructure performance and cost optimization",
                  "Insights-driven recommendations for continuous improvement"
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

      {/* Services Core Features */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="w-12 h-0.5 bg-[#ff6041]"></div>
              <span className="text-[#ff6041] text-lg font-semibold tracking-wide">Services Core Features</span>
              <div className="w-12 h-0.5 bg-[#ff6041]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Partner in Cloud Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services go beyond traditional cloud solutions—offering innovative, data-driven, and tailored strategies
              to help your business thrive in the cloud landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AWS_SERVICE_DATA.servicesFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-page and Off-page Features */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive AWS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end AWS services covering all aspects of cloud infrastructure and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">On-premise and Off-premise</h3>
              {[
                "On-page and off-page optimization for better cloud performance",
                "Targeted resource allocation on AWS platforms",
                "Development of a unique cloud strategy for your business",
                "Regular performance audits to stay ahead of competitors",
                "Detailed reports on infrastructure performance and cost optimization"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="w-4 h-4 text-[#ff6041] shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Targeted Cloud Campaigns</h3>
              {[
                "Targeted ad campaigns on AWS services and platforms",
                "Brand Identity Creation for cloud solutions",
                "Insights-driven recommendations for continuous improvement",
                "Data-driven decisions for cloud optimization",
                "Transparent reporting for cloud performance"
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

      {/* Process Section */}
      <section className="bg-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our AWS Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful AWS implementation and migration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AWS_SERVICE_DATA.processSteps.map((item, index) => (
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
              AWS Technologies We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the full power of AWS ecosystem to deliver comprehensive cloud solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {AWS_SERVICE_DATA.technologies.map((tech, index) => (
              <span key={index} className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-[#ff6041] hover:text-white transition-all duration-300">
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
              Ready to Transform Your Business with AWS?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's discuss how we can help you leverage the power of AWS to accelerate your business growth
              and achieve your cloud objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#ff6041] hover:bg-[#e55a3d] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                Start Your AWS Journey
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

export default AWSService;