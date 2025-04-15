
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { useState } from "react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg"
      >
        <Menu />
      </button>

      <nav className={cn(
        "md:block",
        isOpen ? "block absolute top-full left-0 right-0 bg-cbrta-darkgray/95 backdrop-blur-sm p-4 rounded-lg mt-2" : "hidden"
      )}>
        <ul className="flex md:flex-row flex-col gap-6 items-center text-white">
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-cbrta-gold transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('speakers')}
              className="hover:text-cbrta-gold transition-colors"
            >
              Speakers
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('sponsors')}
              className="hover:text-cbrta-gold transition-colors"
            >
              Sponsors
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('exhibitors')}
              className="hover:text-cbrta-gold transition-colors"
            >
              Exhibitors
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('prospectus')}
              className="hover:text-cbrta-gold transition-colors"
            >
              Prospectus
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
