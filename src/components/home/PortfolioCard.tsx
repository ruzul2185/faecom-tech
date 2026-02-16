import { Link } from "react-router";

interface PortfolioCardProps {
  backgroundImage?: string;
  title: string;
  link?: string;
}

const PortfolioCard = ({
  title,
  backgroundImage = "",
  link = "/",
}: PortfolioCardProps) => {
  return (
    <Link
      to={link}
      className="bg-white rounded-2xl overflow-hidden shadow-md group block"
    >
      <div className="h-55 w-full overflow-hidden">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="bg-[#211F38] p-5 flex items-center justify-center h-45">
        <p className="text-white font-medium text-2xl text-center">{title}</p>
      </div>
    </Link>
  );
};

export default PortfolioCard;
