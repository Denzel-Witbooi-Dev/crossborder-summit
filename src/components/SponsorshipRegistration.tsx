
import { BadgeDollarSign, Check, Star, Trophy, Award, Medal, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sponsorshipPackages, SponsorshipPackage } from "@/types/sponsorshipTiers";
import { cn } from "@/lib/utils";

const SponsorshipRegistration = () => {
  const getTierIcon = (tier: string) => {
    switch (tier) {
      case "starsAndStripes":
        return <Star className="w-5 h-5 text-white" />;
      case "platinum":
        return <Trophy className="w-5 h-5 text-white" />;
      case "gold":
        return <Award className="w-5 h-5 text-cbrta-gold" />;
      case "silver":
        return <Medal className="w-5 h-5 text-gray-300" />;
      default:
        return <Shield className="w-5 h-5 text-amber-700" />;
    }
  };

  const renderPackage = (pkg: SponsorshipPackage) => (
    <Card 
      key={pkg.tier} 
      className={cn(
        "bg-white/5 border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm",
        "flex flex-col h-full",
        pkg.tier === "starsAndStripes" && "ring-2 ring-cbrta-gold"
      )}
    >
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          {getTierIcon(pkg.tier)}
          <CardTitle className="text-white">{pkg.name}</CardTitle>
        </div>
        <p className="text-2xl font-bold text-cbrta-gold">{pkg.price}</p>
        {pkg.highlightFeature && (
          <p className="text-sm text-white/80 mt-2">
            Includes: {pkg.highlightFeature}
          </p>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {pkg.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-white/80 text-sm">
              <Check className="text-cbrta-gold w-4 h-4 mt-1 flex-shrink-0" />
              <span>
                <strong>{benefit.title}:</strong> {' '}
                {typeof benefit.value === 'boolean' ? '✓' : benefit.value}
              </span>
            </li>
          ))}
        </ul>
        <Button 
          className="w-full mt-6 bg-cbrta-gold hover:bg-cbrta-gold/90 text-cbrta-darkgray"
          onClick={() => alert(`Inquire about ${pkg.name} sponsorship package`)}
        >
          <BadgeDollarSign className="w-4 h-4 mr-2" />
          Inquire Now
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="sponsorship-registration" className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-heading font-bold text-cbrta-gold mb-4">
          Sponsorship Opportunities
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          Join us in shaping the future of cross-border transport. Choose the sponsorship package 
          that best aligns with your organization's goals and visibility requirements.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sponsorshipPackages.map(renderPackage)}
      </div>
    </section>
  );
};

export default SponsorshipRegistration;
