import type { ElementType } from "react";
import { SOCIAL_LINKS } from "../constants/Footer";

const Footer = () => {
  return (
    <footer className="mt-24">
      <div className="bg max-w-442.5 mx-auto rounded-t-[25px] py-16 px-6 md:px-16 text-white w-[93%]">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Logo + Description */}
          <div className="flex flex-col gap-6 items-center md:items-start">
            <img
              src="/faecom-logo.svg"
              alt="logo"
              className="max-w-55 bg-white p-3 rounded-2xl"
            />

            <p className="text-[15px] text-gray-300 leading-relaxed">
              Delivering innovative IT solutions and training programs to
              empower businesses and individuals with cutting-edge technology.
            </p>

            <div className="flex gap-5">
              {SOCIAL_LINKS.map((item, index) => (
                <SocialIcon key={index} Icon={item.Icon} link={item.link} />
              ))}
            </div>
          </div>

          {/* Company */}
          <FooterColumn
            title="Company"
            links={["Contact", "Team", "Blogs", "About Us"]}
          />

          {/* Affiliation */}
          {/* Affiliation & Legal */}
          <div className="flex flex-col">
            {/* Affiliation */}
            <FooterColumn title="Affiliation" links={["Faecom Engineering"]} />

            {/* Legal Highlighted Section */}
            <div className="flex flex-col gap-4">
              <ul className="flex flex-col gap-3">
                <li className="font-semibold text-white hover:text-primary cursor-pointer transition-colors duration-300">
                  FAQ
                </li>
                <li className="font-semibold text-white hover:text-primary cursor-pointer transition-colors duration-300">
                  Terms & Conditions
                </li>
                <li className="font-semibold text-white hover:text-primary cursor-pointer transition-colors duration-300">
                  Privacy Policy
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[20px]">Get in Touch</h3>

            <p className="text-gray-300 text-sm">
              Email: support@yourcompany.com
            </p>

            <p className="text-gray-300 text-sm">Phone: +91 98765 43210</p>

            <div className="text-gray-300 text-sm flex flex-col gap-3">
              <p className="font-medium text-white">Coorporate Address:</p>
              <p>
                Chandra Trading Complex, 2nd Floor, Near NIT Garden, IT Park
                Road, Trimurti Nagar, Nagpur, Maharashtra 440022
              </p>

              <p className="font-medium text-white mt-2">Registered Address:</p>
              <p>
                Plot No. 15, Pathan Layout, Datta Mandir Road, Rana Pratap
                Nagar, Nagpur - 440022, Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-12 pt-6 text-left text-sm text-gray-400">
          © {new Date().getFullYear()} Faecom Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

interface SocialIconProps {
  Icon: ElementType;
  link: string;
}

const SocialIcon = ({ Icon, link }: SocialIconProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-all duration-300 hover:scale-110 hover:text-primary"
    >
      <Icon size={26} />
    </a>
  );
};

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-[20px]">{title}</h3>
      <ul className="flex flex-col gap-2 text-gray-300 text-sm">
        {links.map((link, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-white transition-colors duration-300"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};
