import { useState, type FormEventHandler } from "react";
import { Bookmark } from "../components/Bookmark";
import { SubmitButton } from "../components/Button";
import { FaLocationDot, FaPhone, FaClock, FaPaperPlane } from "react-icons/fa6";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const infoCardsRef = useRef<HTMLDivElement>(null);
  const worldMapRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    option: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        );

      // ================= INFO CARDS SECTION =================
      // Test animation without scroll trigger first

      gsap.to(".info-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });
      // ================= WORLD MAP SECTION =================
      gsap.from(".world-map-bookmark", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: worldMapRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".world-map-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: worldMapRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".world-map-container", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: worldMapRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".location-card", {
        opacity: 0,
        y: 30,
        // stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: worldMapRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= CONTACT FORM SECTION =================
      gsap.from(".contact-map-bookmark", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".contact-map-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".contact-map-iframe", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".contact-form-bookmark", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".contact-form-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".form-field", {
        opacity: 0,
        y: 30,
        // stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".form-button", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container },
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const GOOGLE_SHEETS_URL =
      "https://script.google.com/macros/s/AKfycbzQem7mYsZYdcb_tSDD8lOAnJaraKE8kMpOekGr6CBzzWlOkS1UDryPOI1joE1w_9Mtxg/exec";

    const loadingToast = toast.loading("Sending message...");

    try {
      const form = new FormData();

      form.append("formType", "contactForm");
      form.append("fullName", formData.fullName);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("option", formData.option);
      form.append("message", formData.message);
      form.append("timestamp", new Date().toISOString());

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast.success("Message sent successfully 🚀", { id: loadingToast });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        option: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again ❌", {
        id: loadingToast,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoCards = [
    {
      icon: <FaLocationDot className="w-6 h-6 sm:w-7 sm:h-7 text-white" />,
      title: "Our Address",
      content: [
        "Corporate Address:",
        "2nd Floor, Chandra Building IT Park Road, Nagpur 440022",
        "Maharashtra, India",
      ],
      isOrange: false,
    },
    {
      icon: <FaPhone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />,
      title: "Contact Us",
      content: ["Mobile: +91 99703 50188", "Email: info@faecomtech.com"],
      isOrange: false,
    },
    {
      icon: <FaClock className="w-6 h-6 sm:w-7 sm:h-7 text-white" />,
      title: "Open Hours",
      content: ["Mon - Fri: 10:00 AM - 07:00 PM", "Support: 24/7 Available"],
      isOrange: false,
    },
  ];

  const clientLocations = [
    { name: "Los Angeles", country: "USA", lat: 34.0522, lng: -118.2437 },
    { name: "Leidschendam", country: "Netherlands", lat: 52.077, lng: 4.3974 },
    { name: "Mumbai", country: "India", lat: 19.076, lng: 72.8777 },
  ];

  return (
    <div ref={container} className="flex flex-col items-stretch gap-30 mt-30">
      {/* ================= HERO SECTION ================= */}
      <section
        ref={heroRef}
        className="max-w-5xl mx-auto w-[93%] text-center flex flex-col gap-6 justify-center items-center"
      >
        <div className="hero-bookmark">
          <Bookmark
            icon={
              <FaPaperPlane className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6041]" />
            }
            title="Let's Connect"
            className="bg-white gap-3"
          />
        </div>
        <div className="hero-title text-4xl sm:text-[64px] font-medium">
          <p>
            Start Your <span className="text-[#ff6041]">Tech Journey</span>
          </p>
        </div>
        <div className="hero-description text-[14px] sm:text-[20px]/[40px] font-medium text-[#7e7e7e] max-w-xl">
          <p>
            We would love to hear from you. Reach out to us for any inquiries or
            collaboration opportunities.
          </p>
        </div>
      </section>

      {/* ================= INFO CARDS SECTION ================= */}
      <section ref={infoCardsRef} className="mx-auto w-[93%] max-w-442.5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className={`info-card opacity-0 group/card relative overflow-hidden rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
                card.isOrange
                  ? "bg-[#ff6041] text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {/* Animated radial background */}
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                  className={`w-0 h-0 rounded-full transition-all duration-500 ease-out group-hover/card:w-[200%] group-hover/card:h-[200%] ${
                    card.isOrange ? "bg-white/20" : "bg-[#ff6041]"
                  }`}
                />
              </span>

              {/* Content wrapper */}
              <div className="relative z-10 flex flex-col h-full group-hover/card:text-white transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      card.isOrange
                        ? "bg-black group-hover/card:bg-white/20"
                        : "bg-[#ff6041] group-hover/card:bg-white/20"
                    }`}
                  >
                    <span
                      className={`transition-colors duration-300 ${card.isOrange ? "text-white" : "text-white"}`}
                    >
                      {card.icon}
                    </span>
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-lg sm:text-xl mb-1 transition-colors duration-300 ${card.isOrange ? "text-white" : "text-gray-800 group-hover/card:text-white"}`}
                    >
                      {card.title}
                    </h3>
                    {card.content.map((line, i) => (
                      <p
                        key={i}
                        className={`text-sm sm:text-base transition-colors duration-300 ${card.isOrange ? "text-white/90" : "text-gray-600 group-hover/card:text-white/90"}`}
                      >
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
      <section ref={worldMapRef} className="mx-auto w-[93%] max-w-442.5">
        <div className="bg-[#EFEADF] rounded-[50px] sm:p-12 lg:py-16 lg:px-0">
          <div className="text-center mb-8 sm:mb-12">
            <div className="world-map-bookmark">
              <Bookmark
                icon={
                  <FaLocationDot className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6041] gap-3" />
                }
                title="Global Presence"
                className="bg-white mx-auto w-fit gap-3"
              />
            </div>
            <div className="world-map-heading text-[30px] font-medium sm:text-5xl mt-6">
              <p>
                Our{" "}
                <span className="text-[#ff6041]">Learning & Technology</span>{" "}
                Partners
              </p>
            </div>
          </div>

          {/* Leaflet Map Container */}
          <div className="world-map-container relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
            <div className="relative w-full h-100 sm:h-125 overflow-hidden rounded-2xl">
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
                        <h3
                          style={{
                            margin: "0 0 4px 0",
                            color: "#ff6041",
                            fontWeight: "bold",
                          }}
                        >
                          {location.name}
                        </h3>
                        <p style={{ margin: 0, color: "#666" }}>
                          {location.country}
                        </p>
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
                  className="location-card bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-[#ff6041]/30 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#ff6041]/10 rounded-full flex items-center justify-center group-hover:bg-[#ff6041]/20 transition-colors">
                      <FaLocationDot className="w-5 h-5 text-[#ff6041]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-[#ff6041] transition-colors">
                        {location.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {location.country}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM & MAP SECTION ================= */}
      <section
        ref={contactFormRef}
        className="mx-auto min-w-86.25 w-[93%] max-w-442.5 rounded-[50px] py-16 text-white overflow-hidden relative"
      >
        {/* Background image with AVIF/WebP/PNG fallback */}
        <picture className="absolute inset-0 -z-10 w-full h-full">
          <source
            srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771952313/hero-bg_jykw27.avif"
            type="image/avif"
          />
          <source
            srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771952315/hero-bg_s8ctrj.webp"
            type="image/webp"
          />
          <img
            src="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771952314/hero-bg_ktb0ge.png"
            alt="Hero Background"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </picture>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6041]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFC2A7]/10 rounded-full blur-3xl" />

        <div className="py-12.5 w-[90%] mx-auto flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-start relative z-10">
          {/* Left - Google Map */}
          <div className="flex flex-col gap-6 lg:w-[42%]">
            <div className="mb-4">
              <div className="contact-map-bookmark">
                <Bookmark
                  icon={
                    <FaLocationDot className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6041]" />
                  }
                  title="VISIT US"
                  className="bg-white/10 w-fit border border-white/20 gap-3"
                />
              </div>
              <div className="contact-map-heading text-[28px] font-semibold sm:text-4xl mt-4">
                <p>
                  Find Us On <span className="text-[#ff6041]">Map</span>
                </p>
              </div>
            </div>
            <div className="contact-map-iframe rounded-3xl overflow-hidden shadow-2xl h-75 sm:h-100 border-4 border-white/10">
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
              <div className="contact-form-bookmark">
                <Bookmark
                  icon={
                    <FaPaperPlane className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6041]" />
                  }
                  title="SEND MESSAGE"
                  className="bg-white/10 w-fit border border-white/20 gap-3"
                />
              </div>
              <div className="contact-form-heading text-[28px] font-semibold sm:text-4xl mt-4">
                <p>
                  Get In <span className="text-[#ff6041]">Touch</span>
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="form-field grid grid-cols-1 sm:grid-cols-2 gap-5">
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

              <div className="form-field grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    <option value="" className="bg-[#1a1a1a]" disabled>
                      Select a Service
                    </option>
                    <option value="aws-services" className="bg-[#1a1a1a]">
                      AWS Services/Training
                    </option>
                    <option value="sap-services" className="bg-[#1a1a1a]">
                      SAP Services/Training
                    </option>
                    <option value="zoho-services" className="bg-[#1a1a1a]">
                      Zoho Services/Training
                    </option>
                    <option
                      value="salesforce-services"
                      className="bg-[#1a1a1a]"
                    >
                      Salesforce Services/Training
                    </option>
                    <option
                      value="software-development"
                      className="bg-[#1a1a1a]"
                    >
                      Software Development
                    </option>
                    <option value="web-development" className="bg-[#1a1a1a]">
                      Web Development
                    </option>
                    <option value="game-development" className="bg-[#1a1a1a]">
                      Game Development
                    </option>
                    <option value="digital-marketing" className="bg-[#1a1a1a]">
                      Digital Marketing
                    </option>
                    <option value="quality-analysis" className="bg-[#1a1a1a]">
                      Quality Analysis & Testing
                    </option>
                    <option value="training-programs" className="bg-[#1a1a1a]">
                      Professional Training Programs
                    </option>
                    <option value="other" className="bg-[#1a1a1a]">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              <div className="form-field group">
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

              <div className="form-button">
                <SubmitButton
                  title={isSubmitting ? "Sending..." : "Send Message"}
                  disabled={isSubmitting}
                  classname="rounded-full mx-auto px-10"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
