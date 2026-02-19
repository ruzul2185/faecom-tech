import AffiliationBanner from "../components/home/AffiliationBanner";
import { Bookmark } from "../components/Bookmark";
import { PrimaryButton, SecondaryButton } from "../components/Button";
import KeywordBanner from "../components/home/KeywordBanner";
import NewsLetterComponent from "../components/home/NewsLetterComponent";
import PortfolioComponent from "../components/home/PortfolioComponent";
import TestimonialComponent from "../components/home/TestimonialComponent";
import TrainingComponent from "../components/home/TrainingComponent";
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
          title="Leading Tech, Education and Solutions"
          className="bg-white gap-3"
        />
        {/* Main Heading */}
        <div className="text-4xl sm:text-[64px] font-medium">
          <p>Engineering Reliable Software</p> <span>Delivering</span>{" "}
          <span className="text-[#ff6041]">Global</span>{" "}
          <span className="text-[#ffa077]">Trust</span>
        </div>
        {/* Subheading / Description */}
        <div className="text-[14px] sm:text-[20px]/[40px] font-medium text-[#7e7e7e] line max-w-226 w-[93%]">
          <p>
            We transform complex challenges into reliable digital
            infrastructures while delivering practical, industry-aligned
            training that equips individuals and teams to innovate with
            confidence.
          </p>
        </div>
        {/* Call-To-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-16.75">
          <a href="/services">
            <PrimaryButton title="Explore" classname="rounded-[25px]" />
          </a>
          <a href="/contact">
            <SecondaryButton title="Let's talk" classname="rounded-[25px]" />
          </a>
        </div>
      </section>

      <InfiniteCarousel className="bg-white" />
      <ServiceComponent />

      {/* ================= SECOND SECTION (CAROUSEL + INFO) ================= */}
      <section className="bg mx-auto min-w-86.25 w-[93%] rounded-[50px] py-12.5 text-white flex flex-col gap-12.5 max-w-442.5">
        {/* Infinite scrolling carousel component */}
        <InfiniteCarousel className="bg-[#d9d9d9]/13" />
        {/* -------- Business Integration Content -------- */}
        <div className="py-12.5 w-[90%] mx-auto flex flex-col gap-9 sm:flex-row sm:justify-around sm:items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-9 md:w-[60%]">
            <div className="text-[30px] font-medium sm:text-5xl">
              <p>Build, Optimize & Accelerate</p>
              <p>your Growth</p>
            </div>
            <div className="text-[14px] sm:text-2xl font-medium">
              <p>
                We design smart digital solutions that streamline operations,
                enhance performance, and drive measurable business growth
                through cutting-edge technology.
              </p>
            </div>
          </div>
          {/* CTA Button */}
          <a href="/contact">
            <PrimaryButton title="Integrate now" classname="rounded-[25px]" />
          </a>
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
              <p>Code Innovation. Create Impact.</p>
              <p>Deliver Results.</p>
            </div>
            <div className="text-[14px] sm:text-2xl font-medium">
              <p>
                Leverage modern technology, automation, and intelligent systems
                to future-proof your business and stay ahead of the competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AffiliationBanner />

      <TrainingComponent />

      <KeywordBanner />

      <PortfolioComponent />

      {/* <BlogComponent /> */}

      <TestimonialComponent />

      <NewsLetterComponent />
    </div>
  );
};

export default HomePage;
