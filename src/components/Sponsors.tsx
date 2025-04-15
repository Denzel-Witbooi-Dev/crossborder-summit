
import { BadgeDollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TierSection } from "./sponsors/TierSection";
import { sponsors, SponsorTier, Sponsor } from "@/types/sponsor";

const Sponsors = () => {
  const sponsorsByTier = {
    platinum: sponsors.filter(s => s.tier === "platinum"),
    gold: sponsors.filter(s => s.tier === "gold"),
    silver: sponsors.filter(s => s.tier === "silver"),
    bronze: sponsors.filter(s => s.tier === "bronze")
  };
  
  const scrollToRegistration = () => {
    const element = document.querySelector('#sponsorship-registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-lg p-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <h2 className="text-xl font-heading font-semibold text-cbrta-gold">Our Sponsors</h2>
        <Button
          onClick={scrollToRegistration}
          className="bg-cbrta-gold hover:bg-cbrta-gold/90 text-cbrta-darkgray transition-all duration-300 hover:scale-105"
        >
          <BadgeDollarSign className="w-4 h-4 mr-2" />
          Become a Sponsor
        </Button>
      </div>
      
      <div className="space-y-6">
        {(Object.entries(sponsorsByTier) as [SponsorTier, Sponsor[]][]).map(([tier, sponsors]) => (
          <TierSection key={tier} tier={tier} sponsors={sponsors} />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
