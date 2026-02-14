import { AFFILIATE_LOGOS } from "../constants/HomePage";

const AffiliationBanner = () => {
  return (
    <div>
      {AFFILIATE_LOGOS.map((item, index) => (
        <AffiliationCard key={index} url={item} />
      ))}
    </div>
  );
};

export default AffiliationBanner;

interface AffiliationCardProps {
  url: string;
}

const AffiliationCard = ({ url }: AffiliationCardProps) => {
  return (
    <div className="bg-white">
      <img src={url} alt={url} className="size-25" />
    </div>
  );
};
