interface BlogCardProps {
  title: string;
  date: string;
  image: string;
  link: string;
}

const BlogCard = ({ title, date, image, link }: BlogCardProps) => {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="flex-1 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between bg-white text-center">
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-black line-clamp-3">
            {title}
          </h3>
        </div>

        <div className="p-6">
          <span className="inline-block bg-[#ff6041] w-24 h-1 rounded-lg" />
          <p className="text-lg text-black mb-2 font-medium">{date}</p>
        </div>

        <a
          href={link}
          className="mt-4 font-medium text-black text-lg border-t-2 p-4"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
