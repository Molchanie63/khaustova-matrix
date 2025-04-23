import { useState, useEffect } from "react";
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink 
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
    { id: "about", label: "Обо мне", isLink: false },
    { id: "services", label: "Услуги", isLink: false },
    { id: "calculator", label: "Калькулятор", isLink: false },
    { id: "blog", label: "Блог", path: "/blog", isLink: true },
    { id: "testimonials", label: "Отзывы", isLink: false }, // Изменяем на прокрутку к testimonials
    { id: "faq", label: "FAQ", isLink: false },
    { id: "contact", label: "Контакты", isLink: false },
  ];

  const handleNavClick = (id: string, isLink: boolean) => {
    if (!isLink) {
      onScrollToSection(id);
    }
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-gray-900/90 backdrop-blur-sm"}`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className={`font-bold text-xl transition-all duration-300 ${isScrolled ? "text-gray-800" : "text-white drop-shadow-md"}`}>
            <Link to="/">Цифровой психоанализ</Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <NavigationMenu>
              <div className="flex space-x-4">
                {navItems.map(item => (
                  <NavigationMenuItem key={item.id}>
                    {item.isLink ? (
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.path}
                          className={`${
                            isScrolled 
                              ? "text-gray-800 hover:text-[#3A6E5A]" 
                              : "text-white hover:text-[#A8D5BA] drop-shadow-md"
                          } px-4 py-2 font-medium transition-colors`}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    ) : (
                      <NavigationMenuLink 
                        className={`${
                          isScrolled 
                            ? "text-gray-800 hover:text-[#3A6E5A]" 
                            : "text-white hover:text-[#A8D5BA] drop-shadow-md"
                        } px-4 py-2 font-medium transition-colors`}
                        onClick={() => handleNavClick(item.id, item.isLink)}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </div>
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
                item.isLink ? (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`${
                      isScrolled 
                        ? "text-gray-800 hover:text-[#3A6E5A]" 
                        : "text-white hover:text-[#A8D5BA]"
                    } py-2 text-left transition-colors`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id, item.isLink)}
                    className={`${
                      isScrolled 
                        ? "text-gray-800 hover:text-[#3A6E5A]" 
                        : "text-white hover:text-[#A8D5BA]"
                    } py-2 text-left transition-colors`}
                  >
                    {item.label}
                  </button>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};