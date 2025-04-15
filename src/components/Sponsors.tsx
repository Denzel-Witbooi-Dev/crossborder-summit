import { Trophy, Award, Medal, Badge } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
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

const TierSection = ({ 
  tier, 
  sponsors 
}: { 
  tier: SponsorTier; 
  sponsors: Sponsor[]; 
}) => {
  const isMobile = useIsMobile();
  
  if (sponsors.length === 0) return null;

  const icons = {
    platinum: <Trophy className="w-5 h-5 text-white" />,
    gold: <Award className="w-5 h-5 text-cbrta-gold" />,
    silver: <Medal className="w-5 h-5 text-gray-300" />,
    bronze: <Badge className="w-5 h-5 text-amber-700" />
  };

  return (
    <div className="mb-8 last:mb-0">
      <div className="flex items-center gap-2 mb-4">
        {icons[tier]}
        <h3 className="text-sm font-medium text-white capitalize">{tier}</h3>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: sponsors.length > 4,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {sponsors.map((sponsor, index) => (
            <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/4 lg:basis-1/5">
              <SponsorLogo sponsor={sponsor} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {sponsors.length > (isMobile ? 2 : 4) && (
          <>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </>
        )}
      </Carousel>
    </div>
  );
};

const SponsorLogo = ({ sponsor }: { sponsor: Sponsor }) => {
  return (
    <a 
      href={sponsor.websiteUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "aspect-square rounded-lg bg-white/5 p-4",
        "flex items-center justify-center",
        "transform transition-all duration-300",
        "hover:bg-white/10 hover:scale-105",
        "group backdrop-blur-sm"
      )}
    >
      <img 
        src={sponsor.logoUrl} 
        alt={`${sponsor.name} logo`}
        title={sponsor.name}
        className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300" 
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/placeholder.svg';
          target.onerror = null;
        }}
      />
    </a>
  );
};

const Sponsors = () => {
  const sponsorsByTier = {
    platinum: sponsors.filter(s => s.tier === "platinum"),
    gold: sponsors.filter(s => s.tier === "gold"),
    silver: sponsors.filter(s => s.tier === "silver"),
    bronze: sponsors.filter(s => s.tier === "bronze")
  };
  
  return (
    <section className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-lg p-6">
      <h2 className="text-xl font-heading font-semibold text-cbrta-gold mb-6">Our Sponsors</h2>
      
      <div className="space-y-6">
        {(Object.entries(sponsorsByTier) as [SponsorTier, Sponsor[]][]).map(([tier, sponsors]) => (
          <TierSection key={tier} tier={tier} sponsors={sponsors} />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
