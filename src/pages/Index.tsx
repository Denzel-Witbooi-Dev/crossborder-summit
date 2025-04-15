
import { MapPin, Calendar, Clock } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import ConferenceProgram from "@/components/ConferenceProgram";
import KeySpeakers from "@/components/KeySpeakers";
import Sponsors from "@/components/Sponsors";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  // Set conference date: June 26, 2025
  const conferenceDate = new Date("2025-06-26T09:00:00+02:00");
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cbrta-blue to-cbrta-darkgray">
      {/* Header with Logo */}
      <header className="container mx-auto pt-6 px-4">
        <div className="flex justify-center md:justify-start">
          <img 
            src="/lovable-uploads/cd69fd35-2767-47fc-a3f6-3a011e3b3975.png" 
            alt="C-BRTA Logo" 
            className="h-16 md:h-20 w-auto"
          />
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto flex-grow px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          {/* Conference Title */}
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-4">
              C-BRTA MSME Conference 2025
            </h1>
            
            {/* Event Details (Date, Venue) */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-white mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-cbrta-gold" />
                <span>June 26-27, 2025</span>
              </div>
              <div className="hidden md:block text-cbrta-gold">•</div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-cbrta-gold" />
                <span>09:00 AM - 05:00 PM</span>
              </div>
              <div className="hidden md:block text-cbrta-gold">•</div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-cbrta-gold" />
                <span>Gqeberha, Eastern Cape</span>
              </div>
            </div>
            
            {/* Theme */}
            <div className="bg-gradient-to-r from-cbrta-blue via-cbrta-lightblue to-cbrta-blue p-4 rounded-lg shadow-lg border border-cbrta-lightblue mb-8">
              <h2 className="text-xl md:text-2xl font-heading text-white">
                <span className="text-cbrta-gold">&ldquo;</span>
                Unlocking the Potential of MSMEs: Driving Innovation, Growth, and Resilience
                <span className="text-cbrta-gold">&rdquo;</span>
              </h2>
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="mb-12 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <CountdownTimer targetDate={conferenceDate} />
          </div>
          
          {/* Register Interest Button */}
          <div className="text-center mb-12 animate-fade-in" style={{animationDelay: "0.25s"}}>
            <button 
              className="bg-cbrta-gold hover:bg-opacity-90 text-cbrta-darkgray font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cbrta-gold focus:ring-opacity-50"
              onClick={() => alert("RSVP will open soon. Thank you for your interest!")}
            >
              RSVP Here
            </button>
          </div>

                    {/* Venue Details */}
                    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 mb-8 border border-white border-opacity-20 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <h3 className="text-xl font-heading font-semibold text-cbrta-gold mb-3">Venue</h3>
            <p className="text-white mb-2 font-medium">Coega Vulindlela Accommodation and Conference Centre (VACC)</p>
            <p className="text-white/80">Gqeberha, Eastern Cape, South Africa</p>
          </div>
          
                    {/* Conference Description */}
                    <div className="space-y-6 text-white/90 animate-fade-in" style={{animationDelay: "0.5s"}}>
            <p>
              The Cross-Border Road Transport Agency (C-BRTA) is proud to host this conference aimed at fostering collaboration 
              and innovation among industry players, policymakers, and stakeholders in the cross-border transport sector.
            </p>
            
            <p>
              The event will address the unique challenges MSMEs face in cross-border road transport, including regulatory 
              complexities, access to finance, infrastructure limitations, and technological advancements.
            </p>
            
            <p>
              Through insightful discussions, case studies, workshops, and networking opportunities, the conference will provide 
              a comprehensive understanding of how MSMEs can adapt to evolving market demands, enhance operational efficiency, 
              and navigate the complexities of cross-border trade.
            </p>
            
            <p>
              By empowering these enterprises, C-BRTA aims to create an inclusive, sustainable, and more efficient transport 
              ecosystem that will benefit small businesses, the entire cross-border road transport industry, and the broader 
              regional economy.
            </p>
          </div>
        </div>
    

          {/* Key Speakers */}
          <section className="mb-12 animate-fade-in" style={{animationDelay: "0.28s"}}>
            <KeySpeakers />
          </section>
          
          {/* Conference Program */}
          <section className="mb-12 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <ConferenceProgram />
          </section>
          
          {/* Sponsors */}
          {/* <section className="mb-12 animate-fade-in" style={{animationDelay: "0.33s"}}>
            <Sponsors />
          </section> */}
          

          
          </main>
      
      {/* Footer */}
      <footer className="bg-cbrta-darkgray py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Cross-Border Road Transport Agency. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
