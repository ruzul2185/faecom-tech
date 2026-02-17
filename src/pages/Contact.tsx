import { useState, type FormEventHandler } from "react";
import { Bookmark } from "../components/Bookmark";
import { PrimaryButton } from "../components/Button";
import { FaLocationDot, FaPhone, FaClock, FaPaperPlane } from "react-icons/fa6";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    option: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Google Sheets Web App URL - Replace with your actual Google Apps Script URL
    const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ fullName: "", email: "", phone: "", option: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoCards = [
    {
      icon: <FaLocationDot className="w-6 h-6 sm:w-7 sm:h-7 text-white" />,
      title: "Our Address",
      content: ["Faecom Tech Pvt. Ltd.", "Office Address: 2nd Floor, Chandra Building IT Park Road, Nagpur 440022", "Maharashtra, India"],
      isOrange: false,
    },
    {
      icon: <FaPhone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />,
      title: "Contact Us",
      content: ["Mobile: +91 88888 88888", "Email: info@faecomtech.com", "Support: support@faecomtech.com"],
      isOrange: false,
    },
    {
      icon: <FaClock className="w-6 h-6 sm:w-7 sm:h-7 text-white" />,
      title: "Open Hours",
      content: ["Mon - Sat: 9:00 - 18:00", "Sunday: Closed", "Support: 24/7 Available"],
      isOrange: false,
    },
  ];

  const clientLocations = [
    { name: "Los Angeles", country: "USA", lat: 34.0522, lng: -118.2437 },
    { name: "Leidschendam", country: "Netherlands", lat: 52.077, lng: 4.3974 },
    { name: "Mumbai", country: "India", lat: 19.076, lng: 72.8777 },
  ];

  return (
    <div className="flex flex-col items-stretch gap-30 mt-30">
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-5xl mx-auto w-[93%] text-center flex flex-col gap-6 justify-center items-center">
        <Bookmark
          icon={<FaPaperPlane className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6041]" />}
          title="Let’s Connect"
          className="bg-white"
        />
        <div className="text-4xl sm:text-[64px] font-medium">
          <p>
            Start Your  <span className="text-[#ff6041]">Tech Journey</span>
          </p>
        </div>
        <div className="text-[14px] sm:text-[20px]/[40px] font-medium text-[#7e7e7e] max-w-xl">
          <p>We would love to hear from you. Reach out to us for any inquiries or collaboration opportunities.</p>
        </div>
      </section>

      {/* ================= INFO CARDS SECTION ================= */}
      <section className="mx-auto w-[93%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className={`group/card relative overflow-hidden rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
                card.isOrange 
                  ? "bg-[#ff6041] text-white" 
                  : "bg-white text-gray-800"
              }`}
            >
              {/* Animated radial background */}
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className={`w-0 h-0 rounded-full transition-all duration-500 ease-out group-hover/card:w-[200%] group-hover/card:h-[200%] ${
                  card.isOrange ? "bg-white/20" : "bg-[#ff6041]"
                }`} />
              </span>

              {/* Content wrapper */}
              <div className="relative z-10 flex flex-col h-full group-hover/card:text-white transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    card.isOrange ? "bg-black group-hover/card:bg-white/20" : "bg-[#ff6041] group-hover/card:bg-white/20"
                  }`}>
                    <span className={`transition-colors duration-300 ${card.isOrange ? "text-white" : "text-white"}`}>
                      {card.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg sm:text-xl mb-1 transition-colors duration-300 ${card.isOrange ? "text-white" : "text-gray-800 group-hover/card:text-white"}`}>
                      {card.title}
                    </h3>
                    {card.content.map((line, i) => (
                      <p key={i} className={`text-sm sm:text-base transition-colors duration-300 ${card.isOrange ? "text-white/90" : "text-gray-600 group-hover/card:text-white/90"}`}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WORLD MAP SECTION ================= */}
      <section className="mx-auto w-[93%]">
        <div className="bg-[#EFEADF] rounded-[50px] p-8 sm:p-12 lg:p-16">
          <div className="text-center mb-8 sm:mb-12">
            <Bookmark
              icon={<FaLocationDot className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6041]" />}
              title="Global Presence"
              className="bg-white mx-auto w-fit"
            />
            <div className="text-[30px] font-medium sm:text-5xl mt-6">
              <p>
                Our <span className="text-[#ff6041]">Learning & Technology</span> Partners
              </p>
            </div>
          </div>
          
          {/* Leaflet Map Container */}
          <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
            <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden rounded-2xl">
              <MapContainer
                center={[20, 0]} // Center of the world map
                zoom={2}
                style={{ height: "100%", width: "100%" }}
                className="rounded-2xl"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {clientLocations.map((location, index) => (
                  <Marker
                    key={index}
                    position={[location.lat, location.lng]}
                    icon={L.divIcon({
                      html: `
                        <div style="
                          background-color: #ff6041;
                          width: 24px;
                          height: 24px;
                          border-radius: 50%;
                          border: 3px solid white;
                          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                          display: flex;
                          align-items: center;
                          justify-content: center;
                        ">
                          <div style="
                            background-color: white;
                            width: 8px;
                            height: 8px;
                            border-radius: 50%;
                          "></div>
                        </div>
                      `,
                      className: "custom-marker",
                      iconSize: [24, 24],
                      iconAnchor: [12, 12],
                    })}
                  >
                    <Popup>
                      <div style={{ padding: "8px", fontFamily: "system-ui" }}>
                        <h3 style={{ margin: "0 0 4px 0", color: "#ff6041", fontWeight: "bold" }}>
                          {location.name}
                        </h3>
                        <p style={{ margin: 0, color: "#666" }}>{location.country}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
            
            {/* Location Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {clientLocations.map((location, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-[#ff6041]/30 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#ff6041]/10 rounded-full flex items-center justify-center group-hover:bg-[#ff6041]/20 transition-colors">
                      <FaLocationDot className="w-5 h-5 text-[#ff6041]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-[#ff6041] transition-colors">
                        {location.name}
                      </h4>
                      <p className="text-sm text-gray-500">{location.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM & MAP SECTION ================= */}
      <section className="bg mx-auto min-w-86.25 w-[93%] rounded-[50px] py-16 text-white overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6041]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFC2A7]/10 rounded-full blur-3xl" />
        
        <div className="py-12.5 w-[90%] mx-auto flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-start relative z-10">
          {/* Left - Google Map */}
          <div className="flex flex-col gap-6 lg:w-[42%]">
            <div className="mb-4">
              <Bookmark
                icon={<FaLocationDot className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6041]" />}
                title="VISIT US"
                className="bg-white/10 w-fit border border-white/20"
              />
              <div className="text-[28px] font-semibold sm:text-4xl mt-4">
                <p>Find Us On <span className="text-[#ff6041]">Map</span></p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] border-4 border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.9858670113013!2d79.04166713478348!3d21.11312962225544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf0048a8052d%3A0x5a8bd0db52fb9ec2!2sFAECOM%20ENGINEERING%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1771153043227!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FaecomTech Office Location"
              />
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="flex flex-col gap-6 lg:w-[52%]">
            <div>
              <Bookmark
                icon={<FaPaperPlane className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6041]" />}
                title="SEND MESSAGE"
                className="bg-white/10 w-fit border border-white/20"
              />
              <div className="text-[28px] font-semibold sm:text-4xl mt-4">
                <p>
                  Get In <span className="text-[#ff6041]">Touch</span>
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="group">
                  <label className="block text-sm font-medium mb-2 text-white/80 group-focus-within:text-[#ff6041] transition-colors">
                    Full Name <span className="text-[#ff6041]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-[#ff6041] transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium mb-2 text-white/80 group-focus-within:text-[#ff6041] transition-colors">
                    Email Address <span className="text-[#ff6041]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-[#ff6041] transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="group">
                  <label className="block text-sm font-medium mb-2 text-white/80 group-focus-within:text-[#ff6041] transition-colors">
                    Phone Number <span className="text-[#ff6041]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-[#ff6041] transition-all duration-300"
                    placeholder="+91 88888 88888"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium mb-2 text-white/80 group-focus-within:text-[#ff6041] transition-colors">
                    Service Interested In
                  </label>
                  <select
                    name="option"
                    value={formData.option}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:bg-white/10 focus:border-[#ff6041] transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#1a1a1a]">Select a service</option>
                    <option value="it-consulting" className="bg-[#1a1a1a]">IT Consulting</option>
                    <option value="software-dev" className="bg-[#1a1a1a]">Software Development</option>
                    <option value="erp-solutions" className="bg-[#1a1a1a]">ERP Solutions</option>
                    <option value="training" className="bg-[#1a1a1a]">Training Programs</option>
                    <option value="other" className="bg-[#1a1a1a]">Other</option>
                  </select>
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium mb-2 text-white/80 group-focus-within:text-[#ff6041] transition-colors">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-[#ff6041] transition-all duration-300 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-green-400 flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 text-red-400 flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                  Something went wrong. Please try again later.
                </div>
              )}

              <PrimaryButton
                title={isSubmitting ? "Sending..." : "Send Message"}
                classname="rounded-full w-full sm:w-auto px-10"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
