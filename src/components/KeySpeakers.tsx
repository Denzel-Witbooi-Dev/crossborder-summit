
import { User, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

type Speaker = {
  name: string;
  title: string;
  organization: string;
  bio: string;
  imageUrl?: string;
  profileUrl?: string;
};

const speakers: Speaker[] = [
  {
    name: "Dr. Sarah Ndlovu",
    title: "Deputy Director-General",
    organization: "Department of Trade, Industry and Competition",
    bio: "Expert in economic policy with a focus on MSME development in the SADC region.",
    imageUrl: "/placeholder.svg"
  },
  {
    name: "Mr. Jacob Mokoena",
    title: "CEO",
    organization: "Cross-Border Transport Association",
    bio: "Seasoned transport sector executive with 15+ years of experience in cross-border logistics.",
    imageUrl: "/placeholder.svg"
  },
  {
    name: "Ms. Thandi Mavuso",
    title: "Founder & Managing Director",
    organization: "Trans-African Logistics Solutions",
    bio: "Award-winning entrepreneur who built a fleet of 50 trucks from a single vehicle startup.",
    imageUrl: "/placeholder.svg"
  },
  {
    name: "Prof. Emmanuel Nkomo",
    title: "Head of Transport Economics",
    organization: "University of Johannesburg",
    bio: "Renowned academic and researcher specializing in transport corridor development.",
    imageUrl: "/placeholder.svg"
  }
];

const KeySpeakers = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 mb-8 border border-white border-opacity-20 animate-fade-in">
      <h2 className="text-2xl font-heading font-bold text-cbrta-gold mb-6">Key Speakers</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {speakers.map((speaker, index) => (
          <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-4">
                {speaker.imageUrl ? (
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-cbrta-blue/20 flex items-center justify-center">
                    <img
                      src={speaker.imageUrl}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = ""; // Clear the broken image
                        target.onerror = null; // Prevent infinite loop
                        target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><User size={36} className="text-cbrta-gold" /></div>';
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full bg-cbrta-blue/20 flex items-center justify-center">
                    <User size={36} className="text-cbrta-gold" />
                  </div>
                )}
              </div>
              <CardTitle className="text-white text-lg">{speaker.name}</CardTitle>
              <CardDescription className="text-cbrta-gold">{speaker.title}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-white/80 text-sm">{speaker.organization}</p>
              <p className="text-white/70 text-sm mt-2">{speaker.bio}</p>
            </CardContent>
            {speaker.profileUrl && (
              <CardFooter>
                <a 
                  href={speaker.profileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cbrta-gold text-sm flex items-center hover:underline"
                >
                  View Profile <ExternalLink size={14} className="ml-1" />
                </a>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-white/80">
          Additional speakers will be announced closer to the event date.
        </p>
      </div>
    </section>
  );
};

export default KeySpeakers;
