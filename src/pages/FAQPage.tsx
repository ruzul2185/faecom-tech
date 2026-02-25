import { useState } from "react";
import { Bookmark } from "../components/Bookmark";
import { PrimaryButton } from "../components/Button";
import {
  FaQuestionCircle,
  FaChevronDown,
  FaUsers,
  FaRocket,
} from "react-icons/fa";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FAQPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const categoryNavRef = useRef<HTMLDivElement>(null);
  const faqSectionsRef = useRef<HTMLDivElement>(null);
  const contactCtaRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
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
          ".hero-buttons",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        );

      // ================= CATEGORY NAVIGATION SECTION =================
      gsap.from(".category-nav-heading", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: categoryNavRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".category-card", {
        opacity: 0,
        scale: 0.9,
        y: 60,

        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: categoryNavRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ================= FAQ SECTIONS - Individual Category Animations =================
      gsap.from(".company-overview-section", {
        opacity: 0,
        y: 60,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".company-overview-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".services-section", {
        opacity: 0,
        y: 60,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".training-programs-section", {
        opacity: 0,
        y: 60,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".training-programs-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".support-maintenance-section", {
        opacity: 0,
        y: 60,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".support-maintenance-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".technology-innovation-section", {
        opacity: 0,
        y: 60,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".technology-innovation-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".faq-category-badge", {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqSectionsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".faq-category-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqSectionsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".faq-item", {
        opacity: 0,
        y: 30,

        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqSectionsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // ================= CONTACT CTA SECTION =================
      gsap.from(".cta-icon", {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactCtaRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".cta-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactCtaRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".cta-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactCtaRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".cta-buttons", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactCtaRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container },
  );

  const faqs = [
    // Company Overview
    {
      category: "Company Overview",
      questions: [
        {
          question: "What is FaecomTech and what do you do?",
          answer:
            "FaecomTech is a leading IT solutions provider specializing in digital transformation, cloud services, and business automation for B2B organizations. We offer comprehensive technology solutions including software development, data analytics, ERP implementations, and enterprise training programs. As an affiliate of Faecom Engineering Pvt. Ltd., we combine engineering expertise with cutting-edge technology to deliver innovative solutions.",
        },
        {
          question: "Where is FaecomTech located?",
          answer:
            "FaecomTech has a global presence with operations across the US, Canada, UK, Middle East, and our headquarters in Nagpur, Maharashtra, India. Our corporate office is located at Chandra Trading Complex, 2nd Floor, Near NIT Garden, IT Park Road, Trimurti Nagar, Nagpur - 440022, Maharashtra.",
        },
        {
          question: "What industries does FaecomTech serve?",
          answer:
            "We primarily serve engineering-based businesses and B2B organizations across various sectors including construction, manufacturing, infrastructure, professional services, real estate, FinTech, SaaS, and technology enterprises. Our solutions are tailored to meet the unique needs of these industries.",
        },
        {
          question: "How long has FaecomTech been in business?",
          answer:
            "FaecomTech has over a decade of experience in the IT industry. Our parent company, Faecom Engineering Pvt. Ltd., has been a trusted name in structural engineering for many years, and we've built upon that foundation to become a leading technology solutions provider.",
        },
      ],
    },

    // Services
    {
      category: "Services",
      questions: [
        {
          question: "What services does FaecomTech offer?",
          answer:
            "We offer a comprehensive suite of IT services including: AWS, SAP, Zoho, and Salesforce implementations and consulting, custom software development, digital transformation consulting, cloud services, data analytics, ERP systems, web and mobile development, QA testing, Unity game development, digital marketing, and enterprise training programs.",
        },
        {
          question: "Do you provide cloud services?",
          answer:
            "Yes, we are certified AWS partners offering end-to-end cloud solutions including infrastructure setup, migration services, DevOps implementation, cloud architecture design, and ongoing support. We help businesses leverage the power of AWS to achieve scalability, cost optimization, and improved performance.",
        },
        {
          question: "What ERP systems do you work with?",
          answer:
            "We specialize in SAP, Zoho, and Salesforce ERP implementations. Our certified consultants provide end-to-end services from system analysis and customization to data migration, user training, and post-implementation support. We help businesses automate workflows, improve data management, and enhance operational efficiency.",
        },
        {
          question: "Do you offer custom software development?",
          answer:
            "Absolutely! We provide full-cycle custom software development services including web applications, mobile apps, enterprise software, and Unity game development. Our development process includes requirement analysis, UI/UX design, coding, testing, deployment, and maintenance.",
        },
        {
          question: "What digital marketing services do you provide?",
          answer:
            "Our digital marketing services include SEO optimization, social media marketing, content creation, PPC advertising, email marketing campaigns, and digital strategy consulting. We help businesses increase their online visibility and drive targeted traffic to their websites.",
        },
        {
          question: "Do you provide QA testing services?",
          answer:
            "Yes, we offer comprehensive QA testing services including manual testing, automated testing, performance testing, security testing, and mobile app testing. Our QA experts ensure your software meets the highest quality standards before deployment.",
        },
      ],
    },

    // Training Programs
    {
      category: "Training Programs",
      questions: [
        {
          question: "What training programs do you offer?",
          answer:
            "We offer comprehensive training and certification programs in AWS, SAP, Zoho, and Salesforce. Our training covers cloud computing, CRM implementation, business automation, data analytics, and enterprise software solutions. All programs include hands-on projects, real-world scenarios, and industry-recognized certifications.",
        },
        {
          question: "Are your training programs certified?",
          answer:
            "Yes, our training programs are designed to prepare participants for industry-recognized certifications. We are authorized training partners for Redington Group (AWS), Zoho Corp, and other leading technology providers. Our instructors are certified professionals with extensive real-world experience.",
        },
        {
          question: "What is the duration of your training programs?",
          answer:
            "Training program durations vary based on the specific course and learning objectives. AWS training typically ranges from 4-12 weeks, SAP and Salesforce programs are usually 6-16 weeks, and Zoho training spans 4-8 weeks. We also offer customized programs and boot camps for specific requirements.",
        },
        {
          question: "Do you provide job placement assistance?",
          answer:
            "Yes, we offer career guidance and job placement assistance to our training participants. This includes resume building, interview preparation, mock interviews, and connections with our network of partner companies. Our placement team works closely with graduates to help them find suitable employment opportunities.",
        },
        {
          question: "Are the training programs online or offline?",
          answer:
            "We offer both online and offline training options. Our online programs are conducted through interactive virtual classrooms with live instructors, while offline programs are held at our training centers. We also provide flexible learning options including self-paced modules and hybrid learning approaches.",
        },
        {
          question: "What are the prerequisites for joining training programs?",
          answer:
            "Prerequisites vary by program. For AWS training, basic IT knowledge is helpful. SAP and Salesforce programs require understanding of business processes. Zoho training is beginner-friendly. We assess each participant's background and provide foundation courses if needed to ensure everyone can successfully complete the program.",
        },
      ],
    },

    // Support and Maintenance
    {
      category: "Support & Maintenance",
      questions: [
        {
          question: "Do you provide post-implementation support?",
          answer:
            "Absolutely! We provide comprehensive post-implementation support including system maintenance, updates, troubleshooting, user training, and performance optimization. Our support packages include 24/7 technical assistance, regular system health checks, and proactive monitoring.",
        },
        {
          question: "What is your support response time?",
          answer:
            "We offer different support tiers with varying response times. Critical issues are addressed within 1-2 hours, important issues within 4-6 hours, and general inquiries within 24 hours. Premium support packages include dedicated account managers and priority response channels.",
        },
        {
          question: "Do you provide training for our team?",
          answer:
            "Yes, we provide comprehensive training programs for your team including system administration, user training, best practices workshops, and ongoing skill development. Our training can be customized to your specific workflows and delivered onsite or remotely.",
        },
        {
          question: "What kind of maintenance services do you offer?",
          answer:
            "Our maintenance services include regular system updates, security patches, performance monitoring, backup management, data optimization, and preventive maintenance. We also provide emergency support and disaster recovery planning to ensure business continuity.",
        },
      ],
    },

    // Technology and Innovation
    {
      category: "Technology & Innovation",
      questions: [
        {
          question: "What technologies do you work with?",
          answer:
            "We work with a wide range of technologies including AWS, Microsoft Azure, Google Cloud Platform, SAP, Salesforce, Zoho, React, Node.js, Python, .NET, Java, mobile development frameworks, Unity game engine, and various database systems. We stay updated with the latest technologies and industry trends.",
        },
        {
          question: "Do you provide mobile app development?",
          answer:
            "Yes, we develop native and cross-platform mobile applications for iOS and Android. Our mobile development services include UI/UX design, app development, testing, deployment to app stores, and post-launch support. We also provide progressive web apps (PWAs) for enhanced user experience.",
        },
        {
          question: "Can you help with digital transformation?",
          answer:
            "Definitely! Digital transformation is one of our core competencies. We help businesses modernize their operations through cloud migration, process automation, data analytics, AI/ML integration, and innovative technology solutions. Our approach focuses on measurable ROI and sustainable growth.",
        },
        {
          question: "Do you offer data analytics services?",
          answer:
            "Yes, we provide comprehensive data analytics services including data warehousing, business intelligence, dashboard development, predictive analytics, and machine learning solutions. We help businesses transform raw data into actionable insights for better decision-making.",
        },
      ],
    },
  ];

  return (
    <div ref={container} className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="hero-bookmark">
              <Bookmark
                icon={<FaQuestionCircle className="w-6 h-6 text-[#ff6041]" />}
                title="FAQs"
                className="bg-white mx-auto w-fit gap-3 mb-8"
              />
            </div>
            <h1 className="hero-title text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="hero-description text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to know about our services, training, and
              technology-driven strategies to move your business forward.
            </p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <PrimaryButton title="Contact Us" classname="rounded-[25px]" />
              </a>
              <a
                href="#faq-sections"
                className="bg-white border-2 border-[#ff6041] text-[#ff6041] hover:bg-[#ff6041] hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Browse FAQs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories Navigation */}
      <section ref={categoryNavRef} className="py-12 bg-[#ff6041]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="category-nav-heading text-center text-white mb-8">
            <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-422.5 w-[93%] mx-auto">
            {faqs.map((category, index) => (
              <a
                key={index}
                href={`#category-${index}`}
                className="category-card bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded-xl p-4 text-center group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors duration-300">
                  <FaQuestionCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {category.category}
                </h3>
                <p className="text-xs text-white/80 mt-1">
                  {category.questions.length} questions
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section ref={faqSectionsRef} id="faq-sections" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => {
            let sectionClass = "";
            switch (categoryIndex) {
              case 0:
                sectionClass = "company-overview-section";
                break;
              case 1:
                sectionClass = "services-section";
                break;
              case 2:
                sectionClass = "training-programs-section";
                break;
              case 3:
                sectionClass = "support-maintenance-section";
                break;
              case 4:
                sectionClass = "technology-innovation-section";
                break;
              default:
                sectionClass = "faq-section";
            }

            return (
              <div
                key={categoryIndex}
                id={`category-${categoryIndex}`}
                className={`${sectionClass} mb-16`}
              >
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className="faq-category-badge inline-flex items-center gap-3 text-black bg-white px-6 py-3 rounded-full mb-6">
                    <FaQuestionCircle className="w-5 h-5" color="#ff6041" />
                    <div className="font-semibold">{category.category}</div>
                  </div>
                  <h2 className="faq-category-heading text-3xl md:text-4xl font-bold text-gray-900">
                    {category.category} FAQs
                  </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    return (
                      <div
                        key={faqIndex}
                        className="faq-item bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        <button
                          onClick={() => toggleFaq(globalIndex)}
                          className="w-full flex items-center justify-between p-6 lg:p-8 text-left group"
                        >
                          <h3 className="text-lg lg:text-xl font-semibold text-gray-900 pr-4 group-hover:text-[#ff6041] transition-colors duration-300">
                            {faq.question}
                          </h3>
                          <FaChevronDown
                            className={`w-5 h-5 text-[#ff6041] shrink-0 transition-transform duration-300 ${
                              openFaq === globalIndex ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            openFaq === globalIndex
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                            <div className="border-t border-gray-100 pt-6">
                              <p className="text-gray-600 leading-relaxed text-base">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section ref={contactCtaRef} className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="cta-icon w-16 h-16 bg-[#ff6041] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaUsers className="w-8 h-8 text-white" />
            </div>
            <h2 className="cta-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="cta-description text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team of experts is
              here to help. Get in touch with us for personalized assistance and
              detailed consultations.
            </p>
            <div className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center">
              <PrimaryButton
                title="Contact Our Team"
                classname="rounded-[25px]"
              />
              <a
                href="tel:+919876543210"
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                <FaRocket className="w-5 h-5" />
                Call Now: +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
