import React, { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MatrixResult } from "@/utils/matrixCalculations";
import { MatrixGrid } from "./MatrixGrid";
import { NumbersExplanation } from "./NumbersExplanation";
import { MatrixLinesExplanation } from "./MatrixLinesExplanation";
import { ChevronDown, ChevronUp } from "lucide-react";

interface MatrixResultsProps {
  matrixResult: MatrixResult;
}

export const MatrixResults = ({ matrixResult }: MatrixResultsProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLHeadingElement>(0.2);
  const [activeTab, setActiveTab] = useState<"numbers" | "lines">("numbers");
  const [isNumbersOpen, setIsNumbersOpen] = useState(false);
  const [isLinesOpen, setIsLinesOpen] = useState(false);

  return (
    <div 
      ref={ref}
      className={`p-4 sm:p-6 lg:p-8 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
      role="region"
      aria-labelledby="matrix-title"
    >
      <h3 
        ref={headerRef}
        id="matrix-title"
        className={`text-2xl sm:text-3xl lg:text-5xl font-['Montserrat'] font-extrabold mb-4 sm:mb-6 lg:mb-8 text-center text-primary-gradient uppercase tracking-wide ${headerVisible ? 'animate-scale-in' : 'opacity-0'}`}
      >
        Твоя матрица
      </h3>
      
      <div className={`mb-6 sm:mb-8 lg:mb-10 ${isVisible ? 'animate-scale-in animate-delay-100' : 'opacity-0'}`}>
        <MatrixGrid matrixResult={matrixResult} />
      </div>
      
      <div className={`mb-6 sm:mb-8 lg:mb-10 ${isVisible ? 'animate-scale-in animate-delay-200' : 'opacity-0'}`}>
        {/* Табы для ПК */}
        <div role="tablist" className="hidden sm:flex justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
          <button
            role="tab"
            className={`px-6 sm:px-8 py-3 rounded-xl font-['Montserrat'] font-semibold text-base sm:text-lg lg:text-xl uppercase tracking-wide transition-all duration-300 bg-[#D4E4DC]/50 backdrop-blur-md ${activeTab === "numbers" ? 'bg-primary-gradient text-white neon-glow' : 'text-primary-gradient hover:bg-[#D4E4DC]/80'}`}
            onClick={() => setActiveTab("numbers")}
            aria-label="Показать значение чисел"
            aria-selected={activeTab === "numbers"}
            aria-controls="numbers-panel"
          >
            Что означают твои числа
          </button>
          <button
            role="tab"
            className={`px-6 sm:px-8 py-3 rounded-xl font-['Montserrat'] font-semibold text-base sm:text-lg lg:text-xl uppercase tracking-wide transition-all duration-300 bg-[#D4E4DC]/50 backdrop-blur-md ${activeTab === "lines" ? 'bg-primary-gradient text-white neon-glow' : 'text-primary-gradient hover:bg-[#D4E4DC]/80'}`}
            onClick={() => setActiveTab("lines")}
            aria-label="Показать значение линий матрицы"
            aria-selected={activeTab === "lines"}
            aria-controls="lines-panel"
          >
            Значение линий матрицы
          </button>
        </div>
        {/* Аккордеон для мобильных */}
        <div className="sm:hidden space-y-4">
          <button
            className="w-full flex justify-between items-center px-4 py-3 bg-[#D4E4DC]/50 backdrop-blur-md rounded-xl font-['Montserrat'] font-semibold text-sm sm:text-base uppercase tracking-wide text-primary-gradient hover:bg-[#D4E4DC]/80 transition-all duration-300"
            onClick={() => setIsNumbersOpen(!isNumbersOpen)}
            aria-expanded={isNumbersOpen}
            aria-controls="numbers-panel-mobile"
          >
            Что означают твои числа
            {isNumbersOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          {isNumbersOpen && (
            <div id="numbers-panel-mobile" className="p-4 bg-[#D4E4DC]/50 rounded-xl neon-glow">
              <NumbersExplanation matrixResult={matrixResult} />
            </div>
          )}
          <button
            className="w-full flex justify-between items-center px-4 py-3 bg-[#D4E4DC]/50 backdrop-blur-md rounded-xl font-['Montserrat'] font-semibold text-sm sm:text-base uppercase tracking-wide text-primary-gradient hover:bg-[#D4E4DC]/80 transition-all duration-300"
            onClick={() => setIsLinesOpen(!isLinesOpen)}
            aria-expanded={isLinesOpen}
            aria-controls="lines-panel-mobile"
          >
            Значение линий матрицы
            {isLinesOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          {isLinesOpen && (
            <div id="lines-panel-mobile" className="p-4 bg-[#D4E4DC]/50 rounded-xl neon-glow">
              <MatrixLinesExplanation />
            </div>
          )}
        </div>
        {/* Контент табов для ПК */}
        <div className="hidden sm:block relative">
          <div
            id="numbers-panel"
            role="tabpanel"
            className={`transition-all duration-300 ${activeTab === "numbers" ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4 hidden'}`}
          >
            <NumbersExplanation matrixResult={matrixResult} />
          </div>
          <div
            id="lines-panel"
            role="tabpanel"
            className={`transition-all duration-300 ${activeTab === "lines" ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4 hidden'}`}
          >
            <MatrixLinesExplanation />
          </div>
        </div>
      </div>
      
      <div className={`mt-6 sm:mt-8 lg:mt-10 text-center ${isVisible ? 'animate-scale-in animate-delay-300' : 'opacity-0'}`}>
        <p className="text-gray-700 text-base sm:text-lg lg:text-xl">
          Это базовые числа твоей матрицы. Для полной расшифровки запишись на консультацию.
        </p>
      </div>
    </div>
  );
};