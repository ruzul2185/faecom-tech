import type { IconType } from "react-icons";
import { SecondaryButton } from "./Button";
import { Link } from "react-router";

interface ServiceProps {
  icon: IconType;
  title: string;
  desc: string;
  link: string;
}

const ServiceCard = ({ icon: Icon, title, desc, link }: ServiceProps) => {
  return (
    <div className="bg-[#EFEADF] p-7.5 rounded-2xl min-w-73.75 gap-5 flex flex-col">
      <span className="inline-flex justify-center items-center size-18 bg-[#ff6041] rounded-full">
        <Icon className="size-8.5" color="white" />
      </span>
      <p className="font-medium text-[20px]">{title}</p>
      <p className="text-[#666666]">{desc}</p>
      <Link to={link} className="w-full">
        <SecondaryButton title="Learn More" classname="rounded-[10px] w-full" />
      </Link>
    </div>
  );
};

export default ServiceCard;
