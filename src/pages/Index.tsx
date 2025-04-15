import { MapPin, Calendar, Clock } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import ConferenceProgram from "@/components/ConferenceProgram";
import KeySpeakers from "@/components/KeySpeakers";
import Sponsors from "@/components/Sponsors";
import Prospectus from "@/components/Prospectus";
import Exhibitors from "@/components/Exhibitors";
import SponsorshipRegistration from "@/components/SponsorshipRegistration";
import { useIsMobile } from "@/hooks/use-mobile";
import Navigation from "@/components/NavigationMenu";

const Index = () => {
  const conferenceDate = new Date("2025-06-26T09:00:00+02:00");
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-cbrta-blue to-cbrta-darkgray">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 bg-cbrta-darkgray/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <img 
              src="/lovable-uploads/cd69fd35-2767-47fc-a3f6-3a011e3b3975.png" 
              alt="C-BRTA Logo" 
              className="h-12 md:h-16 w-auto"
            />
            <Navigation />
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center border-b border-white/10">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cbrta-blue/95 to-cbrta-darkgray/95" />
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Conference Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-6 animate-fade-in">
              C-BRTA MSME Conference 2025
            </h1>
            
            {/* Theme */}
            <p className="text-xl md:text-2xl text-cbrta-gold font-heading mb-8 animate-fade-in" style={{animationDelay: "0.1s"}}>
              Unlocking the Potential of MSMEs: Driving Innovation, Growth, and Resilience
            </p>
            
            {/* Event Details */}
            <div className="inline-flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center text-white/90 mb-12 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-cbrta-gold" />
                <span>June 26-27, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-cbrta-gold" />
                <span>09:00 AM - 05:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-cbrta-gold" />
                <span>Gqeberha, Eastern Cape</span>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: "0.3s"}}>
              <button 
                className="bg-cbrta-gold hover:bg-opacity-90 text-cbrta-darkgray px-8 py-3 rounded-full font-bold transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cbrta-gold focus:ring-opacity-50 shadow-lg"
                onClick={() => {
                  const element = document.getElementById('prospectus');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Prospectus
              </button>
              <button 
                className="bg-transparent border-2 border-cbrta-gold text-cbrta-gold px-8 py-3 rounded-full font-bold hover:bg-cbrta-gold hover:text-cbrta-darkgray transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cbrta-gold focus:ring-opacity-50"
                onClick={() => alert("Registration will open soon. Thank you for your interest!")}
              >
                Register Interest
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Countdown Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cbrta-blue/20 to-transparent rounded-2xl blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <CountdownTimer targetDate={conferenceDate} />
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-cbrta-gold">About the Conference</h2>
              <div className="prose prose-invert">
                <p className="text-white/90">
                  The Cross-Border Road Transport Agency (C-BRTA) proudly presents its flagship MSME Conference 2025, 
                  a transformative two-day event designed to catalyze growth and innovation in the cross-border transport sector.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold text-cbrta-gold mb-4">Conference Objectives</h3>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start gap-2">
                        <span className="text-cbrta-gold">•</span>
                        Foster collaboration between MSMEs and industry stakeholders
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cbrta-gold">•</span>
                        Showcase innovative solutions
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cbrta-gold">•</span>
                        Facilitate access to funding
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-cbrta-gold mb-4">Who Should Attend?</h3>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start gap-2">
                        <span className="text-cbrta-gold">•</span>
                        MSME owners and entrepreneurs
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cbrta-gold">•</span>
                        Transport operators
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cbrta-gold">•</span>
                        Industry regulators
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=80"
                alt="Conference"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cbrta-darkgray/80 to-transparent" />
            </div>
          </section>

          {/* Venue Section */}
          <section className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=2000&q=80"
                alt="Venue"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cbrta-darkgray/90 to-cbrta-darkgray/70" />
            </div>
            
            <div className="relative p-12 md:p-16">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-heading font-bold text-cbrta-gold mb-4">Venue</h2>
                <h3 className="text-xl text-white mb-4">Coega Vulindlela Accommodation and Conference Centre (VACC)</h3>
                <p className="text-white/80 mb-6">
                  Located in the heart of Gqeberha, Eastern Cape, our venue offers state-of-the-art facilities 
                  and a professional environment perfect for networking and learning.
                </p>
              </div>
            </div>
          </section>

          {/* Other Sections */}
          <section id="speakers" className="space-y-16">
            <KeySpeakers />
          </section>

          <section id="prospectus">
            <Prospectus />
          </section>

          <section>
            <ConferenceProgram />
          </section>

          <section id="exhibitors">
            <Exhibitors />
          </section>

          <section>
            <SponsorshipRegistration />
          </section>

          <section id="sponsors">
            <Sponsors />
          </section>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-cbrta-darkgray border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <img 
              src="/lovable-uploads/cd69fd35-2767-47fc-a3f6-3a011e3b3975.png" 
              alt="C-BRTA Logo" 
              className="h-12 w-auto"
            />
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} Cross-Border Road Transport Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
