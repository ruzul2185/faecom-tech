import { AFFILIATE_LOGOS } from "../../constants/HomePage";

const AffiliationBanner = () => {
  return (
    <section className="w-full mx-auto overflow-hidden">
      <div className=" flex justify-between gap-16 animate-infinite-scroll reverse w-max">
        {[...AFFILIATE_LOGOS, ...AFFILIATE_LOGOS, ...AFFILIATE_LOGOS].map(
          (item, index) => (
            <AffiliationCard key={index} url={item} />
          ),
        )}
      </div>
    </section>
  );
};

export default AffiliationBanner;

interface AffiliationCardProps {
  url: string;
}

const AffiliationCard = ({ url }: AffiliationCardProps) => {
  return (
    <div className="bg-white w-50 rounded-lg">
      <img src={url} alt={url} className="size-25 mx-auto" />
    </div>
  );
};
