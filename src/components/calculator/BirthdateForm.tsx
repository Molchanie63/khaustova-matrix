import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BirthdateFormProps {
  birthdate: string;
  setBirthdate: (value: string) => void;
  handleCalculate: (e: React.FormEvent) => void;
}

const BirthdateForm = ({ birthdate, setBirthdate, handleCalculate }: BirthdateFormProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLFormElement>();

  // Цветок Жизни с увеличенным размером
  const FlowerOfLifeIcon = () => (
    <svg
      className="w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 text-[#5D9B89]"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      style={{
        filter: "drop-shadow(0 4px 12px rgba(93, 155, 137, 0.3))",
        transform: "perspective(1000px) translateZ(0)",
      }}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="20" />
      <circle cx="50" cy="30" r="20" />
      <circle cx="50" cy="70" r="20" />
      <circle cx="30" cy="40" r="20" />
      <circle cx="70" cy="40" r="20" />
      <circle cx="30" cy="60" r="20" />
      <circle cx="70" cy="60" r="20" />
    </svg>
  );

  return (
    <form
      ref={ref}
      onSubmit={handleCalculate}
      className={`mb-6 sm:mb-8 lg:mb-10 p-4 sm:p-6 lg:p-8 rounded-2xl backdrop-blur-lg bg-white/5 dark:bg-gray-900/5 border border-gray-200/10 dark:border-gray-700/10 shadow-neo transition-all duration-300 hover:shadow-neo-hover ${
        isVisible ? "animate-scale-in" : "opacity-0"
      } grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto`}
      aria-label="Калькулятор нумерологической матрицы"
      aria-describedby="form-description"
    >
      <p id="form-description" className="sr-only">
        Введите дату рождения, чтобы рассчитать вашу нумерологическую матрицу.
      </p>
      <div className="flex justify-center items-center">
        <FlowerOfLifeIcon />
      </div>

      <div className="flex flex-col gap-4">
        <label
          htmlFor="birthdate"
          className="block text-base sm:text-lg lg:text-xl font-['Montserrat'] font-extrabold text-[#4A6D5C] dark:text-[#8CCFB5] uppercase tracking-wider animate-text-fade-in"
        >
          Дата рождения
        </label>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="relative max-w-xs">
            <Input
              placeholder="Например, 01.01.1990"
              id="birthdate"
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="h-10 sm:h-11 lg:h-12 w-full border-gray-200/20 dark:border-gray-700/20 focus:border-[#5D9B89] focus:ring-2 focus:ring-[#5D9B89]/20 rounded-xl bg-white/5 dark:bg-gray-900/5 text-[#4A6D5C] dark:text-[#8CCFB5] text-fluid-base transition-all duration-300 shadow-neo"
              required
              aria-label="Введите дату рождения"
            />
            <div className="h-0.5 bg-gray-200/20 dark:bg-gray-700/20 rounded-full mt-2">
              <div
                className={`h-full bg-primary-gradient rounded-full transition-all duration-300 ${
                  birthdate ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          </div>
          <Button
            type="submit"
            className="h-10 sm:h-11 lg:h-12 bg-primary-gradient hover:bg-[#8CCFB5] rounded-xl text-white uppercase btn-neo btn-rounded btn-3d neon-glow text-fluid-lg active:scale-95 transition-all duration-300"
            aria-label="Рассчитать матрицу"
          >
            Рассчитать
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BirthdateForm;
export { BirthdateForm };