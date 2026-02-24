import {
  PARTNER_SERVICES,
  CORE_SERVICES,
  KEY_FACILITIES,
} from "../../constants/Services";
import { Bookmark } from "../../components/Bookmark";
import { FaGear, FaHandshake } from "react-icons/fa6";
import { FaBalanceScale, FaCheckCircle } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import { useState } from "react";
import { toast } from "sonner";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const partnerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const facilitiesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Set initial states for animation elements
      gsap.set(
        ".partner-bookmark, .partner-heading, .partner-card, .core-heading, .core-subtext, .core-service-card, .features-left, .features-right, .features-bookmark, .features-heading, .features-item, .facilities-heading, .facilities-subtext, .facility-card, .contact-bookmark, .contact-heading, .contact-left, .contact-form",
        {
          opacity: 0,
        },
      );

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
        );

      // ================= PARTNER SERVICES SECTION =================
      gsap.fromTo(
        ".partner-bookmark",
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: partnerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".partner-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: partnerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".partner-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: partnerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      // ================= CORE SERVICES SECTION =================
      gsap.fromTo(
        ".core-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: coreRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".core-subtext",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: coreRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".core-service-card",
        { opacity: 0, scale: 0.9, y: 60 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: coreRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );

      // ================= FEATURES SECTION =================
      gsap.fromTo(
        ".features-left",
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".features-right",
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".features-bookmark",
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".features-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".features-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );

      // ================= FACILITIES SECTION =================
      gsap.fromTo(
        ".facilities-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: facilitiesRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".facilities-subtext",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: facilitiesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".facility-card",
        { opacity: 0, scale: 0.8, y: 60 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: facilitiesRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      // ================= CONTACT SECTION =================
      gsap.fromTo(
        ".contact-bookmark",
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".contact-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".contact-left",
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".contact-form",
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      // Fallback: Ensure content is visible after 3 seconds even if animations fail
      setTimeout(() => {
        gsap.set(
          ".partner-bookmark, .partner-heading, .partner-card, .core-heading, .core-subtext, .core-service-card, .features-left, .features-right, .features-bookmark, .features-heading, .features-item, .facilities-heading, .facilities-subtext, .facility-card, .contact-bookmark, .contact-heading, .contact-left, .contact-form",
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
          },
        );
      }, 3000);
    },
    { scope: container },
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      toast.error("Please fill all required fields.");
      return;
    }

    setIsSubmitting(true);

    const loadingToast = toast.loading("Sending message...");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzQem7mYsZYdcb_tSDD8lOAnJaraKE8kMpOekGr6CBzzWlOkS1UDryPOI1joE1w_9Mtxg/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully! 🚀", { id: loadingToast });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.", {
        id: loadingToast,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={container} className="min-h-screen bg-linear-to-b  py-16">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="mx-auto min-w-86.25 w-full rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5 mb-20"
      >
        <div className="text-center">
          <div className="hero-bookmark">
            <Bookmark
              icon={<FaGear />}
              title="Our Services"
              className="bg-white text-[#ff6041] mx-auto w-fit gap-3"
            />
          </div>

          <h1 className="hero-heading text-4xl md:text-6xl font-bold text-gray-900 mt-8 mb-6">
            Comprehensive Technology Solutions
          </h1>
          <p className="hero-subtext text-xl text-gray-600 max-w-3xl mx-auto">
            From enterprise consulting to custom development, we provide
            end-to-end solutions to transform your business with cutting-edge
            technology.
          </p>
        </div>
      </section>

      {/* Partner Services Section */}
      <section
        ref={partnerRef}
        className="bg-white mx-auto min-w-86.25 w-full rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5 mb-20"
      >
        <div className="text-center mb-12">
          <div className="partner-bookmark">
            <Bookmark
              icon={<FaHandshake className="mr-2 md:mr-0" />}
              title="Certified Solutions & Training Specialist"
              className="bg-[#ff6041] text-white mx-auto w-fit text-2xl"
            />
          </div>
          <h2 className="partner-heading text-3xl md:text-4xl font-bold text-black mt-6 mb-4">
            for SAP, AWS, Zoho and Salesforce
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PARTNER_SERVICES.map((partner, index) => (
            <div
              key={index}
              className="partner-card bg-[#efeadf] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative group"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="w-20 h-20 bg-[#ff6041] rounded-xl flex items-center justify-center">
                    <partner.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {partner.name}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {partner.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex items-center gap-2"
                      >
                        <FaCheckCircle className="w-4 h-4 text-[#ff6041] shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <a href={partner.link}>
                <div className="absolute md:bottom-4 top-4 right-4 bg-[#ff6041] size-12.5 rounded-full flex justify-center items-center cursor-pointer group-hover:bg-black transition-colors duration-300">
                  <IoArrowRedoSharp size={24} className="text-white" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Core Services Section */}
      <section
        ref={coreRef}
        className="relative mx-auto min-w-86.25 w-full rounded-[50px] overflow-hidden flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5 mb-20"
      >
        <picture className="absolute inset-0 -z-10 w-full h-full">
          <source
            srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771951641/bg_nqb1al.avif"
            type="image/avif"
          />
          <source
            srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771951642/bg_j4qvnl.webp"
            type="image/webp"
          />
          <img
            src="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771952156/bg_d1vgqz.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="text-center mb-12">
          <h2 className="core-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Our Core Services
          </h2>
          <p className="core-subtext text-xl text-gray-200 max-w-3xl mx-auto">
            We specialize in delivering innovative solutions that drive business
            growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service, index) => (
            <a
              href={service.link}
              key={index}
              className="core-service-card relative group overflow-hidden bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Expanding Circle Background */}
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="w-0 h-0 bg-[#ff6041] rounded-full transition-all duration-500 ease-out group-hover:w-[250%] group-hover:h-[250%]" />
              </span>

              {/* Content Wrapper (above ripple) */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#ff6041] rounded-xl flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <FaCheckCircle className="w-3 h-3 text-[#ff6041] shrink-0 group-hover:text-white transition-colors duration-300" />
                      <span className="text-gray-700 text-sm group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}

                  {/* {service.features.length > 3 && (
                    <span className="text-[#ff6041] text-sm font-medium group-hover:text-white transition-colors duration-300">
                      +{service.features.length - 3} more
                    </span>
                  )} */}
                </div>
              </div>

              {/* Arrow Button */}
              <div>
                <div className="absolute md:bottom-4 top-4 right-4 bg-[#ff6041] w-12 h-12 rounded-full flex justify-center items-center cursor-pointer group-hover:bg-black transition-colors duration-300 z-20">
                  <IoArrowRedoSharp size={24} className="text-white" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Services Features Section */}
      <section ref={featuresRef} className="py-16 lg:py-20">
        <div className="mx-auto min-w-86.25 w-full rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image with Overlay */}
            <div className="features-left relative">
              <picture>
                <source
                  srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771877512/Supercharge_Your_Business_Growth_with_Our_Cutting_Edge_IT_Solutions_izgkr9.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771877513/Supercharge_Your_Business_Growth_with_Our_Cutting_Edge_IT_Solutions_ftjyws.webp"
                  type="image/webp"
                />
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dlvjnevcw/image/upload/v1771877513/Supercharge_Your_Business_Growth_with_Our_Cutting_Edge_IT_Solutions_ynrvao.png" // fallback
                  alt="Professional IT Services"
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </picture>
              <div className="absolute bottom-6 left-6 bg-[#ff6041] rounded-2xl p-6 text-white max-w-xs shadow-xl">
                <div className="flex items-center mb-3">
                  <FaCheckCircle className="w-5 h-5 mr-2" />
                  <h4 className="font-bold text-lg">Qualified Services</h4>
                </div>
                <p className="text-sm leading-relaxed">
                  Transform your business with our innovative technology
                  solutions and expert guidance.
                </p>
              </div>
            </div>

            {/* Right - Content */}
            <div className="features-right">
              <div className="flex items-center gap-2 mb-6">
                <div className="features-bookmark">
                  <Bookmark
                    title="Services Features"
                    icon={<MdDesignServices color="#ff6041" size={30} />}
                    className="bg-white text-[#ff6041] gap-3"
                  />
                </div>
              </div>

              <h2 className="features-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Supercharge Your Business Growth with Our Cutting-Edge IT
                Solutions
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your business with our innovative IT solutions,
                tailored to address your unique challenges and drive growth in
                today's digital landscape.
              </p>

              <div className="space-y-6">
                <div className="features-item flex gap-4">
                  <div className="w-12 h-12 bg-[#ff6041] rounded-lg flex items-center justify-center shrink-0">
                    <GrTechnology className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Innovative IT Solutions
                    </h3>
                    <p className="text-gray-600">
                      Stay ahead with cutting-edge technology tailored to your
                      business needs and industry requirements.
                    </p>
                  </div>
                </div>

                <div className="features-item flex gap-4">
                  <div className="w-12 h-12 bg-[#ff6041] rounded-lg flex items-center justify-center shrink-0">
                    <BiSupport className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Expert Support Team
                    </h3>
                    <p className="text-gray-600">
                      Dedicated professionals providing 24/7 assistance and
                      strategic guidance for your technology initiatives.
                    </p>
                  </div>
                </div>

                <div className="features-item flex gap-4">
                  <div className="w-12 h-12 bg-[#ff6041] rounded-lg flex items-center justify-center shrink-0">
                    <FaBalanceScale className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Scalable Solutions
                    </h3>
                    <p className="text-gray-600">
                      Flexible technology frameworks that grow with your
                      business and adapt to changing market demands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facilities Section */}
      <section ref={facilitiesRef} className=" py-20">
        <div className="bg-[#ff6041] mx-auto min-w-86.25 w-full rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5">
          <div className="text-center mb-12">
            <h2 className="facilities-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Our Key Facilities
            </h2>
            <p className="facilities-subtext text-xl text-white/90 max-w-3xl mx-auto">
              We provide comprehensive support and resources to ensure your
              success.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {KEY_FACILITIES.map((facility, index) => (
              <div
                key={index}
                className="facility-card bg-white rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 relative group hover:-translate-y-1"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#ff6041] rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <facility.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {facility.description}
                </p>
                {/* Interactive hover effect overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#ff6041]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section ref={contactRef} className="py-16 lg:py-20">
        <div className="bg-white mx-auto min-w-86.25 w-full rounded-[50px] flex flex-col gap-4 py-12.5 lg:w-[93%] px-5 sm:px-16 max-w-442.5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div className="contact-left text-gray-900">
              <div className="flex items-center gap-2 mb-6">
                <div className="contact-bookmark">
                  <Bookmark
                    icon={<FaHandshake />}
                    title="Get In Touch"
                    className="bg-[#ff6041] text-white w-fit gap-3"
                  />
                </div>
              </div>
              <h2 className="contact-heading text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Secure Your Business. Reach Out To Our Team Member.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-bold mb-3">Corporate Address</h3>
                  <p className="text-gray-700">
                    Chandra Trading Complex, 2nd Floor,
                  </p>
                  <p className="text-gray-700">
                    Near NIT Garden, IT Park Road, Trimurti
                  </p>
                  <p className="text-gray-700">
                    Nagar, Nagpur, Maharashtra 440022
                  </p>
                  <p className="text-gray-700 mt-2">support@faecomtech.com</p>
                  <p className="text-[#ff6041] font-medium">+91 98765 43210</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Registered Address</h3>
                  <p className="text-gray-700">
                    Plot No. 15, Pathan Layout, Datta Mandir
                  </p>
                  <p className="text-gray-700">
                    Road, Rana Pratap Nagar, Nagpur -
                  </p>
                  <p className="text-gray-700">440022, Maharashtra, India</p>
                  <p className="text-gray-700 mt-2">info@faecomtech.com</p>
                  <p className="text-[#ff6041] font-medium">+91 98765 43210</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                We are a results-driven IT consulting team helping businesses
                unlock efficiency.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-[#ff6041] font-semibold group"
              >
                Contact us
                <IoArrowRedoSharp
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
            </div>

            {/* Right - Contact Form */}
            <div className="contact-form bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-xl">
              <form
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name*"
                  className="col-span-1 bg-gray-700 text-white placeholder-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6041] transition-all duration-300"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name*"
                  className="col-span-1 bg-gray-700 text-white placeholder-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6041] transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address*"
                  className="col-span-1 sm:col-span-2 bg-gray-700 text-white placeholder-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6041] transition-all duration-300"
                />
                <textarea
                  placeholder="Message*"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="col-span-1 sm:col-span-2 bg-gray-700 text-white placeholder-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6041] transition-all duration-300 resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`cursor-pointer col-span-1 sm:col-span-2 bg-[#ff6041] hover:bg-black text-white font-semibold py-4 rounded-lg transition-colors duration-300 transform hover:scale-105 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
