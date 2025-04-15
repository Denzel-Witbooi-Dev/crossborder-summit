
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
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

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'prospectus', label: 'Prospectus' },
    { id: 'sponsors', label: 'Sponsors' },
  ];

  return (
    <div className="relative z-50">
      {/* Mobile Menu */}
      <div className="md:hidden">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger className="text-white p-2 hover:bg-white/10 rounded-lg">
            <Menu className="h-6 w-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-cbrta-darkgray/95 backdrop-blur-sm border-white/20">
            {menuItems.map((item) => (
              <DropdownMenuItem
                key={item.id}
                className="text-white hover:bg-white/10 hover:text-cbrta-gold cursor-pointer"
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
        <ul className="flex flex-row gap-6 items-center text-white">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => scrollToSection(item.id)}
                className="hover:text-cbrta-gold transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

