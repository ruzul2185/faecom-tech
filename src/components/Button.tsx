interface ButtonProps {
  title: string;
  classname?: string;
}

interface SubmitButtonProps {
  title: string;
  classname?: string;
  disabled: boolean;
}

export const PrimaryButton = ({ title, classname = "" }: ButtonProps) => {
  return (
    <div
      className={`relative overflow-hidden font-medium text-white bg-[#ff6041] w-61 h-14.5 flex justify-center items-center cursor-pointer group/button ${classname}`}
    >
      <span className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <span className="w-50 h-40 bg-black rounded-full scale-0 transition-transform duration-500 ease-out group-hover/button:scale-150"></span>
      </span>

      <span className="relative z-10">{title}</span>
    </div>
  );
};

export const SecondaryButton = ({ title, classname = "" }: ButtonProps) => {
  return (
    <div
      className={`relative overflow-hidden font-medium text-black bg-white w-61 h-14.5 flex justify-center items-center cursor-pointer group/button hover:text-white ${classname}`}
    >
      <span className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <span className="w-50 h-40 bg-[#ff6041] rounded-full scale-0 transition-transform duration-500 ease-out group-hover/button:scale-150"></span>
      </span>

      <span className="relative z-10 group-hover/button:text-white">
        {title}
      </span>
    </div>
  );
};

export const TernaryButton = ({ title, classname = "" }: ButtonProps) => {
  return (
    <div
      className={`relative overflow-hidden font-medium text-black bg-white w-61 h-14.5 flex justify-center items-center cursor-pointer group/button hover:text-white ${classname}`}
    >
      <span className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <span className="w-50 h-40 bg-black rounded-full scale-0 transition-transform duration-500 ease-out group-hover/button:scale-150"></span>
      </span>

      <span className="relative z-10 group-hover/button:text-white">
        {title}
      </span>
    </div>
  );
};

export const SubmitButton = ({
  title,
  classname = "",
  disabled = false,
}: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`relative overflow-hidden font-medium text-white bg-[#ff6041] w-61 h-14.5 flex justify-center items-center cursor-pointer group/button ${classname}`}
    >
      <span className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <span className="w-50 h-40 bg-black rounded-full scale-0 transition-transform duration-500 ease-out group-hover/button:scale-150"></span>
      </span>

      <span className="relative z-10">{title}</span>
    </button>
  );
};
