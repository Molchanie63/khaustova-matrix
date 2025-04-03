
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sparkles } from "lucide-react";
import { GeometricBackground } from "@/components/animations/GeometricBackground";

interface HeroContentProps {
  onCalculatorClick: () => void;
}

export const HeroContent = ({ onCalculatorClick }: HeroContentProps) => {
  const titleAnimation = useScrollAnimation<HTMLHeadingElement>();
  const subtitleAnimation = useScrollAnimation<HTMLParagraphElement>();
  const descriptionAnimation = useScrollAnimation<HTMLParagraphElement>();
  const buttonsAnimation = useScrollAnimation<HTMLDivElement>();
  const contactAnimation = useScrollAnimation<HTMLParagraphElement>();

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Background animation - сакральная геометрия */}
      <GeometricBackground />
      
      {/* Overlay с градиентом */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleAnimation.ref}
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-8 ${titleAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <span className="inline-block whitespace-normal md:whitespace-nowrap">
              {/* Title with gradient animation */}
              <span className="tracking-tight uppercase font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#2D5542] to-[#5D9B89] relative">
                ЦИФРОВАЯ ВСЕЛЕННАЯ
                
                {/* Animated underline effect */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#5D9B89]/30 via-[#5D9B89] to-[#5D9B89]/30 rounded-full"></span>
              </span>
              
              {/* Subtle particles */}
              <span className="absolute top-1/4 right-1/3 size-2 rounded-full bg-[#A8D5BA]/70 animate-pulse"></span>
              <span className="absolute bottom-1/3 left-1/4 size-1.5 rounded-full bg-[#A8D5BA]/60 animate-pulse" style={{animationDelay: '1s'}}></span>
            </span>
          </h1>
          
          <p 
            ref={subtitleAnimation.ref}
            className={`text-xl md:text-2xl text-gray-300 mb-8 font-light ${subtitleAnimation.isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}
          >
            Понять себя и близких — проще, чем кажется
          </p>
          
          <p 
            ref={descriptionAnimation.ref}
            className={`text-lg text-gray-400 mb-10 max-w-2xl mx-auto ${descriptionAnimation.isVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}
          >
            Я — Ольга, эксперт по цифровому психоанализу. С 2023 года помогаю людям находить ответы через систему Александрова — точный и практичный метод самопознания.
          </p>
          
          <div 
            ref={buttonsAnimation.ref}
            className={`flex flex-col sm:flex-row gap-4 justify-center ${buttonsAnimation.isVisible ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] hover:from-[#4A6D5C] hover:to-[#2D5542] text-white rounded-full px-8 uppercase font-medium tracking-wide shadow-lg shadow-[#5D9B89]/30 transition-all duration-300 border border-[#5D9B89]/30 group relative overflow-hidden transform hover:scale-105"
            >
              <a href="https://t.me/NeikaSparkBot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 relative z-10">
                <span>Выбрать консультацию</span>
                <span className="size-1.5 rounded-full bg-white animate-pulse"></span>
              </a>
              {/* Эффект при наведении */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#3A6E5A] to-[#2D5542] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#5D9B89]/50 text-[#A8D5BA] hover:bg-[#5D9B89]/10 rounded-full px-8 uppercase font-medium tracking-wide shadow-lg transition-all duration-300 group relative overflow-hidden transform hover:scale-105"
              onClick={onCalculatorClick}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Рассчитать матрицу</span>
                <Sparkles className="size-4 text-[#A8D5BA] animate-pulse" />
              </span>
              {/* Эффект при наведении */}
              <span className="absolute inset-0 w-0 bg-[#5D9B89]/20 group-hover:w-full transition-all duration-300 ease-out rounded-full z-0"></span>
            </Button>
          </div>
          
          <p 
            ref={contactAnimation.ref}
            className={`mt-8 text-gray-400 ${contactAnimation.isVisible ? 'animate-fade-in-up animate-delay-500' : 'opacity-0'} transform hover:translate-y-[-2px] transition-transform`}
          >
            Готов начать? Пиши мне: <a href="https://t.me/NeikaSparkBot" target="_blank" rel="noopener noreferrer" className="text-[#A8D5BA] hover:underline relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#A8D5BA]/70 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">@NeikaSparkBot</a>
          </p>
        </div>
      </div>
      
      {/* Индикатор скролла */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-fade-in-up animate-delay-600"></div>
        </div>
      </div>
    </div>
  );
};
