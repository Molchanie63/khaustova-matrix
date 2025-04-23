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
    <section
      id="calculator"
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-full relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-0.5 bg-primary-gradient rounded-full"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Montserrat'] font-extrabold text-primary-gradient uppercase tracking-tight animate-recipe-text-fade-in">
              Рассчитай свою матрицу
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mt-4 sm:mt-6 leading-relaxed animate-text-fade-in animate-delay-100">
              Узнай свои числа за минуту — просто введи дату рождения. Бесплатно!
            </p>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <BirthdateForm
              key="birthdate-form"
              birthdate={birthdate}
              setBirthdate={setBirthdate}
              handleCalculate={handleCalculate}
            />

            {showResult && matrixResult && (
              <div className="pb-4 sm:pb-6 lg:pb-8">
                <MatrixResults matrixResult={matrixResult} />
              </div>
            )}

            <div className="text-center mt-6 sm:mt-8 lg:mt-10">
              <Button
                asChild
                className="bg-primary-gradient hover:bg-[#8CCFB5] rounded-xl text-white uppercase btn-neo btn-rounded btn-3d neon-glow text-fluid-base active:scale-95 transition-all duration-300"
                aria-label="Записаться на консультацию через Telegram"
              >
                <a
                  href="https://t.me/NeikaSparkBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Записаться на консультацию
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};