import { KEYWORD_LIST } from "../../constants/HomePage";
import { FaStarOfLife } from "react-icons/fa6";

const KeywordBanner = () => {
  return (
    <section>
      {KEYWORD_LIST.map((item, index) => (
        <div key={index} className="flex justify-center items-center">
          <div className="text-[32px] font-medium text-white pb-2">{item}</div>
          <FaStarOfLife color="white" size={30} />
        </div>
      ))}
    </section>
  );
};

export default KeywordBanner;
