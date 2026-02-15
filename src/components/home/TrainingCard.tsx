import { IoArrowRedoSharp } from "react-icons/io5";
import { Link } from "react-router";

interface TrainingCardProps {
  title: string;
  link: string;
  backgroundImage?: string;
}

const TrainingCard = ({
  title,
  link = "",
  backgroundImage = "/bg.jpg",
}: TrainingCardProps) => {
  return (
    <div
      className="w-[93%] text-white rounded-[20px] max-w-135 mx-auto h-75 relative bg-cover bg-center overflow-hidden group"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Default Dark Gradient */}
      <div className="absolute inset-0 rounded-[20px] bg-linear-to-t from-[#16182B] via-[#16182B]/75 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

      {/* Orange Hover Gradient */}
      <div className="absolute inset-0 rounded-[20px] bg-linear-to-t from-[#ff6041] via-[#ff6041]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Title */}
      <div className="absolute bottom-0 w-full p-4 z-10 h-30 flex justify-between items-center">
        <p className="text-lg sm:text-2xl font-medium">{title}</p>
        <Link to={link}>
          <div className="bg-[#ff6041] size-12.5 rounded-full flex justify-center items-center cursor-pointer group-hover:bg-black">
            <IoArrowRedoSharp size={24} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TrainingCard;
