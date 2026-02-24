import {
  FaAws,
  FaSalesforce,
  FaCode,
  FaChartLine,
  FaShieldAlt,
  FaLaptopCode,
  FaGamepad,
  FaGlobe,
  FaServer,
  FaUserTie,
  FaCertificate,
  FaBriefcase,
} from "react-icons/fa";
import { SiSap, SiZoho } from "react-icons/si";

export const PARTNER_SERVICES = [
  {
    name: "SAP",
    services: [
      "S/4HANA - ERP Suite",
      "FICO - Finance & Control",
      "SD - Sales & Distribution",
      "MM - Material Management",
      "PP - Production Planning",
      "ABAP - SAP Programming",
      "BASIS - System Administration",
      "HCM - HR Management",
      "EWM - Warehouse Management",
    ],
    icon: SiSap,
    link: "/services/sap",
  },
  {
    name: "AWS",
    services: [
      "Deployment",
      "Migration",
      "DevOps",
      "EC2 Servers",
      "S3 Storage",
      "Lambda",
      "VPC Networking",
      "CI/CD Pipeline",
      "IAM Roles",
      "Cloud Security",
      "Cloud Monitoring",
    ],
    icon: FaAws,
    link: "/services/aws",
  },
  {
    name: "Zoho",
    services: [
      "Zoho CRM & Custom Dashboards",
      "Zoho One Setup",
      "Zoho Analytics",
      "Custom Flows & Integrations",
      "Zoho Books & Payroll",
    ],
    icon: SiZoho,
    link: "/services/zoho",
  },
  {
    name: "Salesforce",
    services: [
      "Data Cloud & Analytics",
      "Einstein AI Solutions",
      "Marketing Cloud Services",
      "Lightning Platform Apps",
      "Experience Cloud Portals",
      "Tableau CRM Insights",
      "Commerce Cloud Solutions",
      "Agentforce Support Systems",
    ],
    icon: FaSalesforce,
    link: "/services/salesforce",
  },
];

export const CORE_SERVICES = [
  {
    title: "Custom Software Development & MVP Development",
    description:
      "Tailored software solutions and rapid MVP development to bring your innovative ideas to life with scalable and robust architecture.",
    icon: FaLaptopCode,
    features: [
      "Custom Business Applications",
      "MVP Development",
      "Software Architecture Design",
      "Database Design",
      "Integration Services",
      "Maintenance & Support",
    ],
    link: "/services/custom",
  },
  {
    title: "Quality Assurance (QA) Services",
    description:
      "Comprehensive QA services ensuring your software meets the highest standards of quality, performance, and reliability.",
    icon: FaShieldAlt,
    features: [
      "Manual Testing",
      "Automated Testing",
      "Performance Testing",
      "Security Testing",
      "Compatibility Testing",
      "QA Consulting",
    ],
    link: "/services/qa",
  },
  {
    title: "Mobile & Web Game Development (Unity)",
    description:
      "Engaging and immersive game development for mobile and web platforms using Unity engine with stunning graphics and smooth gameplay.",
    icon: FaGamepad,
    features: [
      "2D & 3D Game Development",
      "Unity Programming",
      "Game UI/UX Design",
      "Multiplayer Integration",
      "Game Optimization",
      "Cross-Platform Deployment",
    ],
    link: "/services/unity",
  },
  {
    title: "Digital Marketing Services",
    description:
      "Comprehensive digital marketing solutions to boost your online presence and drive business growth through targeted campaigns and data-driven strategies.",
    icon: FaChartLine,
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "PPC Campaigns",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting",
    ],
    link: "/services/digital-marketing",
  },
  {
    title: "Web Development",
    description:
      "Custom web development services creating responsive, fast, and secure websites tailored to your business needs using modern technologies.",
    icon: FaCode,
    features: [
      "Frontend Development",
      "Backend Development",
      "Full-Stack Solutions",
      "E-commerce Platforms",
      "Progressive Web Apps",
      "API Development",
    ],
    link: "/services/web-dev",
  },
];

export const KEY_FACILITIES = [
  {
    title: "Online & Practical Hands-On Training",
    icon: FaLaptopCode,
    description:
      "Interactive online training sessions with real-world projects and practical implementation.",
  },
  {
    title: "Global Curriculum",
    icon: FaGlobe,
    description:
      "Internationally recognized curriculum designed to meet industry standards worldwide.",
  },
  {
    title: "Server Access",
    icon: FaServer,
    description:
      "Dedicated server access for practical training and development exercises.",
  },
  {
    title: "Experienced Trainers",
    icon: FaUserTie,
    description:
      "Industry experts with years of hands-on experience in their respective domains.",
  },
  {
    title: "Certification Guidance",
    icon: FaCertificate,
    description:
      "Complete guidance for industry-recognized certifications to boost your career.",
  },
  {
    title: "Placement Assistance",
    icon: FaBriefcase,
    description:
      "Career support and placement assistance to help you land your dream job.",
  },
];
