
import { Navbar } from "@/components/navigation/Navbar";
import { HeroContent } from "@/components/hero/HeroContent";

export const HeroSection = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar onScrollToSection={scrollToSection} />
      <HeroContent onCalculatorClick={scrollToCalculator} />
    </>
  );
};
