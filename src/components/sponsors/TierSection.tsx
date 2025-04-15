
import { Trophy, Award, Medal, Badge } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { SponsorLogo } from "./SponsorLogo";
import { Sponsor, SponsorTier } from "@/types/sponsor";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TierSectionProps {
  tier: SponsorTier;
  sponsors: Sponsor[];
}

export const TierSection = ({ tier, sponsors }: TierSectionProps) => {
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
