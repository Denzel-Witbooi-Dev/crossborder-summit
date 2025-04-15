
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'exhibitors', label: 'Exhibitors' },
    { id: 'prospectus', label: 'Prospectus' },
  ];

  return (
    <div className={cn(
      "z-50 transition-all duration-300 w-full px-4",
      isSticky ? "fixed top-0 bg-cbrta-blue/95 backdrop-blur-sm shadow-lg" : "relative"
    )}>
      <div className="container mx-auto flex justify-end items-center h-16">
        {/* Mobile Menu (Dropdown) */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-cbrta-blue/95 backdrop-blur-sm border-cbrta-gold">
              {menuItems.map((item) => (
                <DropdownMenuItem
                  key={item.id}
                  className="text-white hover:text-cbrta-gold focus:text-cbrta-gold cursor-pointer"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-white text-base">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-cbrta-gold transition-colors p-2"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
