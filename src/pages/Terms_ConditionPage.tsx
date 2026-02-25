import { useState } from "react";
import { Bookmark } from "../components/Bookmark";
import { PrimaryButton } from "../components/Button";
import {
  FaFileContract,
  FaShieldHalved,
  FaUserShield,
  FaCreditCard,
  FaGavel,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa6";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Terms_ConditionPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const lastUpdatedRef = useRef<HTMLDivElement>(null);
  const termsSectionsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string | null>("general");

  const sections = [
    {
      id: "general",
      title: "General Terms",
      icon: <FaFileContract className="w-5 h-5" />,
      content: {
        description:
          "These terms and conditions govern your use of FaecomTech's services and website.",
        points: [
          "By accessing our website and using our services, you accept and agree to be bound by these terms.",
          "These terms apply to all visitors, users, and others who access or use the service.",
          "We may update these terms periodically. Changes will be effective immediately upon posting.",
          "It is your responsibility to review these terms regularly for any updates.",
          "If you disagree with any part of these terms, you may not access the service.",
        ],
      },
    },
    {
      id: "services",
      title: "Service Terms",
      icon: <FaGavel className="w-5 h-5" />,
      content: {
        description:
          "Terms specific to FaecomTech's IT services, consulting, and training programs.",
        points: [
          "All services are provided subject to availability and mutual agreement.",
          "Service specifications and deliverables will be clearly defined in project proposals.",
          "We reserve the right to modify service offerings without prior notice.",
          "Training programs require advance booking and are subject to cancellation policies.",
          "Custom software development projects require detailed scope documentation.",
          "Cloud services (AWS, SAP, Zoho, Salesforce) are subject to respective provider terms.",
        ],
      },
    },
    {
      id: "privacy",
      title: "Privacy & Data Protection",
      icon: <FaShieldHalved className="w-5 h-5" />,
      content: {
        description:
          "How we collect, use, and protect your personal and business information.",
        points: [
          "We collect only necessary information to provide our services effectively.",
          "Personal data is processed in accordance with applicable data protection laws.",
          "We implement industry-standard security measures to protect your information.",
          "Client data is never shared with third parties without explicit consent.",
          "We retain data only as long as necessary for service delivery and legal compliance.",
          "You have the right to access, correct, or delete your personal information.",
        ],
      },
    },
    {
      id: "user",
      title: "User Responsibilities",
      icon: <FaUserShield className="w-5 h-5" />,
      content: {
        description:
          "Your responsibilities when using FaecomTech's services and platform.",
        points: [
          "Provide accurate and complete information when registering for services.",
          "Maintain confidentiality of your account credentials and login details.",
          "Use our services for lawful purposes and in compliance with applicable laws.",
          "Do not attempt to gain unauthorized access to our systems or networks.",
          "Respect intellectual property rights and do not reproduce proprietary content.",
          "Report any security vulnerabilities or suspicious activities immediately.",
        ],
      },
    },
    {
      id: "payment",
      title: "Payment & Billing",
      icon: <FaCreditCard className="w-5 h-5" />,
      content: {
        description:
          "Payment terms, billing cycles, and financial arrangements.",
        points: [
          "Payment terms are specified in individual service agreements.",
          "We accept bank transfers, credit/debit cards, UPI, and digital wallets.",
          "International payments can be made via PayPal or wire transfers.",
          "All prices are quoted in the currency specified in the agreement.",
          "Late payments may incur interest charges as per applicable laws.",
          "Refunds are subject to our refund policy and service agreement terms.",
        ],
      },
    },
    {
      id: "intellectual",
      title: "Intellectual Property",
      icon: <FaShieldHalved className="w-5 h-5" />,
      content: {
        description: "Ownership and usage rights for intellectual property.",
        points: [
          "All FaecomTech materials, including training content and software, remain our intellectual property.",
          "Custom-developed solutions ownership is defined in project agreements.",
          "Clients are granted limited, non-exclusive usage rights for delivered solutions.",
          "Training materials may not be reproduced, distributed, or sold without permission.",
          "Third-party software and tools are subject to their respective license agreements.",
          "We respect and acknowledge all third-party intellectual property rights.",
        ],
      },
    },
    {
      id: "limitation",
      title: "Limitation of Liability",
      icon: <FaGavel className="w-5 h-5" />,
      content: {
        description: "Limitations on our liability and warranty disclaimers.",
        points: [
          "Our services are provided 'as is' without warranties of any kind.",
          "We are not liable for indirect, incidental, or consequential damages.",
          "Our total liability is limited to the fees paid for the specific service.",
          "We are not responsible for data loss, system downtime, or third-party service failures.",
          "Clients are responsible for maintaining backups of their critical data.",
          "Service level agreements (SLAs) specify availability and performance guarantees.",
        ],
      },
    },
    {
      id: "termination",
      title: "Termination",
      icon: <FaFileContract className="w-5 h-5" />,
      content: {
        description: "Conditions under which services may be terminated.",
        points: [
          "Either party may terminate services with written notice as per agreement terms.",
          "We may suspend or terminate services for violation of these terms.",
          "Outstanding payments must be settled upon termination.",
          "Client data will be returned within 30 days of termination.",
          "Training program cancellations are subject to specific refund policies.",
          "Ongoing projects will be completed or appropriately compensated upon termination.",
        ],
      },
    },
  ];

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

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

      // ================= LAST UPDATED SECTION =================
      gsap.from(".last-updated", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lastUpdatedRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // ================= TERMS SECTIONS =================
      gsap.from(".terms-section", {
        opacity: 0,
        y: 60,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: termsSectionsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // ================= CONTACT SECTION =================
      gsap.from(".contact-icon", {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".contact-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".contact-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".contact-button", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="hero-bookmark">
              <Bookmark
                icon={<FaFileContract className="w-6 h-6 text-[#ff6041]" />}
                title="Legal"
                className="bg-white mx-auto w-fit gap-3 mb-8"
              />
            </div>
            <h1 className="hero-title text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="hero-description text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Please read these terms carefully before using FaecomTech's
              services and platform.
            </p>
            <div className="hero-button flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <PrimaryButton title="Contact Us" classname="rounded-[25px] mx-auto md:mx-0" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated Notice */}
      <section ref={lastUpdatedRef} className="bg-[#ff6041] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="last-updated text-center text-white">
            <p className="text-sm font-medium">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section ref={termsSectionsRef} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {sections.map((section) => (
              <div
                key={section.id}
                className="terms-section bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 sm:px-8 sm:py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#ff6041] rounded-xl flex items-center justify-center text-white">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        {section.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {section.content.description}
                      </p>
                    </div>
                  </div>
                  <FaChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      activeSection === section.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeSection === section.id && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 border-t border-gray-100">
                    <ul className="mt-6 space-y-3">
                      {section.content.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#ff6041] rounded-full mt-2 shrink-0" />
                          <span className="text-gray-700 leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="contact-icon w-16 h-16 bg-[#ff6041] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaEnvelope className="w-8 h-8 text-white" />
            </div>
            <h2 className="contact-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Questions About Our Terms?
            </h2>
            <p className="contact-description text-gray-600 mb-8 max-w-2xl mx-auto">
              If you have any questions about these Terms & Conditions, please
              don't hesitate to contact our legal team.
            </p>
            <div className="contact-button flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <PrimaryButton
                  title="Contact Legal Team"
                  classname="rounded-[25px] mx-auto md:mx-0"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms_ConditionPage;
