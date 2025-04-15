
import { cn } from "@/lib/utils";
import { Sponsor } from "@/types/sponsor";

interface SponsorLogoProps {
  sponsor: Sponsor;
}

export const SponsorLogo = ({ sponsor }: SponsorLogoProps) => {
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
