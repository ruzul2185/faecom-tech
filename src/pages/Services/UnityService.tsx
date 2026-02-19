import {
  FaGamepad,
  FaCode,
  FaCube,
  FaCheckCircle,
  FaRocket,
  FaMobileAlt,
  FaDesktop,
  FaVrCardboard,
  FaPaintBrush,
  FaTrophy,
  FaChartLine,
  FaUsers,
  FaStar,
  FaUnity,
} from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { UNITY_SERVICE_DATA } from "../../constants/ServicesDetails/UnityConstants";
import { Bookmark } from "../../components/Bookmark";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import { PrimaryButton } from "../../components/Button";

const UnityService = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "cube":
        return <FaCube />;
      case "code":
        return <FaCode />;
      case "gamepad":
        return <FaGamepad />;
      case "rocket":
        return <FaRocket />;
      case "mobile":
        return <FaMobileAlt />;
      case "desktop":
        return <FaDesktop />;
      case "vr":
        return <FaVrCardboard />;
      case "paint":
        return <FaPaintBrush />;
      case "trophy":
        return <FaTrophy />;
      case "chart":
        return <FaChartLine />;
      case "users":
        return <FaUsers />;
      case "star":
        return <FaStar />;
      default:
        return <FaGamepad />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mx-auto min-w-86.25 w-full rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5 items-center my-20">
        <Bookmark
          icon={<FaGamepad />}
          title="Unity Game Development"
          className="bg-white text-[#ff6041] mx-auto w-fit gap-3"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-8 mb-6">
          {UNITY_SERVICE_DATA.hero.title}
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-442.5 mx-auto">
          {UNITY_SERVICE_DATA.hero.subtitle}
        </p>
        <p className="text-xl text-gray-600 text-center max-w-442.5 mx-auto">
          {UNITY_SERVICE_DATA.hero.description}
        </p>
        <a href="/contact">
          <PrimaryButton title="Get Started" classname="rounded-[25px]" />
        </a>
      </section>

      {/* Main Content Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <img
                src="/unity-bg.png"
                alt="Unity Game Development"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Right - Content */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                {/* <div className="w-12 h-0.5 bg-[#ff6041]"></div>
                <span className="text-[#ff6041] text-lg font-semibold tracking-wide">
                  Unity Development
                </span> */}
                <Bookmark
                  icon={<FaUnity />}
                  title="Unity Development"
                  className="bg-white text-[#ff6041] mx-auto w-fit gap-3"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Create Immersive Gaming Experiences with Unity
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our Unity game development expertise combines creative vision
                with technical excellence to deliver engaging games that
                captivate players across all platforms.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From casual mobile games to complex multiplayer experiences, we
                build games that stand out in the competitive gaming market with
                stunning visuals and smooth gameplay.
              </p>

              <div className="space-y-4">
                {[
                  "Cross-platform game development for mobile, web, and desktop",
                  "Advanced 3D modeling and animation integration",
                  "Multiplayer networking and real-time gameplay",
                  "AR/VR immersive gaming experiences",
                  "Optimized performance for all device types",
                  "Monetization strategies with ads and in-app purchases",
                  "Comprehensive game testing and quality assurance",
                  "App Store and Play Store publishing support",
                  "Post-launch updates and feature expansion",
                  "Analytics integration for player behavior insights",
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
                className="text-[#ff6041] bg-white border gap-3"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Partner in Game Development Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Unity development services go beyond traditional game
              building—offering innovative, immersive, and high-performance
              gaming experiences that engage and retain players.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {UNITY_SERVICE_DATA.coreFeatures.map((feature, index) => (
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

      {/* Visual Effects Showcase */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center gap-2 mb-6 justify-center">
              {/* <div className="w-12 h-0.5 bg-[#ff6041]"></div>
              <span className="text-[#ff6041] text-lg font-semibold tracking-wide">
                Visual Effects
              </span>
              <div className="w-12 h-0.5 bg-[#ff6041]"></div> */}
              <Bookmark
                title="Visual Effects"
                icon={<BsStars color="#ff6041" />}
                className="text-[#ff6041] bg-white border gap-3"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Stunning 3D Effects & Visual Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create breathtaking visual effects that bring your games to
              life with cutting-edge Unity 3D capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <img
                src="/unity-particle.avif"
                alt="Unity 3D Visual Effects"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Advanced Visual Capabilities
              </h3>
              {UNITY_SERVICE_DATA.visualEffects.map((effect, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaStar className="w-5 h-5 text-[#ff6041] shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">
                    {effect}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Features */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Game Development Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end Unity game development services covering all
              aspects of game creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {UNITY_SERVICE_DATA.servicesFeatures.map((feature, index) => (
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
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Advanced Gaming Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond core development, we offer specialized gaming features to
              enhance player experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Multiplayer Systems
              </h3>
              {UNITY_SERVICE_DATA.additionalCapabilities
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
                Monetization & Analytics
              </h3>
              {UNITY_SERVICE_DATA.additionalCapabilities
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
              Our Game Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful game
              development and launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UNITY_SERVICE_DATA.processSteps.map((item, index) => (
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
                className="text-[#ff6041] bg-white border gap-3"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Game Development Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage industry-leading Unity technologies and tools to
              create exceptional gaming experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {UNITY_SERVICE_DATA.technologies.map((tech, index) => (
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
              Partner with us to create successful games that drive engagement
              and revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {UNITY_SERVICE_DATA.businessBenefits.map((benefit, index) => (
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
              Ready to Create Your Next Game Hit?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's discuss how we can help you turn your gaming vision into an
              immersive and successful Unity game that captivates players
              worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#ff6041] hover:bg-[#e55a3d] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                Start Your Game Project
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

export default UnityService;
