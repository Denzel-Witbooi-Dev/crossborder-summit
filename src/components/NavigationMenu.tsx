
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className={cn(
      "z-50 transition-all duration-300",
      isSticky ? "sticky top-0 bg-cbrta-blue/95 backdrop-blur-sm shadow-lg" : "relative"
    )}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <nav className={cn(
        "md:block",
        isOpen 
          ? "fixed inset-0 bg-cbrta-darkgray/95 backdrop-blur-md flex items-center justify-center md:relative md:bg-transparent md:backdrop-blur-none" 
          : "hidden"
      )}>
        <ul className={cn(
          "flex md:flex-row flex-col gap-8 md:gap-6 items-center text-white text-lg md:text-base",
          isOpen && "animate-in fade-in duration-300"
        )}>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-cbrta-gold transition-colors p-2"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('speakers')}
              className="hover:text-cbrta-gold transition-colors p-2"
            >
              Speakers
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('sponsors')}
              className="hover:text-cbrta-gold transition-colors p-2"
            >
              Sponsors
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('exhibitors')}
              className="hover:text-cbrta-gold transition-colors p-2"
            >
              Exhibitors
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('prospectus')}
              className="hover:text-cbrta-gold transition-colors p-2"
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
