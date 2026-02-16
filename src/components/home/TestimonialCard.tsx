interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  review: string;
}

const TestimonialCard = ({
  name,
  role,
  image,
  review,
}: TestimonialCardProps) => {
  return (
    <div className="relative w-[93%] max-w-155 mx-auto h-80.5">
      {/* Black Clipped Corner */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-black clip-corner z-10 " />

      {/* Card */}
      <div className="bg-[#EFEADF] p-8 relative z-20 clip-path-triangle flex flex-col items-center justify-between h-80.5">
        <p className="text-[#666666] text-base leading-relaxed mb-6">
          “{review}”
        </p>

        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div>
            <p className="font-semibold text-gray-800">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
