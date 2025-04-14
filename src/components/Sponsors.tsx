
import { ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

type SponsorTier = "platinum" | "gold" | "silver" | "bronze";

type Sponsor = {
  name: string;
  tier: SponsorTier;
  logoUrl: string;
  websiteUrl?: string;
};

const sponsors: Sponsor[] = [
  {
    name: "Transport Development Bank",
    tier: "platinum",
    logoUrl: "/placeholder.svg",
    websiteUrl: "#"
  },
  {
    name: "African Trade Commission",
    tier: "gold",
    logoUrl: "/placeholder.svg",
    websiteUrl: "#"
  },
  {
    name: "Southern African Logistics Association",
    tier: "gold",
    logoUrl: "/placeholder.svg",
    websiteUrl: "#"
  },
  {
    name: "Continental Freight Services",
    tier: "silver",
    logoUrl: "/placeholder.svg",
    websiteUrl: "#"
  },
  {
    name: "Eastern Cape Development Corporation",
    tier: "silver",
    logoUrl: "/placeholder.svg",
    websiteUrl: "#"
  },
  {
    name: "Logistics Innovation Hub",
    tier: "bronze",
    logoUrl: "/placeholder.svg",
    websiteUrl: "#"
  }
];

const tierColors: Record<SponsorTier, string> = {
  platinum: "bg-white/20 border-white",
  gold: "bg-cbrta-gold/10 border-cbrta-gold",
  silver: "bg-gray-300/10 border-gray-300",
  bronze: "bg-amber-700/10 border-amber-700/50"
};

const Sponsors = () => {
  const isMobile = useIsMobile();
  const platinumSponsors = sponsors.filter(s => s.tier === "platinum");
  const goldSponsors = sponsors.filter(s => s.tier === "gold");
  const silverSponsors = sponsors.filter(s => s.tier === "silver");
  const bronzeSponsors = sponsors.filter(s => s.tier === "bronze");
  
  return (
    <section className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 mb-8 border border-white border-opacity-20 animate-fade-in">
      <h2 className="text-2xl font-heading font-bold text-cbrta-gold mb-6">Our Sponsors</h2>
      
      {platinumSponsors.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Platinum Partners</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {platinumSponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} large={true} />
            ))}
          </div>
        </div>
      )}
      
      {goldSponsors.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Gold Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {goldSponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} large={false} />
            ))}
          </div>
        </div>
      )}
      
      {silverSponsors.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Silver Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {silverSponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} small={true} />
            ))}
          </div>
        </div>
      )}
      
      {bronzeSponsors.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Bronze Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {bronzeSponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} small={true} />
            ))}
          </div>
        </div>
      )}
      
      <div className="text-center mt-8">
        <p className="text-white/80 mb-4">
          Interested in becoming a sponsor for this event?
        </p>
        <button 
          className="bg-cbrta-lightblue hover:bg-cbrta-blue text-white font-medium py-2 px-6 rounded-full shadow-md transition-colors"
          onClick={() => alert("Sponsorship packages information will be available soon. Contact us for early opportunities!")}
        >
          Sponsorship Opportunities
        </button>
      </div>
    </section>
  );
};

const SponsorCard = ({ 
  sponsor, 
  large = false, 
  small = false 
}: { 
  sponsor: Sponsor; 
  large?: boolean; 
  small?: boolean; 
}) => {
  const sizeClasses = large 
    ? "w-64 h-32" 
    : small 
      ? "w-36 h-24" 
      : "w-48 h-28";
      
  return (
    <a 
      href={sponsor.websiteUrl || "#"} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`
        ${sizeClasses} rounded-lg ${tierColors[sponsor.tier]} border p-3
        flex flex-col items-center justify-center gap-2
        hover:shadow-md transition-all hover:scale-105
      `}
    >
      <div className="flex-1 flex items-center justify-center w-full p-2">
        <img 
          src={sponsor.logoUrl} 
          alt={`${sponsor.name} logo`} 
          className="max-w-full max-h-full object-contain" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
            target.onerror = null;
          }}
        />
      </div>
      <div className="text-center">
        <p className="text-white text-sm font-medium truncate w-full">
          {sponsor.name}
        </p>
        {sponsor.websiteUrl && (
          <div className="flex items-center justify-center text-cbrta-gold/80 text-xs mt-1">
            Visit <ExternalLink size={10} className="ml-1" />
          </div>
        )}
      </div>
    </a>
  );
};

export default Sponsors;

