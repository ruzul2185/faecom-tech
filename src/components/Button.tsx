interface ButtonProps {
  title: string;
}

export const PrimaryButton = ({ title }: ButtonProps) => {
  return (
    <div className="relative overflow-hidden font-medium text-white bg-[#ff6041] rounded-[25px] w-61 h-14.5 flex justify-center items-center cursor-pointer group">
      <span className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <span className="w-40 h-40 bg-black rounded-full scale-0 transition-transform duration-500 ease-out group-hover:scale-150"></span>
      </span>

      <span className="relative z-10">{title}</span>
    </div>
  );
};

export const SecondaryButton = ({ title }: ButtonProps) => {
  return (
    <div className="relative overflow-hidden font-medium text-black bg-white rounded-[25px] w-61 h-14.5 flex justify-center items-center cursor-pointer group hover:text-white">
      <span className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <span className="w-40 h-40 bg-[#ff6041] rounded-full scale-0 transition-transform duration-500 ease-out group-hover:scale-150"></span>
      </span>

      <span className="relative z-10">{title}</span>
    </div>
  );
};
