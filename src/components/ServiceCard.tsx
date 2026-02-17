import type { IconType } from "react-icons";
import { TernaryButton } from "./Button";

interface ServiceProps {
  icon?: IconType; // ✅ now optional
  title: string;
  desc: string;
  link: string;
  svgLink?: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  desc,
  link,
  svgLink,
}: ServiceProps) => {
  return (
    <div className="relative overflow-hidden p-7.5 rounded-2xl min-w-73.75 gap-5 flex flex-col lg:max-w-82.5 group/card bg-[#EFEADF] text-black transition-colors duration-500">
      {/* Animated radial background */}
      <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="w-0 h-0 bg-[#ff6041] rounded-full transition-all duration-500 ease-out group-hover/card:w-[200%] group-hover/card:h-[200%]" />
      </span>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col gap-5 group-hover/card:text-white transition-colors duration-300">
        {/* Render only if svgLink OR Icon exists */}
        {(svgLink || Icon) && (
          <span className="inline-flex justify-center items-center size-18 bg-[#ff6041] rounded-full transition-colors duration-300 group-hover/card:bg-black">
            {svgLink ? (
              <img
                src={svgLink}
                alt={title}
                className="size-10 object-contain"
              />
            ) : Icon ? (
              <Icon className="size-8.5" color="white" />
            ) : null}
          </span>
        )}

        <p className="font-medium text-[20px]">{title}</p>

        <p className="transition-colors duration-300 group-hover:text-white line-clamp-6">
          {desc}
        </p>

        <a href={link} className="w-full">
          <TernaryButton title="Learn More" classname="rounded-[10px] w-full" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
