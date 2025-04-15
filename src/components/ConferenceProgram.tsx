import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, Calendar, Clock, FileText } from "lucide-react";

const ConferenceProgram = () => {
  const [activeDay, setActiveDay] = useState("day1");
  const isMobile = useIsMobile();

  const handleDownload = () => {
    // In a real application, this would be the URL to the actual PDF
    const pdfUrl = "/program.pdf";
    
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CBRTA_MSME_Conference_Program.pdf";
    
    // Temporarily add the link to the document and trigger download
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    
    // For demo purposes, show an alert
    alert("In a real application, this would download the conference program PDF. Currently this is a placeholder.");
  };

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 border border-white border-opacity-20 animate-fade-in">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h2 className="text-2xl font-heading font-bold text-cbrta-gold">Conference Program</h2>
        {isMobile && (
          <Button 
            onClick={handleDownload} 
            className="bg-cbrta-gold hover:bg-cbrta-gold/90 text-cbrta-darkgray flex items-center gap-2 w-full"
          >
            <Download size={18} />
            Download Full Program
          </Button>
        )}
      </div>
      
      <p className="text-white/90 mb-6">
        Join us for this two-day event focused on unlocking the potential of MSMEs in the cross-border transport sector.
      </p>
      
      {!isMobile && (
        <Tabs defaultValue="day1" className="w-full mb-8" onValueChange={setActiveDay}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="day1" className="data-[state=active]:bg-cbrta-blue data-[state=active]:text-white">
              Day 1: Strategic Dialogue Sessions
            </TabsTrigger>
            <TabsTrigger value="day2" className="data-[state=active]:bg-cbrta-blue data-[state=active]:text-white">
              Day 2: Action & Opportunity
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="day1" className="mt-0">
            <Card className="bg-white/5 border-white/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xl">Day 1: Strategic Dialogue Sessions & Ecosystem Building</CardTitle>
                <CardDescription className="text-cbrta-gold">Theme: Empowering MSMEs for Inclusive Growth and Innovation</CardDescription>
              </CardHeader>
              <CardContent className="text-white/90">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-cbrta-blue/30">
                        <TableHead className="w-1/5 text-cbrta-gold">Time</TableHead>
                        <TableHead className="w-2/5 text-cbrta-gold">Session</TableHead>
                        <TableHead className="w-2/5 text-cbrta-gold">Details</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 08:00 – 09:00</div></TableCell>
                        <TableCell>Registration & Morning Refreshments</TableCell>
                        <TableCell className="text-white/70">Delegate check-in, exhibitor booths open</TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 09:00 – 09:30</div></TableCell>
                        <TableCell>Welcome & Opening Remarks</TableCell>
                        <TableCell className="text-white/70">Host institution, Conference Chairperson</TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 09:30 – 10:00</div></TableCell>
                        <TableCell>Keynote Address: National MSME Landscape & Policy Priorities</TableCell>
                        <TableCell className="text-white/70">Minister/Director-General/Key Economic Development Leader</TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 10:00 – 10:30</div></TableCell>
                        <TableCell>Partner Address: Driving MSME Growth through Partnerships</TableCell>
                        <TableCell className="text-white/70">Strategic sponsor or international partner</TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 10:30 – 11:00</div></TableCell>
                        <TableCell>Networking Tea Break</TableCell>
                        <TableCell className="text-white/70">Visit exhibition booths</TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 11:00 – 12:30</div></TableCell>
                        <TableCell>Plenary Panel: Enabling MSMEs in the Green and Digital Economy</TableCell>
                        <TableCell className="text-white/70">Government, private sector, academia, youth entrepreneur</TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 12:30 – 13:30</div></TableCell>
                        <TableCell>Lunch & Exhibition Engagement</TableCell>
                        <TableCell className="text-white/70">Seated lunch and networking</TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 13:30 – 15:00</div></TableCell>
                        <TableCell>Breakaway Sessions: Thematic Workshops (3 Parallel Tracks)</TableCell>
                        <TableCell className="text-white/70">Access to Finance, Policy & Market Access, Innovation & Inclusion</TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 15:00 – 15:15</div></TableCell>
                        <TableCell>Comfort Break</TableCell>
                        <TableCell className="text-white/70"></TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 15:15 – 16:30</div></TableCell>
                        <TableCell>Pitch & Showcase Session: MSMEs Doing Big Things</TableCell>
                        <TableCell className="text-white/70">Selected MSMEs present innovations, models, or services</TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 16:30 – 17:00</div></TableCell>
                        <TableCell>Closing Reflection & Wrap-Up Day 1</TableCell>
                        <TableCell className="text-white/70">Summary of outcomes, what to expect on Day 2</TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 17:00 – 18:00</div></TableCell>
                        <TableCell>Networking Cocktail (Optional/By Invite)</TableCell>
                        <TableCell className="text-white/70">Hosted by sponsor or development partner</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-cbrta-gold mb-4">Breakaway Sessions</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-cbrta-blue/20">
                      <AccordionTrigger className="text-white hover:text-cbrta-gold hover:no-underline">
                        Breakaway Session 1: Access to Finance – Funding MSME Growth
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <p className="font-semibold text-cbrta-gold mb-2">Sub-theme: Unlocking Capital: Public, Private & Blended Finance Solutions</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Overview of available MSME finance instruments (grants, loans, equity)</li>
                          <li>Banking sector, DFIs, SEDA, NYDA & FinTech's</li>
                          <li>Investment-readiness strategies for MSMEs</li>
                          <li>Real stories: MSMEs that secured funding</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2" className="border-cbrta-blue/20">
                      <AccordionTrigger className="text-white hover:text-cbrta-gold hover:no-underline">
                        Breakaway Session 2: Compliance, Policy & Market Access
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <p className="font-semibold text-cbrta-gold mb-2">Sub-theme: Breaking Barriers: Navigating Regulations & Unlocking Procurement Opportunities</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>How to comply with statutory requirements (CIPC, SARS, BEE, COIDA, etc.)</li>
                          <li>Opportunities within government & corporate procurement value chains</li>
                          <li>Understanding tender processes and bid support</li>
                          <li>Compliance as a competitive advantage</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3" className="border-cbrta-blue/20">
                      <AccordionTrigger className="text-white hover:text-cbrta-gold hover:no-underline">
                        Breakaway Session 3: MSME Innovation & Inclusion
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <p className="font-semibold text-cbrta-gold mb-2">Sub-theme: Tech, Talent & Transformation – Future-Proofing MSMEs</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Integrating tech into MSME models (e-commerce, AI, digital tools)</li>
                          <li>Youth & women entrepreneurship pathways</li>
                          <li>Green innovation and sustainable business practices</li>
                          <li>Access to incubation, hubs, and innovation labs</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="day2" className="mt-0">
            <Card className="bg-white/5 border-white/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xl">Day 2: Action & Opportunity</CardTitle>
                <CardDescription className="text-cbrta-gold">Theme: Bridging the Gaps: Access to Markets, Funding & Capacity</CardDescription>
              </CardHeader>
              <CardContent className="text-white/90">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-cbrta-blue/30">
                        <TableHead className="w-1/5 text-cbrta-gold">Time</TableHead>
                        <TableHead className="w-2/5 text-cbrta-gold">Session</TableHead>
                        <TableHead className="w-2/5 text-cbrta-gold">Details</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 08:00 – 09:00</div></TableCell>
                        <TableCell>Arrival & Coffee Conversations</TableCell>
                        <TableCell className="text-white/70">Light breakfast, exhibition area open</TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 09:00 – 09:15</div></TableCell>
                        <TableCell>Day 2 Kick-off & Recap</TableCell>
                        <TableCell className="text-white/70">Facilitator overview</TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 09:15 – 10:30</div></TableCell>
                        <TableCell>Panel: Funding the Future – Rethinking MSME Finance & Grants</TableCell>
                        <TableCell className="text-white/70">Development finance institutions, banks, FinTech's</TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 10:30 – 11:00</div></TableCell>
                        <TableCell>Networking Tea Break</TableCell>
                        <TableCell className="text-white/70">Exhibition walkabout</TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 11:00 – 12:30</div></TableCell>
                        <TableCell>Policy & Support Roundtable: Local Government and MSME Development</TableCell>
                        <TableCell className="text-white/70">Local municipalities, SEDA, Chambers, etc.</TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 12:30 – 13:30</div></TableCell>
                        <TableCell>Lunch & Networking</TableCell>
                        <TableCell className="text-white/70"></TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 13:30 – 15:00</div></TableCell>
                        <TableCell>Breakaway Sessions: Masterclasses (Skills-Focused)</TableCell>
                        <TableCell className="text-white/70">Digital Marketing, Tendering, Packaging & Export Readiness</TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 15:00 – 15:30</div></TableCell>
                        <TableCell>Comfort Break</TableCell>
                        <TableCell className="text-white/70"></TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 15:30 – 16:15</div></TableCell>
                        <TableCell>Closing Panel: Public-Private Collaboration – Where to From Here?</TableCell>
                        <TableCell className="text-white/70">Action plans, pledges, strategic outcomes</TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 16:15 – 16:45</div></TableCell>
                        <TableCell>Conference Declaration / Resolutions</TableCell>
                        <TableCell className="text-white/70">Summary statement or communique</TableCell>
                      </TableRow>
                      <TableRow className="border-cbrta-blue/20 hover:bg-white/5">
                        <TableCell className="font-medium"><div className="flex items-center gap-2"><Clock size={16} className="text-cbrta-gold" /> 16:45 – 17:00</div></TableCell>
                        <TableCell>Vote of Thanks & Official Close</TableCell>
                        <TableCell className="text-white/70">Event hosts and main sponsors</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-cbrta-gold mb-4">Masterclasses</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-cbrta-blue/20">
                      <AccordionTrigger className="text-white hover:text-cbrta-gold hover:no-underline">
                        Masterclass 1: Digital Marketing for MSMEs
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <p className="font-semibold text-cbrta-gold mb-2">Sub-theme: Getting Found: Social Media, SEO & Content That Converts</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Creating a digital presence on a budget</li>
                          <li>Tools for social media management, paid ads, and analytics</li>
                          <li>Storytelling for small businesses</li>
                          <li>Real-time demos: Canva, Meta Business Suite, TikTok, Mailchimp</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2" className="border-cbrta-blue/20">
                      <AccordionTrigger className="text-white hover:text-cbrta-gold hover:no-underline">
                        Masterclass 2: Tendering & Supplier Readiness
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <p className="font-semibold text-cbrta-gold mb-2">Sub-theme: Winning Bids: How to Prepare, Package & Present for Procurement</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Understanding bid specifications and tender processes</li>
                          <li>Building a competitive supplier profile</li>
                          <li>Pricing strategies and budgeting for tenders</li>
                          <li>Case studies from procurement officers and winning MSMEs</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3" className="border-cbrta-blue/20">
                      <AccordionTrigger className="text-white hover:text-cbrta-gold hover:no-underline">
                        Masterclass 3: Packaging, Branding & Export Readiness
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        <p className="font-semibold text-cbrta-gold mb-2">Sub-theme: From Local to Global: Building Products that Sell</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Packaging and product development for retail and export</li>
                          <li>Compliance with labelling, quality and standards (SABS, SANAS)</li>
                          <li>Branding tips for shelf appeal and digital platforms</li>
                          <li>Export-readiness checklists and market access support</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-cbrta-gold mb-4">
          {isMobile ? "Program Sessions" : "Breakaway Sessions"}
        </h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-cbrta-blue/20">
            <AccordionTrigger className="text-white hover:text-cbrta-gold hover:no-underline">
              Breakaway Session 1: Access to Finance – Funding MSME Growth
            </AccordionTrigger>
            <AccordionContent className="text-white/80">
              <p className="font-semibold text-cbrta-gold mb-2">Sub-theme: Unlocking Capital: Public, Private & Blended Finance Solutions</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Overview of available MSME finance instruments (grants, loans, equity)</li>
                <li>Banking sector, DFIs, SEDA, NYDA & FinTech's</li>
                <li>Investment-readiness strategies for MSMEs</li>
                <li>Real stories: MSMEs that secured funding</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-cbrta-blue/20">
            <AccordionTrigger className="text-white hover:text-cbrta-gold hover:no-underline">
              Breakaway Session 2: Compliance, Policy & Market Access
            </AccordionTrigger>
            <AccordionContent className="text-white/80">
              <p className="font-semibold text-cbrta-gold mb-2">Sub-theme: Breaking Barriers: Navigating Regulations & Unlocking Procurement Opportunities</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>How to comply with statutory requirements (CIPC, SARS, BEE, COIDA, etc.)</li>
                <li>Opportunities within government & corporate procurement value chains</li>
                <li>Understanding tender processes and bid support</li>
                <li>Compliance as a competitive advantage</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-cbrta-blue/20">
            <AccordionTrigger className="text-white hover:text-cbrta-gold hover:no-underline">
              Breakaway Session 3: MSME Innovation & Inclusion
            </AccordionTrigger>
            <AccordionContent className="text-white/80">
              <p className="font-semibold text-cbrta-gold mb-2">Sub-theme: Tech, Talent & Transformation – Future-Proofing MSMEs</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Integrating tech into MSME models (e-commerce, AI, digital tools)</li>
                <li>Youth & women entrepreneurship pathways</li>
                <li>Green innovation and sustainable business practices</li>
                <li>Access to incubation, hubs, and innovation labs</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      {!isMobile && (
        <div className="mt-8 flex justify-center">
          <Button 
            onClick={handleDownload} 
            size="lg"
            className="bg-cbrta-gold hover:bg-cbrta-gold/90 text-cbrta-darkgray flex items-center gap-2"
          >
            <FileText size={20} />
            Download Full Program PDF
          </Button>
        </div>
      )}
    </div>
  );
};

export default ConferenceProgram;
