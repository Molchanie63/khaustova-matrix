
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { calculateMatrix, MatrixResult } from "@/utils/matrixCalculations";
import { BirthdateForm } from "./calculator/BirthdateForm";
import { MatrixResults } from "./calculator/MatrixResults";

export const CalculatorSection = () => {
  const [birthdate, setBirthdate] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [matrixResult, setMatrixResult] = useState<MatrixResult | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (birthdate) {
      const result = calculateMatrix(birthdate);
      setMatrixResult(result);
      setShowResult(true);
    }
  };

  return (
    <section id="calculator" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-1 bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4A6D5C] to-[#7FB5A4] uppercase tracking-wide">
              ПОПРОБУЙ САМ — НАЧНИ С ЦИФР
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Хочешь увидеть свою матрицу? Введи дату рождения в калькулятор ниже — и получи свои числа прямо сейчас. Это бесплатно и занимает минуту. Всё остальное — как они работают и что значат — я расскажу на консультации.
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-8 rounded-2xl shadow-xl border border-gray-200 overflow-x-hidden">
            <BirthdateForm 
              birthdate={birthdate}
              setBirthdate={setBirthdate}
              handleCalculate={handleCalculate}
            />
            
            {showResult && matrixResult && (
              <div className="overflow-x-auto pb-4">
                <MatrixResults matrixResult={matrixResult} />
              </div>
            )}
            
            <div className="text-center mt-6">
              <Button className="bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] hover:from-[#4A6D5C] hover:to-[#2D5542] rounded-xl shadow-md uppercase text-white transition-colors">
                <a
                  href="https://t.me/NeikaSparkBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Рассчитать полную матрицу
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <p className="mt-4 text-gray-600">
                Пиши сюда: <a href="https://t.me/NeikaSparkBot" target="_blank" rel="noopener noreferrer" className="text-[#5D9B89] hover:underline font-medium">@NeikaSparkBot</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
