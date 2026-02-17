import { PARTNER_SERVICES, CORE_SERVICES, KEY_FACILITIES } from "../constants/Services";
import { Bookmark } from "../components/Bookmark";
import { FaGear, FaHandshake } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { Link } from "react-router";

const Services = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50 py-16">
      {/* Hero Section */}
      <section className="bg-white mx-auto min-w-86.25 w-full rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5 mb-20">
        <div className="text-center">
          <Bookmark
            icon={<FaGear />}
            title="Our Services"
            className="bg-[#d9d9d9] text-[#ff6041] mx-auto w-fit"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-8 mb-6">
            Comprehensive Technology Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From enterprise consulting to custom development, we provide end-to-end solutions 
            to transform your business with cutting-edge technology.
          </p>
        </div>
      </section>
      
      {/* Partner Services Section */}
      <section className="bg-white mx-auto min-w-86.25 w-full rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5 mb-20">
        <div className="text-center mb-12">
          <Bookmark
            icon={<FaHandshake />}
            title="Authorized Training & Implementation Partner"
            className="bg-[#ff6041] text-white mx-auto w-fit"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-4">
            for SAP, AWS, Zoho and Salesforce
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PARTNER_SERVICES.map((partner, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative group">
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="w-20 h-20 bg-[#ff6041] rounded-xl flex items-center justify-center">
                    <partner.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{partner.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {partner.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center gap-2">
                        <FaCheckCircle className="w-4 h-4 text-[#ff6041] shrink-0" />
                        <span className="text-gray-700 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Link to="#">
                <div className="absolute md:bottom-4 top-1 right-4 bg-[#ff6041] size-12.5 rounded-full flex justify-center items-center cursor-pointer group-hover:bg-black transition-colors duration-300">
                  <IoArrowRedoSharp size={24} className="text-white" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Core Services Section */}
      <section className="bg-white mx-auto min-w-86.25 w-full rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in delivering innovative solutions that drive business growth and digital transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group">
              <div className="w-16 h-16 bg-[#ff6041] rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="space-y-2">
                {service.features.slice(0, 3).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <FaCheckCircle className="w-3 h-3 text-[#ff6041] shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
                {service.features.length > 3 && (
                  <span className="text-[#ff6041] text-sm font-medium">
                    +{service.features.length - 3} more
                  </span>
                )}
              </div>
              <Link to="#">
                <div className="absolute md:bottom-4 top-1 right-4 bg-[#ff6041] size-12.5 rounded-full flex justify-center items-center cursor-pointer group-hover:bg-black transition-colors duration-300">
                  <IoArrowRedoSharp size={24} className="text-white" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

 {/* Services Features Section */}
      <section className="bg-gray-900 py-16 lg:py-20">
        <div className="bg-white mx-auto min-w-86.25 w-full rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image with Overlay */}
            <div className="relative">
              <img 
                src="/bussiness_service.jpg"
                alt="Professional IT Services"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-[#ff6041] rounded-2xl p-6 text-white max-w-xs shadow-xl">
                <div className="flex items-center mb-3">
                  <FaCheckCircle className="w-5 h-5 mr-2" />
                  <h4 className="font-bold text-lg">Qualified Services</h4>
                </div>
                <p className="text-sm leading-relaxed">Transform your business with our innovative technology solutions and expert guidance.</p>
              </div>
            </div>
            
            {/* Right - Content */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-0.5 bg-[#ff6041]"></div>
                <span className="text-[#ff6041] text-lg font-semibold tracking-wide">Services Features</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Supercharge Your Business Growth with Our Cutting-Edge IT Solutions
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your business with our innovative IT solutions, tailored to address your unique challenges and drive growth in today's digital landscape.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#ff6041] rounded-lg flex items-center justify-center shrink-0">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovative IT Solutions</h3>
                    <p className="text-gray-600">Stay ahead with cutting-edge technology tailored to your business needs and industry requirements.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#ff6041] rounded-lg flex items-center justify-center shrink-0">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support Team</h3>
                    <p className="text-gray-600">Dedicated professionals providing 24/7 assistance and strategic guidance for your technology initiatives.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#ff6041] rounded-lg flex items-center justify-center shrink-0">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
                    <p className="text-gray-600">Flexible technology frameworks that grow with your business and adapt to changing market demands.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facilities Section */}
      <section className="bg-[#ff6041] py-20">
        <div className="bg-white mx-auto min-w-86.25 w-full rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Key Facilities
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We provide comprehensive support and resources to ensure your success.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {KEY_FACILITIES.map((facility, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 relative group hover:-translate-y-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#ff6041] rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <facility.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{facility.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{facility.description}</p>
                {/* Interactive hover effect overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#ff6041]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-gray-900 py-16 lg:py-20">
        <div className="bg-white mx-auto min-w-86.25 w-full rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div className="text-gray-900">
              <div className="flex items-center gap-2 mb-6">
                <Bookmark
                  icon={<FaHandshake />}
                  title="GET IN TOUCH"
                  className="bg-[#d9d9d9] text-[#ff6041] w-fit"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Secure Your Business—Reach Out To Our Team Member.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-bold mb-3">Corporate Address</h3>
                  <p className="text-gray-700">Chandra Trading Complex, 2nd Floor,</p>
                  <p className="text-gray-700">Near NIT Garden, IT Park Road, Trimurti</p>
                  <p className="text-gray-700">Nagar, Nagpur, Maharashtra 440022</p>
                  <p className="text-gray-700 mt-2">support@faecomtech.com</p>
                  <p className="text-[#ff6041] font-medium">+91 98765 43210</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Registered Address</h3>
                  <p className="text-gray-700">Plot No. 15, Pathan Layout, Datta Mandir</p>
                  <p className="text-gray-700">Road, Rana Pratap Nagar, Nagpur -</p>
                  <p className="text-gray-700">440022, Maharashtra, India</p>
                  <p className="text-gray-700 mt-2">info@faecomtech.com</p>
                  <p className="text-[#ff6041] font-medium">+91 98765 43210</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                We are a results-driven IT consulting team helping businesses unlock efficiency.
              </p>
              <a href="/contact" className="inline-flex items-center text-[#ff6041] font-semibold group">
                Contact us
                <IoArrowRedoSharp size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-xl">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <input 
                  type="text" 
                  placeholder="First Name*" 
                  className="col-span-1 bg-gray-700 text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6041] transition-all duration-300" 
                />
                <input 
                  type="text" 
                  placeholder="Last Name*" 
                  className="col-span-1 bg-gray-700 text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6041] transition-all duration-300" 
                />
                <input 
                  type="email" 
                  placeholder="Email Address*" 
                  className="col-span-1 sm:col-span-2 bg-gray-700 text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6041] transition-all duration-300" 
                />
                <textarea 
                  placeholder="Message*" 
                  rows={4}
                  className="col-span-1 sm:col-span-2 bg-gray-700 text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6041] transition-all duration-300 resize-none"
                />
                <button 
                  type="submit"
                  className="col-span-1 sm:col-span-2 bg-[#ff6041] hover:bg-black text-white font-semibold py-4 rounded-lg transition-colors duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;