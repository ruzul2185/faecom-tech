import { FaGear } from "react-icons/fa6";
import { Bookmark } from "../Bookmark";
import { PrimaryButton } from "../Button";
import { BLOGS_INFO } from "../../constants/HomePage";
import BlogCard from "./BlogCard";

const BlogComponent = () => {
  return (
    <section>
      <div className="rounded-2xl mx-auto w-[93%] max-w-442.5 px-5 sm:px-20 py-12 flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-5 md:flex-row">
          <div className="flex flex-col items-start gap-4">
            <Bookmark
              title="Latest Blogs Insight"
              icon={<FaGear color="#ff6041" />}
              className="text-[#ff6041] bg-[#d6d6d6]"
            />
            <p className="font-medium text-3xl">Our Insight Latest News</p>
          </div>
          <div className="flex gap-5 items-center">
            <PrimaryButton title="More Blogs" classname="rounded-[25px]" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-40">
          {BLOGS_INFO.map((item, index) => (
            <BlogCard
              key={index}
              title={item.title}
              date={item.date}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
