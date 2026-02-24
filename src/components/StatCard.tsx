import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface StatCardProps {
  title: string;
  paragraph: string;
}

const StatCard = ({ title, paragraph }: StatCardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!numberRef.current) return;

      // Extract number and suffix
      const match = title.match(/(\d+)(.*)/);
      if (!match) return;

      const endValue = parseInt(match[1], 10);
      const suffix = match[2] || "";

      const obj = { value: 0 };

      gsap.to(obj, {
        value: endValue,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.textContent = Math.floor(obj.value) + suffix;
          }
        },
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="rounded-3xl bg-[#d9d9d9]/19 p-6 group relative sm:size-50"
    >
      <div>
        <p ref={numberRef} className="text-[55px] font-bold">
          0
        </p>
        <p className="text-xl font-medium text-gray-200">{paragraph}</p>
      </div>

      <div className="flex gap-1 absolute right-4 top-4">
        <span className="inline-block w-2.5 h-2.5 border border-[#FF6041] rounded-full group-hover:bg-[#FF6041] transition-colors duration-300 ease-in-out" />
        <span className="inline-block w-2.5 h-2.5 border border-[#FF6041] rounded-full group-hover:bg-[#FF6041] transition-colors duration-300 ease-in-out" />
        <span className="inline-block w-2.5 h-2.5 border border-[#FF6041] rounded-full group-hover:bg-[#FF6041] transition-colors duration-300 ease-in-out" />
      </div>
    </div>
  );
};

export default StatCard;
