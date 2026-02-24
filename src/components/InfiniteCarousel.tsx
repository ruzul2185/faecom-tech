import { useMemo } from "react";
import { TECH_STACK_INFINITE_BANNER } from "../constants/HomePage";

interface Props {
  className?: string;
}

// Fisher–Yates shuffle
const shuffleArray = (array: string[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const InfiniteCarousel = ({ className = "" }: Props) => {
  const randomizedStack = useMemo(() => {
    const shuffled = shuffleArray(TECH_STACK_INFINITE_BANNER);
    return [...shuffled, ...shuffled]; // duplicate for infinite effect
  }, []);

  return (
    <div className="w-full overflow-hidden edge-mask">
      <div className="flex gap-6.25 animate-infinite-scroll w-max">
        {randomizedStack.map((value, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
