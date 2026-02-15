import { KEYWORD_LIST } from "../../constants/HomePage";
import { FaStarOfLife } from "react-icons/fa6";

const KeywordBanner = () => {
  return (
    <section className="w-full overflow-hidden bg-[#ff6041] py-5">
      <div className="flex animate-infinite-scroll whitespace-nowrap items-center gap-8">
        {[...KEYWORD_LIST, ...KEYWORD_LIST].map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-8">
            <span className="text-[32px] font-medium text-white">{item}</span>
            <FaStarOfLife className="text-white w-6 h-6" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeywordBanner;
