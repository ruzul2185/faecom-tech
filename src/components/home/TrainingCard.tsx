import { IoArrowRedoSharp } from "react-icons/io5";

interface TrainingCardProps {
  title: string;
  link: string;
  backgroundImage: string;
  backgroundImageWebp: string;
  backgroundImageAvif: string;
}

const TrainingCard = ({
  title,
  link = "",
  backgroundImage,
  backgroundImageWebp,
  backgroundImageAvif,
}: TrainingCardProps) => {
  return (
    <div className="w-[93%] text-white rounded-[20px] max-w-135 mx-auto h-75 relative overflow-hidden group">
      {/* Image with multiple formats */}
      <picture className="absolute inset-0 w-full h-full">
        <source srcSet={backgroundImageAvif} type="image/avif" />
        <source srcSet={backgroundImageWebp} type="image/webp" />
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover rounded-[20px] transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </picture>

      {/* Default Dark Gradient */}
      <div className="absolute inset-0 rounded-[20px] bg-linear-to-t from-[#16182B] via-[#16182B]/25 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

      {/* Orange Hover Gradient */}
      <div className="absolute inset-0 rounded-[20px] bg-linear-to-t from-[#ff6041] via-[#ff6041]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Title */}
      <div className="absolute bottom-0 w-full p-4 z-10 h-30 flex justify-between items-center">
        <p className="text-lg sm:text-2xl font-medium">{title}</p>
        <a href={link}>
          <div className="bg-[#ff6041] w-12.5 h-12.5 rounded-full flex justify-center items-center cursor-pointer group-hover:bg-black">
            <IoArrowRedoSharp size={24} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default TrainingCard;
