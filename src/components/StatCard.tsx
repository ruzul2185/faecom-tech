interface StatCardProps {
  title: string;
  paragraph: string;
}

const StatCard = ({ title, paragraph }: StatCardProps) => {
  return (
    <div className="rounded-3xl bg-[#d9d9d9]/19 p-6 group relative sm:size-50">
      <div>
        <p className="text-[55px] font-bold">{title}</p>
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
