
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { MatrixResult } from "@/utils/matrixCalculations";
import { MatrixGrid } from "./MatrixGrid";
import { NumbersExplanation } from "./NumbersExplanation";
import { MatrixLinesExplanation } from "./MatrixLinesExplanation";
import { ArrowRight } from "lucide-react";

interface MatrixResultsProps {
  matrixResult: MatrixResult;
}

export const MatrixResults = ({ matrixResult }: MatrixResultsProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLHeadingElement>(0.2);

  return (
    <div 
      ref={ref}
      className={`bg-gradient-to-br from-white to-[#F0F7F3] p-8 rounded-xl shadow-md mb-10 border border-[#B8D6C4] ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <h3 
        ref={headerRef}
        className={`text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#2D5542] to-[#5D9B89] uppercase tracking-wide ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        Твоя матрица
      </h3>
      
      <div className={`flex justify-center mb-6 ${isVisible ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
        <div className="text-center bg-gradient-to-r from-[#F0F7F3] to-[#E5F0E9] py-2 px-6 rounded-full shadow-sm">
          <p className="font-medium text-[#2D5542]">Дата рождения</p>
          <p className="font-bold text-lg text-[#2D5542]">{matrixResult.day}.{matrixResult.month}.{matrixResult.year}</p>
        </div>
      </div>
      
      <div className={`mb-8 ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
        <MatrixGrid matrixResult={matrixResult} />
      </div>
      
      <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
        <NumbersExplanation matrixResult={matrixResult} />
        <MatrixLinesExplanation />
      </div>
      
      <div className={`mt-8 text-center ${isVisible ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
        <p className="text-[#3A6E5A] mb-4 italic">
          Это лишь базовые числа твоей матрицы. Для полной расшифровки и понимания как использовать эту информацию, запишись на консультацию.
        </p>
        
        <Button className="bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] hover:from-[#4A8674] hover:to-[#2D5542] rounded-xl shadow-md uppercase text-white transition-colors">
          <a
            href="https://t.me/NeikaSparkBot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            Узнать больше на консультации
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};
