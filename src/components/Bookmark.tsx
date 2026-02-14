import type { ReactNode } from "react";

interface BookmarkProps {
  iconSrc?: string;
  icon?: ReactNode;
  title: string;
  className?: string;
}

export const Bookmark = ({
  iconSrc,
  icon,
  title,
  className = "",
}: BookmarkProps) => {
  return (
    <div
      className={`flex items-center justify-between sm:gap-5 rounded-[20px] p-1 px-5 ${className}`}
    >
      {icon
        ? icon
        : iconSrc && <img src={iconSrc} alt={title} className="w-7.5 h-7.5" />}
      <span className="font-medium sm:text-2xl">{title}</span>
    </div>
  );
};
