import AffiliationBanner from "../components/AffiliationBanner";
import { Bookmark } from "../components/Bookmark";
import { PrimaryButton, SecondaryButton } from "../components/Button";
import InfiniteCarousel from "../components/InfiniteCarousel";
import ServiceComponent from "../components/ServiceComponent";
import StatCard from "../components/StatCard";
import { STATISTICS_CARD_INFO } from "../constants/HomePage";

const HomePage = () => {
  return (
    // Main container wrapper
    <div className="flex flex-col items-stretch gap-30 mt-30">
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-5xl mx-auto text-center flex flex-col gap-6.75 justify-center items-center">
        {/* Top badge / label */}
        <Bookmark
          iconSrc="Sparkles.svg"
          title="Leading Tech, Education and Soltions"
          className="bg-white"
        />
        {/* Main Heading */}
        <div className="text-4xl sm:text-[64px] font-medium">
          <p>Tranforming Ideas into</p>{" "}
          <span className="text-[#ff6041]">Intellegent</span>{" "}
          <span className="text-[#FFC2A7]">Product</span>
        </div>
        {/* Subheading / Description */}
        <div className="text-[14px] sm:text-[20px]/[40px] font-medium text-[#7e7e7e] line max-w-226">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {/* Call-To-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-16.75">
          <PrimaryButton title="Explore" classname="rounded-[25px]" />
          <SecondaryButton title="Let's talk" classname="rounded-[25px]" />
        </div>
      </section>

      {/* ================= SECOND SECTION (CAROUSEL + INFO) ================= */}
      <section className="bg mx-auto min-w-86.25 w-[93%] rounded-[50px] py-12.5 text-white flex flex-col gap-12.5 max-w-442.5">
        {/* Infinite scrolling carousel component */}
        <InfiniteCarousel />
        {/* -------- Business Integration Content -------- */}
        <div className="py-12.5 w-[90%] mx-auto flex flex-col gap-9 sm:flex-row sm:justify-around sm:items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-9 md:w-[60%]">
            <div className="text-[30px] font-medium sm:text-5xl">
              <p>Innovate, Integrate and Scale</p>
              <p>your business</p>
            </div>
            <div className="text-[14px] sm:text-2xl font-medium">
              <p>
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod.Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                sed do elusmod
              </p>
            </div>
          </div>
          {/* CTA Button */}
          <div>
            <PrimaryButton title="Integrate now" classname="rounded-[25px]" />
          </div>
        </div>

        {/* -------- Statistics + Supporting Content -------- */}
        <div className="py-12.5 w-[90%] mx-auto flex flex-col gap-9 lg:flex-row sm:justify-around sm:items-center">
          {/* Statistics Cards Grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {STATISTICS_CARD_INFO.map((item, index) => (
              <StatCard
                key={index}
                title={item.title}
                paragraph={item.paragraph}
              />
            ))}
          </div>
          {/* Right-side Text Content */}
          <div className="flex flex-col gap-9 md:w-[60%] text-right">
            <div className="text-[30px] font-medium sm:text-5xl">
              <p>Innovate, Integrate and Scale</p>
              <p>your business</p>
            </div>
            <div className="text-[14px] sm:text-2xl font-medium">
              <p>
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod.Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                sed do elusmod
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceComponent />

      <AffiliationBanner />
    </div>
  );
};

export default HomePage;
