import { Bookmark } from "../Bookmark";
import { MdUnsubscribe } from "react-icons/md";
import { PrimaryButton } from "../Button";

const NewsLetterComponent = () => {
  return (
    <section>
      <div className="max-w-442.5 mx-auto w-[93%] flex flex-col items-start justify-evenly md:px-20 gap-6">
        <div>
          <Bookmark
            title="Subscribe"
            icon={<MdUnsubscribe size={30} color="#ff6041" />}
            className="bg-white gap-3"
          />
        </div>
        <div className=" self-center flex flex-col gap-6 md:gap-12 w-full items-center">
          <div className="flex flex-col items-center gap-4">
            <p className="text-2xl font-medium">Stay Up to Date</p>
            <span className="inline-block w-25 h-1 bg-[#ff6041] "></span>
          </div>
          <div className="md:max-w-250 text-center text-[16px] font-medium">
            <p>
              Stay informed with expert insights, industry trends, product
              updates, and practical resources designed to help you grow. Our
              newsletter delivers carefully curated content straight to your
              inbox; no clutter, just meaningful updates that keep you ahead of
              the curve.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center w-full justify-between gap-10 max-w-200">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-1 px-4 outline-none rounded-full text-sm bg-white py-5 w-full"
            />
            <PrimaryButton title="Submit" classname="rounded-[25px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterComponent;
