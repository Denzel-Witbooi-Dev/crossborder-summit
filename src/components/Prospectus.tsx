
import { Book, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Prospectus = () => {
  const handleDownload = () => {
       // In a real application, this would be the URL to the actual PDF
       const pdfUrl = "https://extranet.coega.co.za/files/2025/Presidential_Visit/Brochure.pdf";
    
       // Create a temporary anchor element
       const link = document.createElement("a");
       link.href = pdfUrl;
       link.download = "CBRTA_MSME_Conference_Program.pdf";
       
       // Temporarily add the link to the document and trigger download
       document.body.appendChild(link);
       link.click();
       
       // Clean up
       document.body.removeChild(link);
       
    // In a real application, this would download the actual prospectus PDF
    // alert("In a real application, this would download the conference prospectus. Currently this is a placeholder.");
  };

  return (
    <section className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 mb-8 border border-white border-opacity-20 animate-fade-in">
      <h2 className="text-2xl font-heading font-bold text-cbrta-gold mb-6">Conference Prospectus</h2>
      
      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <CardTitle className="text-white text-xl">Download Our Detailed Prospectus</CardTitle>
          <CardDescription className="text-cbrta-gold">
            Explore opportunities and gain insights into the MSME Conference 2025
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-white/80">
              Our comprehensive prospectus provides detailed information about:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70 ml-4">
              <li>Conference themes and objectives</li>
              <li>Detailed program structure</li>
              <li>Sponsorship opportunities and benefits</li>
              <li>Exhibition space details and floor plans</li>
              <li>Delegate profiles and demographics</li>
              <li>Marketing and branding opportunities</li>
            </ul>
            
            <div className="mt-8 flex justify-center">
              <Button 
                onClick={handleDownload}
                className="bg-cbrta-gold hover:bg-cbrta-gold/90 text-cbrta-darkgray flex items-center gap-2"
                size="lg"
              >
                <Book className="w-5 h-5" />
                Download Prospectus
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Prospectus;
