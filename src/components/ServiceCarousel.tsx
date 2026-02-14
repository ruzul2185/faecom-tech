import { SERVICE_CARD_INFO } from "../constants/HomePage";
import ServiceCard from "./ServiceCard";

type Props = {
  imageIndex: number;
};

const ServiceCarousel = ({ imageIndex }: Props) => {
  return (
    <div className="flex overflow-hidden w-full">
      <div
        className="flex gap-12 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${imageIndex * 30}%)`,
        }}
      >
        {SERVICE_CARD_INFO.map((item, index) => (
          <ServiceCard
            key={index}
            title={item.title}
            desc={item.desc}
            link={item.link}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;
