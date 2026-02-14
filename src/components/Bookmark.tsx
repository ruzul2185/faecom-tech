interface BookmarkProps {
  iconSrc: string;
  title: string;
}

const Bookmark = ({ iconSrc, title }: BookmarkProps) => {
  return (
    <div className="flex items-center justify-between sm:gap-5 bg-white rounded-[20px] p-1 px-5">
      <img src={iconSrc} alt={title} className="w-7.5 h-7.5" />
      <span className="font-medium sm:text-2xl">{title}</span>
    </div>
  );
};

export default Bookmark;
