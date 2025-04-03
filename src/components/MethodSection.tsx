
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BrainCircuit, Heart, TrendingUp, MousePointerClick } from "lucide-react";

export const MethodSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>(0.2);

  return (
    <section id="method" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center max-w-3xl mx-auto mb-16 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex justify-center mb-4">
            <div className="w-20 h-1 bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 uppercase tracking-wide">
            ПОЧЕМУ МЕТОД РАБОТАЕТ
          </h2>
          <p className="text-lg text-gray-700">
            Современный подход к нумерологии, основанный на глубоком анализе личности через цифры
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className={`bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md border border-gray-200 text-center transform transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#5D9B89] to-[#3A6E5A] flex items-center justify-center">
              <BrainCircuit className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Научный подход</h3>
            <p className="text-gray-700">
              Метод основан на математических расчетах и проверенных данных, а не на догадках
            </p>
          </div>

          <div className={`bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md border border-gray-200 text-center transform transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#5D9B89] to-[#3A6E5A] flex items-center justify-center">
              <Heart className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Индивидуальный подход</h3>
            <p className="text-gray-700">
              Каждая матрица уникальна, как отпечаток пальца, и требует особого анализа
            </p>
          </div>

          <div className={`bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md border border-gray-200 text-center transform transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#5D9B89] to-[#3A6E5A] flex items-center justify-center">
              <TrendingUp className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Практические результаты</h3>
            <p className="text-gray-700">
              Конкретные рекомендации для улучшения всех сфер жизни
            </p>
          </div>

          <div className={`bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md border border-gray-200 text-center transform transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#5D9B89] to-[#3A6E5A] flex items-center justify-center">
              <MousePointerClick className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Простота применения</h3>
            <p className="text-gray-700">
              Легко интегрируется в повседневную жизнь для принятия решений
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
