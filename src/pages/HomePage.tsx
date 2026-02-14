import Bookmark from "../components/Bookmark";
import { PrimaryButton, SecondaryButton } from "../components/Button";
import InfiniteCarousel from "../components/InfiniteCarousel";

const HomePage = () => {
  return (
    <div className="flex flex-col items-stretch gap-25 mt-25">
      <section className="max-w-5xl mx-auto text-center flex flex-col gap-6.75 justify-center items-center">
        <Bookmark
          iconSrc="Sparkles.svg"
          title="Leading Tech, Education and Soltions"
        />
        <div className="text-4xl sm:text-[64px] font-medium">
          <p>Tranforming Ideas into</p>{" "}
          <span className="text-[#ff6041]">Intellegent</span>{" "}
          <span className="text-[#FFC2A7]">Product</span>
        </div>
        <div className="text-[14px] sm:text-[20px]/[40px] font-medium text-[#7e7e7e] line max-w-226">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-16.75">
          <PrimaryButton title="Explore" />
          <SecondaryButton title="Let's talk" />
        </div>
      </section>
      <section className="bg mx-auto min-w-86.25 w-[93%] rounded-[50px] py-12.5 text-white">
        <InfiniteCarousel />
      </section>
    </div>
  );
};

export default HomePage;
