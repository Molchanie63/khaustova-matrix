
import { useState, useEffect } from "react";
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onScrollToSection: (id: string) => void;
}

export const Navbar = ({ onScrollToSection }: NavbarProps) => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'about', label: 'Обо мне' },
    { id: 'services', label: 'Услуги' },
    { id: 'calculator', label: 'Калькулятор' },
    { id: 'blog', label: 'Блог' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Контакты' },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm" 
          : "bg-gray-900/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className={`font-bold text-xl transition-all duration-300 ${
            isScrolled ? "text-gray-800" : "text-white drop-shadow-md"
          }`}>
            Цифровой психоанализ
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map(item => (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink 
                      className={`${navigationMenuTriggerStyle()} ${
                        isScrolled 
                          ? "text-gray-800 hover:text-[#3A6E5A] bg-transparent" 
                          : "text-white hover:text-white bg-transparent hover:bg-white/10 drop-shadow-md font-medium"
                      }`}
                      onClick={() => handleNavClick(item.id)}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full ${
                isScrolled 
                  ? "text-gray-800 hover:bg-gray-100" 
                  : "text-white hover:bg-white/10 drop-shadow-md"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <div className={`absolute top-full left-0 right-0 ${
            isScrolled 
              ? "bg-white/95 text-gray-800" 
              : "bg-gray-900/95 text-white"
          } backdrop-blur-md shadow-md py-4 px-4 animate-fade-in-up`}>
            <nav className="flex flex-col space-y-3">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`${
                    isScrolled 
                      ? "text-gray-800 hover:text-[#3A6E5A]" 
                      : "text-white hover:text-[#A8D5BA]"
                  } py-2 text-left transition-colors`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
