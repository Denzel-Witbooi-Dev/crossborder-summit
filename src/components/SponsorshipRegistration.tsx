
import { BadgeDollarSign, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SponsorshipRegistration = () => {
  const sponsorshipLevels = [
    {
      name: "Platinum",
      price: "R150,000",
      benefits: [
        "Prime exhibition space (6x3m)",
        "10 conference passes",
        "Keynote speaking slot",
        "Logo on all materials",
        "Full-page ad in program",
        "VIP networking access",
        "Media coverage"
      ]
    },
    {
      name: "Gold",
      price: "R100,000",
      benefits: [
        "Premium exhibition space (3x3m)",
        "5 conference passes",
        "Panel participation",
        "Logo on main materials",
        "Half-page ad in program",
        "Networking event access"
      ]
    },
    {
      name: "Silver",
      price: "R50,000",
      benefits: [
        "Standard exhibition space",
        "3 conference passes",
        "Logo on select materials",
        "Quarter-page ad in program",
        "Networking access"
      ]
    }
  ];

  return (
    <section className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 mb-8 border border-white border-opacity-20 animate-fade-in">
      <h2 className="text-2xl font-heading font-bold text-cbrta-gold mb-6">Sponsorship Opportunities</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {sponsorshipLevels.map((level, index) => (
          <Card key={index} className={`bg-white/5 border-white/10 hover:bg-white/10 transition-colors`}>
            <CardHeader>
              <CardTitle className="text-white">{level.name}</CardTitle>
              <p className="text-2xl font-bold text-cbrta-gold">{level.price}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {level.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-2 text-white/80 text-sm">
                    <Check className="text-cbrta-gold w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-cbrta-gold hover:bg-cbrta-gold/90 text-cbrta-darkgray"
                onClick={() => alert(`Inquire about ${level.name} sponsorship package`)}
              >
                <BadgeDollarSign className="w-4 h-4 mr-2" />
                Inquire Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SponsorshipRegistration;
