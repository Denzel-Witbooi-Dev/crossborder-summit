
import { Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Exhibitors = () => {
  return (
    <section className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 mb-8 border border-white border-opacity-20 animate-fade-in">
      <h2 className="text-2xl font-heading font-bold text-cbrta-gold mb-6">Become an Exhibitor</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl text-white font-semibold mb-4">Why Exhibit?</h3>
          <ul className="space-y-3">
            {[
              "Connect with 500+ MSME decision-makers",
              "Showcase your products and services",
              "Network with industry leaders",
              "Generate high-quality leads",
              "Build brand awareness",
              "Launch new products"
            ].map((benefit, index) => (
              <li key={index} className="flex items-center gap-2 text-white/80">
                <CheckCircle className="text-cbrta-gold w-5 h-5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <h3 className="text-xl text-white font-semibold mb-4">Exhibition Packages</h3>
            <div className="space-y-4 text-white/80 mb-6">
              <p>Standard booth includes:</p>
              <ul className="list-disc list-inside space-y-2 text-white/70 ml-4">
                <li>3x3m exhibition space</li>
                <li>Shell scheme setup</li>
                <li>Basic furniture package</li>
                <li>2 exhibitor passes</li>
                <li>Listing in conference materials</li>
              </ul>
            </div>
            <Button 
              className="w-full bg-cbrta-gold hover:bg-cbrta-gold/90 text-cbrta-darkgray"
              size="lg"
              onClick={() => alert("Exhibition registration form will be available soon!")}
            >
              <Users className="w-5 h-5 mr-2" />
              Register as Exhibitor
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Exhibitors;
