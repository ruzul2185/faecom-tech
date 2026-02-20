import { TECH_STACK_INFINITE_BANNER } from "../constants/HomePage";

interface Props {
  className: string;
}

const InfiniteCarousel = ({ className = "" }: Props) => {
  return (
    <div className="w-full overflow-hidden edge-mask">
      <div className="flex gap-6.25 animate-infinite-scroll w-max">
        {[...TECH_STACK_INFINITE_BANNER, ...TECH_STACK_INFINITE_BANNER].map(
          (value, index) => (
            <div
              key={index}
              className={`w-30 h-30 bg-[#d9d9d9]/13 rounded-[20px] flex items-center justify-center shrink-0 ${className}`}
            >
              <img
                src={value}
                alt={`tech-${index}`}
                className="size-13"
                loading="lazy"
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
