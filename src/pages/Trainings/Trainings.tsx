import { GrTechnology } from "react-icons/gr";
import { Bookmark } from "../../components/Bookmark";
import { PrimaryButton, SecondaryButton } from "../../components/Button";
import {
  HiOutlineGlobeAlt,
  HiOutlineLightningBolt,
  HiOutlineTag,
} from "react-icons/hi";
import {
  HiOutlineBriefcase,
  HiOutlineTrophy,
  HiOutlineUser,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";
import { MdOutlineDesktopMac } from "react-icons/md";

const Trainings = () => {
  return (
    <div className="flex flex-col items-stretch gap-24 mt-30 mb-30">
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-5xl mx-auto text-center flex flex-col gap-6.75 justify-center items-center">
        <Bookmark
          iconSrc="Sparkles.svg"
          title=" Professional IT Training & Services"
          className="bg-white gap-3"
        />
        <div className="text-4xl sm:text-[64px] font-medium">
          <p>Industry-Oriented</p>
          <span>Training</span> <span className="text-[#ff6041]">Programs</span>
        </div>
        <div className="text-[14px] sm:text-[20px]/[40px] w-[90%] font-medium text-[#7e7e7e] max-w-226">
          <p>
            We deliver enterprise-level training programs designed for
            real-world implementation, practical exposure, and long-term career
            growth.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <div className=" lg:mt-20 grid grid-cols-2 max-w-442.5 w-[93%] mx-auto md:grid-cols-4 gap-8 text-center">
        {[
          { number: "10K+", label: "Success Stories" },
          { number: "95%", label: "Placement Rate" },
          { number: "500+", label: "Corporate Partners" },
          { number: "100+", label: "Expert Trainers" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-3xl font-bold text-[#ff6041] mb-1">
              {stat.number}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* ================= SAP COLLABORATION SECTION ================= */}

      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden grid lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative  lg:h-auto">
            <img
              src="/FaecomTechcollab.png"
              alt="SAP Training Collaboration"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/10 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-3xl sm:text-4xl font-bold">
                SAP Training Collaboration
              </h2>
            </div>
          </div>

          {/* Content Side */}
          <div className="p-10 sm:px-16 flex flex-col items-start justify-center gap-4 lg:gap-3">
            <Bookmark
              icon={<GrTechnology />}
              title="Collaboration with SKILS.in"
              className="bg-[#efeadf] text-[#ff6041] gap-3"
            />

            <p className="text-gray-600 mb-6 leading-relaxed">
              We proudly collaborate with SKILS.in to deliver structured,
              industry-aligned SAP training programs. This partnership ensures
              learners gain hands-on experience, real-time server access, and
              exposure to live implementation environments.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our SAP programs are designed to provide deep functional and
              technical expertise aligned with modern enterprise business
              processes across industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://skils.in">
                <PrimaryButton
                  title="Visit SKILS.in"
                  classname="rounded-[25px]"
                />
              </a>

              <PrimaryButton
                title="Enroll in SAP Program"
                classname="rounded-[25px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRAINING PROGRAMS ================= */}

      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Our <span className="text-[#ff6041]">Core Training Programs</span>
          </h2>
        </div>

        <div className="space-y-28">
          {/* ================= SAP ================= */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src="/SAP_BIG.svg"
              alt="SAP Training"
              className="rounded-b-[30px] shadow-xl"
            />

            <div>
              <h3 className="text-3xl font-bold mb-6 text-[#ff6041]">
                SAP Functional & Technical Training
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Our SAP programs are designed to provide in-depth functional and
                technical knowledge aligned with real-time business processes.
                Learners gain hands-on experience in implementation,
                configuration, and support scenarios that reflect real corporate
                environments.
              </p>

              {/* Functional Modules */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3">
                  SAP Functional Modules
                </h4>
                <p className="text-gray-600 mb-3">
                  Our functional training focuses on core business operations
                  and enterprise management processes, including:
                </p>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "S/4HANA – ERP Suite",
                    "FICO (Finance & Controlling)",
                    "SD (Sales & Distribution)",
                    "MM (Material Management)",
                    "PP (Production Planning)",
                    "HCM (Human Capital Management)",
                    "EWM (Extended Warehouse Management)",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#ff6041] rounded-full mt-2"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Modules */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3">
                  SAP Technical Modules
                </h4>

                <div className="space-y-2 text-sm">
                  {[
                    "ABAP (SAP Programming)",
                    "BASIS (System Administration)",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#ff6041] rounded-full mt-2"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Through live server access, real-time case studies, and
                implementation-based learning, we prepare candidates to
                confidently handle SAP projects across industries.
              </p>

              <PrimaryButton
                title="Explore SAP Modules"
                classname="rounded-[25px]"
              />
            </div>
          </div>

          {/* ================= AWS ================= */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold mb-6 text-[#ff6041]">
                AWS Cloud Training
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Our cloud training programs are built around the powerful
                ecosystem of Amazon Web Services. We provide comprehensive
                knowledge of cloud architecture, deployment strategies, and
                secure infrastructure management.
              </p>

              <h4 className="font-semibold text-lg mb-3">
                Learners gain practical exposure to:
              </h4>

              <div className="grid grid-cols-2 gap-2 text-sm mb-6">
                {[
                  "EC2 Server Management",
                  "S3 Storage Solutions",
                  "IAM Roles & Access Control",
                  "VPC Networking & Cloud Architecture",
                  "Cloud Security & Monitoring",
                  "Migration & Deployment Strategies",
                  "CI/CD Pipelines",
                  "DevOps Practices",
                  "AWS Lambda & Serverless Computing",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#ff6041] rounded-full mt-2"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Our AWS training emphasizes real-world architecture design,
                automation, and scalable cloud solutions that meet industry
                demands.
              </p>

              <PrimaryButton
                title="Explore AWS Program"
                classname="rounded-[25px]"
              />
            </div>

            <img
              src="/tech/aws.svg"
              alt="AWS Cloud Training"
              className="rounded-[30px] shadow-xl order-1 lg:order-2"
            />
          </div>

          {/* ================= ZOHO ================= */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src="/ZOHO_logo_2023.svg"
              alt="Zoho Training"
              className="rounded-[30px] shadow-xl"
            />

            <div>
              <h3 className="text-3xl font-bold mb-6 text-[#ff6041]">
                Zoho Application Training
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide complete training solutions for business automation
                using Zoho applications. Our programs focus on configuring,
                customizing, and integrating Zoho tools to streamline business
                operations.
              </p>

              <h4 className="font-semibold text-lg mb-3">Training Includes:</h4>

              <div className="grid grid-cols-2 gap-2 text-sm mb-6">
                {[
                  "Zoho CRM & Custom Dashboard Creation",
                  "Zoho One Setup & Business Suite Implementation",
                  "Zoho Analytics & Reporting",
                  "Zoho Books & Payroll Management",
                  "Custom Workflows, Automation & Integrations",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#ff6041] rounded-full mt-2"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Participants learn to design efficient workflows and implement
                smart automation strategies tailored to business needs.
              </p>

              <PrimaryButton
                title="Explore Zoho Program"
                classname="rounded-[25px]"
              />
            </div>
          </div>

          {/* ================= SALESFORCE ================= */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold mb-6 text-[#ff6041]">
                Salesforce Training Programs
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Our training programs in the Salesforce ecosystem are designed
                to develop expertise in CRM solutions, automation, and customer
                engagement platforms.
              </p>

              <h4 className="font-semibold text-lg mb-3">
                Advanced Modules Covered:
              </h4>

              <div className="grid grid-cols-2 gap-2 text-sm mb-6">
                {[
                  "Data Cloud & Analytics",
                  "Einstein AI Solutions",
                  "Marketing Cloud Services",
                  "Lightning Platform Application Development",
                  "Experience Cloud Portals",
                  "Tableau CRM Insights",
                  "Commerce Cloud Solutions",
                  "Agentforce Support Systems",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#ff6041] rounded-full mt-2"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <PrimaryButton
                title="Explore Salesforce Program"
                classname="rounded-[25px]"
              />
            </div>

            <img
              src="/Salesforce.com_logo.svg"
              alt="Salesforce Training"
              className="rounded-[30px] shadow-xl order-1 lg:order-2"
            />
          </div>
        </div>
      </section>

      {/* ================= KEY ADVANTAGES ================= */}

      <section className="max-w-7xl mx-auto px-6">
        <div className="relative py-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6041' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="relative">
            {/* Header with Badge */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-white border-2 border-[#ff6041]/20 px-8 py-4 rounded-full mb-8 shadow-sm">
                <div className="w-3 h-3 bg-[#ff6041] rounded-full animate-pulse"></div>
                <span className="text-[#ff6041] font-semibold text-lg">
                  Why Choose Our Training
                </span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-6">
                <span className="text-gray-900">Learning</span>{" "}
                <span className="text-[#ff6041]">Advantages</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover what sets our training programs apart and why
                professionals worldwide choose us for their career
                transformation
              </p>
            </div>

            {/* Advantages Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Industry Expertise",
                  description:
                    "Stay ahead with training designed for real-world applications and current industry demands",
                  icon: HiOutlineTag,
                },
                {
                  title: "Hands-On Learning",
                  description:
                    "Learn by doing with practical projects, real-time scenarios, and live implementations",
                  icon: HiOutlineLightningBolt,
                },
                {
                  title: "24/7 Lab Access",
                  description:
                    "Practice on dedicated servers with round-the-clock access for uninterrupted learning",
                  icon: MdOutlineDesktopMac,
                },
                {
                  title: "Expert Mentors",
                  description:
                    "Learn from certified professionals with years of industry experience and real-world insights",
                  icon: HiOutlineUser,
                },
                {
                  title: "Live Projects",
                  description:
                    "Work on live projects that mirror corporate environments and real business challenges",
                  icon: HiOutlineRocketLaunch,
                },
                {
                  title: "Career Support",
                  description:
                    "Get personalized career counseling, interview preparation, and job placement assistance",
                  icon: HiOutlineGlobeAlt,
                },
                {
                  title: "Placement Network",
                  description:
                    "Access to exclusive placement network with 500+ corporate partners worldwide",
                  icon: HiOutlineBriefcase,
                },
                {
                  title: "Certifications",
                  description:
                    "Industry-recognized certifications that validate your skills and boost your career",
                  icon: HiOutlineTrophy,
                },
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-white border-2 border-[#FFA077] rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#FF6041]/50">
                    {/* Icon with outline style */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-white border-2 border-[#FFA077] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <span className="text-3xl text-[#FFA077] group-hover:scale-110 transition-transform duration-300">
                          <item.icon />
                        </span>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#ff6041] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#ffa077] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                    </div>

                    {/* Content */}
                    <h4 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-[#ff6041] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className="mt-6 w-0 h-1 bg-linear-to-r from-[#ff6041] to-[#ffa077] group-hover:w-full transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to <span className="text-[#ff6041]">Transform</span> Your
          Career?
        </h2>
        <p className="text-lg w-[90%] mx-auto text-gray-700 mb-8">
          Join professionals who accelerate their careers through structured,
          implementation-driven training.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <SecondaryButton
            title="Start Learning Today"
            classname="rounded-[25px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Trainings;
