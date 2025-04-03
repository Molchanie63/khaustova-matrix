
import React from "react";
import { MatrixResult } from "@/utils/matrixCalculations";

interface NumbersExplanationProps {
  matrixResult: MatrixResult;
}

export const NumbersExplanation = ({ matrixResult }: NumbersExplanationProps) => {
  return (
    <div className="bg-gradient-to-br from-[#F0F7F3] to-[#E5F0E9] p-6 rounded-lg shadow-sm border border-[#D3D3D3]">
      <h4 className="font-semibold mb-3 text-[#4A6D5C] uppercase tracking-wide">ЧТО ОЗНАЧАЮТ ТВОИ ЧИСЛА:</h4>
      <ul className="text-sm space-y-3 text-left">
        <li className="flex items-start">
          <div className="bg-[#A8D5BA] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</div>
          <div>
            <span className="font-medium text-[#4A6D5C]">Первое число ({matrixResult.firstNumber}):</span>
            <p className="text-[#5D9B89]">Качества, которые нужно усилить для достижения цели</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-[#A8D5BA] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</div>
          <div>
            <span className="font-medium text-[#4A6D5C]">Второе число ({matrixResult.secondNumber}):</span>
            <p className="text-[#5D9B89]">Твоя основная цель жизни, предназначение</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-[#A8D5BA] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</div>
          <div>
            <span className="font-medium text-[#4A6D5C]">Третье число ({matrixResult.thirdNumber}):</span>
            <p className="text-[#5D9B89]">Врожденные качества, влияние родителей</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-[#A8D5BA] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</div>
          <div>
            <span className="font-medium text-[#4A6D5C]">Четвертое число ({matrixResult.fourthNumber}):</span>
            <p className="text-[#5D9B89]">Твой основной потенциал, самое важное качество</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
