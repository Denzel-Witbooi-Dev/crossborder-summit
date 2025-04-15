
import { ExternalLink, Award, Medal, Trophy, Badge } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type SponsorTier = "platinum" | "gold" | "silver" | "bronze";

type Sponsor = {
  name: string;
  tier: SponsorTier;
  logoUrl: string;
  websiteUrl?: string;
};

const sponsors: Sponsor[] = [
  {
    name: "TransAfrica Logistics",
    tier: "platinum",
    logoUrl: "/placeholder.svg",
    websiteUrl: "https://example.com/transafrica"
  },
  {
    name: "Southern African Development Bank",
    tier: "platinum",
    logoUrl: "/placeholder.svg",
    websiteUrl: "https://example.com/sadb"
  },
  {
    name: "Unity Transport Solutions",
    tier: "gold",
    logoUrl: "/placeholder.svg",
    websiteUrl: "https://example.com/unitytransport"
  },
  {
    name: "CrossBorder Tech",
    tier: "gold",
    logoUrl: "/placeholder.svg",
    websiteUrl: "https://example.com/crossbordertech"
  },
  {
    name: "African Trade Alliance",
    tier: "gold",
    logoUrl: "/placeholder.svg",
    websiteUrl: "https://example.com/ata"
  },
  {
    name: "Eco Freight Services",
    tier: "silver",
    logoUrl: "/placeholder.svg",
    websiteUrl: "https://example.com/ecofreight"
  },
  {
    name: "Regional Transport Association",
    tier: "silver",
    logoUrl: "/placeholder.svg",
    websiteUrl: "https://example.com/rta"
  },
  {
    name: "SafeRoads Initiative",
    tier: "silver",
    logoUrl: "/placeholder.svg",
    websiteUrl: "https://example.com/saferoads"
  },
  {
    name: "Customs Solutions",
    tier: "silver",
    logoUrl: "/placeholder.svg",
    websiteUrl: "https://example.com/customs"
  },
  {
    name: "Border Express",
    tier: "bronze",
    logoUrl: "/placeholder.svg",
    websiteUrl: "https://example.com/borderexpress"
  },
  {
    name: "Transport Innovation Hub",
    tier: "bronze",
    logoUrl: "/placeholder.svg",
    websiteUrl: "https://example.com/tih"
  },
  {
    name: "Logistics Training Academy",
    tier: "bronze",
    logoUrl: "/placeholder.svg"
  },
  {
    name: "African MSME Network",
    tier: "bronze",
    logoUrl: "/placeholder.svg"
  }
];

const tierInfo: Record<SponsorTier, { icon: React.ReactNode; description: string }> = {
  platinum: {
    icon: <Trophy className="w-6 h-6 text-white" />,
    description: "Our premier partners driving innovation in cross-border transport"
  },
  gold: {
    icon: <Award className="w-6 h-6 text-cbrta-gold" />,
    description: "Key contributors to sustainable transport solutions"
  },
  silver: {
    icon: <Medal className="w-6 h-6 text-gray-300" />,
    description: "Valued supporters of regional transport development"
  },
  bronze: {
    icon: <Badge className="w-6 h-6 text-amber-700" />,
    description: "Essential partners in our transport ecosystem"
  }
};

const tierColors: Record<SponsorTier, string> = {
  platinum: "bg-gradient-to-br from-white/20 to-white/10 border-white/40 hover:border-white",
  gold: "bg-gradient-to-br from-cbrta-gold/20 to-cbrta-gold/5 border-cbrta-gold/40 hover:border-cbrta-gold",
  silver: "bg-gradient-to-br from-gray-300/20 to-gray-300/5 border-gray-300/40 hover:border-gray-300",
  bronze: "bg-gradient-to-br from-amber-700/20 to-amber-700/5 border-amber-700/40 hover:border-amber-700"
};

const TierSection = ({ 
  tier, 
  sponsors, 
  large = false, 
  small = false 
}: { 
  tier: SponsorTier; 
  sponsors: Sponsor[]; 
  large?: boolean; 
  small?: boolean;
}) => {
  const isMobile = useIsMobile();
  
  if (sponsors.length === 0) return null;

  return (
    <div className="mb-12 last:mb-0">
      <div className="flex items-center gap-3 mb-4">
        {tierInfo[tier].icon}
        <div>
          <h3 className="text-lg font-semibold text-white">{tier.charAt(0).toUpperCase() + tier.slice(1)} Partners</h3>
          <p className="text-sm text-white/70">{tierInfo[tier].description}</p>
        </div>
      </div>
      
      <Separator className="mb-6 bg-white/10" />

      <Carousel
        opts={{
          align: "start",
          loop: sponsors.length > 3,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {sponsors.map((sponsor, index) => (
            <CarouselItem key={index} className={cn(
              "pl-4",
              small ? "basis-1/2 md:basis-1/4" : large ? "basis-full md:basis-1/2" : "basis-2/3 md:basis-1/3"
            )}>
              <SponsorCard sponsor={sponsor} large={large} small={small} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {sponsors.length > (isMobile ? 2 : 3) && (
          <>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </>
        )}
      </Carousel>
    </div>
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
    ? "min-h-[200px]" 
    : small 
      ? "min-h-[140px]" 
      : "min-h-[160px]";
      
  return (
    <a 
      href={sponsor.websiteUrl || "#"} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        `${sizeClasses} rounded-lg ${tierColors[sponsor.tier]} border p-4
        flex flex-col items-center justify-between gap-3
        transform transition-all duration-300
        hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1
        group backdrop-blur-sm`,
      )}
    >
      <div className="flex-1 flex items-center justify-center w-full p-2">
        <img 
          src={sponsor.logoUrl} 
          alt={`${sponsor.name} logo`} 
          className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
            target.onerror = null;
          }}
        />
      </div>
      <div className="text-center w-full">
        <p className="text-white text-sm font-medium truncate">
          {sponsor.name}
        </p>
        {sponsor.websiteUrl && (
          <div className="flex items-center justify-center text-cbrta-gold/80 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Visit website <ExternalLink size={10} className="ml-1" />
          </div>
        )}
      </div>
    </a>
  );
};

const Sponsors = () => {
  const platinumSponsors = sponsors.filter(s => s.tier === "platinum");
  const goldSponsors = sponsors.filter(s => s.tier === "gold");
  const silverSponsors = sponsors.filter(s => s.tier === "silver");
  const bronzeSponsors = sponsors.filter(s => s.tier === "bronze");
  
  return (
    <section className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-lg p-6 mb-8 border border-white/20 animate-fade-in">
      <h2 className="text-2xl font-heading font-bold text-cbrta-gold mb-8">Our Sponsors</h2>
      
      <div className="space-y-8">
        <TierSection tier="platinum" sponsors={platinumSponsors} large={true} />
        <TierSection tier="gold" sponsors={goldSponsors} />
        <TierSection tier="silver" sponsors={silverSponsors} small={true} />
        <TierSection tier="bronze" sponsors={bronzeSponsors} small={true} />
      </div>
      
      <div className="text-center mt-12 pt-8 border-t border-white/10">
        <p className="text-white/80 mb-4">
          Join our community of industry leaders shaping the future of cross-border transport
        </p>
        <button 
          onClick={() => window.location.href = '#sponsorship-registration'}
          className="bg-gradient-to-r from-cbrta-lightblue to-cbrta-blue hover:from-cbrta-blue hover:to-cbrta-lightblue text-white font-medium py-2 px-6 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-cbrta-blue/20"
        >
          Become a Sponsor
        </button>
      </div>
    </section>
  );
};

export default Sponsors;
