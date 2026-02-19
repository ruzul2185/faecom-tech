import React from "react";

interface PortfolioCardProps {
  title: string;
  service: string;
  location: string;
  overview: string;
  result: string;
  backgroundImage: string;
  link: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  service,
  location,
  overview,
  result,
  backgroundImage,
  link,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-500 hover:shadow-2xl">
      {/* Background Image */}
      <div
        className="h-105 w-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 transition duration-500" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <p className="text-sm text-gray-300">{location}</p>
        <h3 className="text-2xl font-bold mt-1">{title}</h3>
        <p className="text-sm text-[#ff6041] mt-1">{service}</p>

        {/* Hidden Content on Hover */}
        <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500">
          <p className="text-sm mt-4 text-gray-200">{overview}</p>
          <p className="text-sm mt-2 font-semibold text-green-400">{result}</p>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm font-medium text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            Visit Project →
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
