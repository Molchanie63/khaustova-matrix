
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";

interface BirthdateFormProps {
  birthdate: string;
  setBirthdate: (value: string) => void;
  handleCalculate: (e: React.FormEvent) => void;
}

export const BirthdateForm = ({ birthdate, setBirthdate, handleCalculate }: BirthdateFormProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLFormElement>();

  return (
    <form ref={ref} onSubmit={handleCalculate} className={`mb-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#A8D5BA] to-[#7FB5A4] flex items-center justify-center shadow-lg animate-float">
            <Sparkles className="text-white w-14 h-14" />
          </div>
        </div>
        
        <div className="flex-grow flex flex-col sm:flex-row gap-4 w-full md:w-2/3">
          <div className="flex-grow max-w-xs">
            <label htmlFor="birthdate" className="block text-sm font-medium text-[#4A6D5C] mb-2 text-left uppercase tracking-wide">
              Введите дату рождения
            </label>
            <Input
              id="birthdate"
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="h-12 border-[#D3D3D3] focus:border-[#A8D5BA] rounded-xl bg-gradient-to-r from-gray-50 to-[#F0F7F3] text-[#4A6D5C]"
              required
            />
          </div>
          <div className="flex items-end">
            <Button 
              type="submit" 
              className="h-12 bg-gradient-to-r from-[#A8D5BA] to-[#7FB5A4] hover:from-[#97C6AA] hover:to-[#6EA693] rounded-xl uppercase text-[#4A6D5C] hover:text-white transition-colors shadow-md"
            >
              Рассчитать
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
