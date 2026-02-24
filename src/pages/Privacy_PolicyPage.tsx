import { useState } from "react";
import { Bookmark } from "../components/Bookmark";
import { PrimaryButton } from "../components/Button";
import { FaShieldHalved, FaUserShield, FaDatabase, FaCookie, FaEye, FaLock, FaChevronDown, FaEnvelope } from "react-icons/fa6";

const Privacy_PolicyPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>("introduction");

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <FaShieldHalved className="w-5 h-5" />,
      content: {
        description: "FaecomTech's commitment to protecting your privacy and personal information.",
        points: [
          "This Privacy Policy explains how FaecomTech collects, uses, and protects your information.",
          "It applies to our website, services, training programs, and all interactions with our company.",
          "We are committed to transparency and compliance with global data protection regulations.",
          "By using our services, you consent to the practices described in this policy.",
          "This policy is regularly updated to reflect changes in our practices and legal requirements."
        ]
      }
    },
    {
      id: "information",
      title: "Information We Collect",
      icon: <FaDatabase className="w-5 h-5" />,
      content: {
        description: "Types of personal and business information we collect to provide our services.",
        points: [
          "Personal Information: Name, email address, phone number, job title, and company details.",
          "Contact Information: Physical addresses, billing addresses, and communication preferences.",
          "Professional Information: Company size, industry, role, and technical requirements.",
          "Training Data: Course enrollment, progress, assessment results, and certification details.",
          "Service Usage Data: Login history, feature usage, and interaction patterns.",
          "Technical Data: IP address, browser type, device information, and cookies data.",
          "Payment Information: Billing details, transaction history, and payment method preferences."
        ]
      }
    },
    {
      id: "usage",
      title: "How We Use Your Information",
      icon: <FaEye className="w-5 h-5" />,
      content: {
        description: "The purposes for which we collect and process your information.",
        points: [
          "Service Delivery: To provide IT consulting, training, and technical support services.",
          "Communication: To respond to inquiries, send updates, and provide customer support.",
          "Training Management: To enroll students, track progress, and issue certifications.",
          "Billing and Payments: To process payments, send invoices, and manage subscriptions.",
          "Service Improvement: To analyze usage patterns and enhance our service offerings.",
          "Marketing: To inform about new services, special offers, and relevant updates.",
          "Legal Compliance: To meet regulatory requirements and protect legal interests.",
          "Security: To monitor for fraud, prevent abuse, and ensure platform security."
        ]
      }
    },
    {
      id: "sharing",
      title: "Information Sharing",
      icon: <FaUserShield className="w-5 h-5" />,
      content: {
        description: "How and when we share your information with third parties.",
        points: [
          "Service Providers: With trusted partners for cloud services (AWS, SAP, Zoho, Salesforce).",
          "Payment Processors: With financial institutions for payment processing and verification.",
          "Training Partners: With certification bodies and training platform providers.",
          "Legal Authorities: When required by law, court order, or government regulation.",
          "Business Transfers: In case of mergers, acquisitions, or business asset sales.",
          "Analytics Providers: With Google Analytics and similar tools for website optimization.",
          "We never sell your personal information to third parties for marketing purposes.",
          "All third-party processors are carefully vetted and bound by confidentiality agreements."
        ]
      }
    },
    {
      id: "cookies",
      title: "Cookies and Tracking",
      icon: <FaCookie className="w-5 h-5" />,
      content: {
        description: "How we use cookies and similar technologies on our website.",
        points: [
          "Essential Cookies: Required for basic website functionality and security.",
          "Performance Cookies: Help us understand how visitors interact with our website.",
          "Functional Cookies: Enable enhanced features and personalized content.",
          "Marketing Cookies: Used to deliver relevant advertisements and content.",
          "Analytics Cookies: Help us analyze traffic and improve user experience.",
          "You can control cookies through your browser settings.",
          "Disabling cookies may affect some features and functionality of our website.",
          "We provide clear cookie consent options for all visitors."
        ]
      }
    },
    {
      id: "security",
      title: "Data Security",
      icon: <FaLock className="w-5 h-5" />,
      content: {
        description: "Measures we take to protect your personal information.",
        points: [
          "Encryption: All sensitive data is encrypted using industry-standard protocols.",
          "Access Controls: Strict authentication and authorization systems for data access.",
          "Regular Audits: Periodic security assessments and vulnerability testing.",
          "Secure Infrastructure: Use of secure cloud platforms and data centers.",
          "Employee Training: Regular privacy and security training for all staff members.",
          "Incident Response: Established procedures for handling security breaches.",
          "Data Minimization: We collect only information necessary for our services.",
          "Regular Updates: Continuous improvement of security measures and practices."
        ]
      }
    },
    {
      id: "rights",
      title: "Your Rights",
      icon: <FaUserShield className="w-5 h-5" />,
      content: {
        description: "Your rights regarding your personal information and how to exercise them.",
        points: [
          "Access: Request a copy of the personal information we hold about you.",
          "Correction: Request correction of inaccurate or incomplete information.",
          "Deletion: Request removal of your personal information (subject to legal obligations).",
          "Portability: Request transfer of your data to another service provider.",
          "Restriction: Request limitation of how we process your information.",
          "Objection: Object to certain types of processing, such as direct marketing.",
          "Withdraw Consent: Revoke consent for processing where consent is the legal basis.",
          "Complaint: File a complaint with relevant data protection authorities."
        ]
      }
    },
    {
      id: "retention",
      title: "Data Retention",
      icon: <FaDatabase className="w-5 h-5" />,
      content: {
        description: "How long we keep your personal information and why.",
        points: [
          "Service Duration: Information retained while you use our services.",
          "Legal Requirements: Data kept as required by applicable laws and regulations.",
          "Training Records: Certifications and training history kept for 7 years.",
          "Financial Records: Billing and payment information kept for 7 years.",
          "Communication Records: Email and support interactions kept for 3 years.",
          "Analytics Data: Website usage data anonymized after 26 months.",
          "Automatic Deletion: Information automatically deleted when no longer needed.",
          "User Control: You can request deletion of your account and associated data."
        ]
      }
    },
    {
      id: "international",
      title: "International Data Transfers",
      icon: <FaShieldHalved className="w-5 h-5" />,
      content: {
        description: "How we handle international data transfers.",
        points: [
          "Global Operations: Data may be transferred to countries where we operate.",
          "Adequate Protection: We ensure appropriate safeguards for international transfers.",
          "Standard Clauses: Use of EU Standard Contractual Clauses for EU data transfers.",
          "Privacy Shield: Compliance with Privacy Shield frameworks where applicable.",
          "Local Storage: Whenever possible, data is stored in your geographic region.",
          "Consent: We obtain explicit consent for international data transfers.",
          "Transparency: You will be informed about international data processing.",
          "Security: All international transfers maintain the same security standards."
        ]
      }
    },
    {
      id: "children",
      title: "Children's Privacy",
      icon: <FaUserShield className="w-5 h-5" />,
      content: {
        description: "Our policy regarding children's personal information.",
        points: [
          "Age Restriction: Our services are not intended for children under 18.",
          "No Collection: We do not knowingly collect personal information from minors.",
          "Parental Consent: We require parental consent for any minor's participation.",
          "Training Programs: Special procedures for student enrollment and data handling.",
          "Immediate Deletion: If we discover we have collected a minor's data, we delete it.",
          "Educational Services: Additional protections for student information in training programs.",
          "Parental Access: Parents can access, review, and delete their children's information.",
          "Compliance: We comply with COPPA and other child protection regulations."
        ]
      }
    }
  ];

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Bookmark
              icon={<FaShieldHalved className="w-6 h-6 text-[#ff6041]" />}
              title="Privacy"
              className="bg-white mx-auto w-fit gap-3 mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <PrimaryButton title="Contact Us" classname="rounded-[25px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated Notice */}
      <section className="bg-[#ff6041] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <p className="text-sm font-medium">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {sections.map((section) => (
              <div
                key={section.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
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
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="w-16 h-16 bg-[#ff6041] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaEnvelope className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Privacy Questions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              If you have any questions about our Privacy Policy or want to exercise your data rights, 
              please contact our privacy team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <PrimaryButton title="Contact Privacy Team" classname="rounded-[25px]" />
              </a>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy_PolicyPage;
