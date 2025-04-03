
import React from "react";
import { getLineDescription, MatrixResult, getCellDescription } from "@/utils/matrixCalculations";
import { Sparkles, Diamond, Lightbulb, Heart } from "lucide-react";

interface MatrixGridProps {
  matrixResult: MatrixResult;
}

export const MatrixGrid = ({ matrixResult }: MatrixGridProps) => {
  // Функция подсчета количества цифр в строке символов
  const countDigits = (str: string): number => {
    return str === "-" ? 0 : str.length;
  };

  // Подсчет строк, столбцов и диагоналей
  const countRow = (row: number[]): number => {
    let count = 0;
    for (const num of row) {
      count += countDigits(matrixResult.matrixGrid[num.toString()]);
    }
    return count;
  };

  // Подсчеты для строк, столбцов и диагоналей
  const goalRowCount = countRow([1, 4, 7]); // Цель
  const familyRowCount = countRow([2, 5, 8]); // Семья
  const habitsRowCount = countRow([3, 6, 9]); // Привычки

  const selfColumnCount = countRow([1, 2, 3]); // Самооценка
  const householdColumnCount = countRow([4, 5, 6]); // Быт
  const potentialColumnCount = countRow([7, 8, 9]); // Потенциал

  const temperamentDiagonalCount = countRow([3, 5, 7]); // Темперамент
  const spiritualDiagonalCount = countRow([1, 5, 9]); // Духовная Д
  const physicalDiagonalCount = countRow([3, 5, 7]); // Плотская Д (считаем по диагонали 3-5-7)

  return (
    <div className="mt-8 mb-12">
      {/* Top row: Additional Numbers */}
      <div className="flex mb-6 gap-4">
        <div className="flex-grow bg-gradient-to-br from-[#F0F7F3] to-[#E5F0E9] rounded-xl p-4 shadow-sm border border-[#D3D3D3]">
          <div className="grid grid-cols-4 gap-2">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4A6D5C]">{matrixResult.firstNumber}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4A6D5C]">{matrixResult.secondNumber}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4A6D5C]">{matrixResult.thirdNumber}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4A6D5C]">{matrixResult.fourthNumber}</div>
            </div>
          </div>
          <div className="text-center mt-2 text-[#5D9B89] font-medium uppercase tracking-wide">Дополнительные числа</div>
        </div>
        
        <div className="bg-gradient-to-br from-[#A8D5BA] to-[#7FB5A4] rounded-xl p-4 flex flex-col items-center justify-center w-36 shadow-sm border border-[#D3D3D3]">
          <div className="text-2xl font-bold text-white">{physicalDiagonalCount}</div>
          <div className="text-sm text-white font-medium uppercase tracking-wide">Плотская Д</div>
        </div>
      </div>

      {/* Matrix grid with modern design */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {/* First row */}
        <div className="bg-gradient-to-br from-[#F0F7F3] to-[#E5F0E9] rounded-xl p-4 flex flex-col items-center justify-center min-h-20 shadow-sm border border-[#D3D3D3] aspect-square">
          <div className="text-2xl font-bold text-[#4A6D5C]">{matrixResult.matrixGrid["1"]}</div>
          <div className="text-sm text-[#5D9B89] font-medium uppercase tracking-wide">{getCellDescription("1")}</div>
        </div>
        <div className="bg-gradient-to-br from-[#F0F7F3] to-[#E5F0E9] rounded-xl p-4 flex flex-col items-center justify-center min-h-20 shadow-sm border border-[#D3D3D3] aspect-square">
          <div className="text-2xl font-bold text-[#4A6D5C]">{matrixResult.matrixGrid["4"]}</div>
          <div className="text-sm text-[#5D9B89] font-medium uppercase tracking-wide">{getCellDescription("4")}</div>
        </div>
        <div className="bg-gradient-to-br from-[#F0F7F3] to-[#E5F0E9] rounded-xl p-4 flex flex-col items-center justify-center min-h-20 shadow-sm border border-[#D3D3D3] aspect-square">
          <div className="text-2xl font-bold text-[#4A6D5C]">{matrixResult.matrixGrid["7"]}</div>
          <div className="text-sm text-[#5D9B89] font-medium uppercase tracking-wide">{getCellDescription("7")}</div>
        </div>
        <div className="bg-gradient-to-br from-[#A8D5BA] to-[#7FB5A4] rounded-xl p-4 flex flex-col items-center justify-center min-h-20 shadow-sm border border-[#D3D3D3] aspect-square">
          <div className="text-2xl font-bold text-white">{goalRowCount}</div>
          <div className="text-sm text-white font-medium uppercase tracking-wide">Цель</div>
        </div>

        {/* Second row */}
        <div className="bg-gradient-to-br from-[#F0F7F3] to-[#E5F0E9] rounded-xl p-4 flex flex-col items-center justify-center min-h-20 shadow-sm border border-[#D3D3D3] aspect-square">
          <div className="text-2xl font-bold text-[#4A6D5C]">{matrixResult.matrixGrid["2"]}</div>
          <div className="text-sm text-[#5D9B89] font-medium uppercase tracking-wide">{getCellDescription("2")}</div>
        </div>
        <div className="bg-gradient-to-br from-[#F0F7F3] to-[#E5F0E9] rounded-xl p-4 flex flex-col items-center justify-center min-h-20 shadow-sm border border-[#D3D3D3] aspect-square">
          <div className="text-2xl font-bold text-[#4A6D5C]">{matrixResult.matrixGrid["5"]}</div>
          <div className="text-sm text-[#5D9B89] font-medium uppercase tracking-wide">{getCellDescription("5")}</div>
        </div>
        <div className="bg-gradient-to-br from-[#F0F7F3] to-[#E5F0E9] rounded-xl p-4 flex flex-col items-center justify-center min-h-20 shadow-sm border border-[#D3D3D3] aspect-square">
          <div className="text-2xl font-bold text-[#4A6D5C]">{matrixResult.matrixGrid["8"]}</div>
          <div className="text-sm text-[#5D9B89] font-medium uppercase tracking-wide">{getCellDescription("8")}</div>
        </div>
        <div className="bg-gradient-to-br from-[#A8D5BA] to-[#7FB5A4] rounded-xl p-4 flex flex-col items-center justify-center min-h-20 shadow-sm border border-[#D3D3D3] aspect-square">
          <div className="text-2xl font-bold text-white">{familyRowCount}</div>
          <div className="text-sm text-white font-medium uppercase tracking-wide">Семья</div>
        </div>

        {/* Third row */}
        <div className="bg-gradient-to-br from-[#F0F7F3] to-[#E5F0E9] rounded-xl p-4 flex flex-col items-center justify-center min-h-20 shadow-sm border border-[#D3D3D3] aspect-square">
          <div className="text-2xl font-bold text-[#4A6D5C]">{matrixResult.matrixGrid["3"]}</div>
          <div className="text-sm text-[#5D9B89] font-medium uppercase tracking-wide">{getCellDescription("3")}</div>
        </div>
        <div className="bg-gradient-to-br from-[#F0F7F3] to-[#E5F0E9] rounded-xl p-4 flex flex-col items-center justify-center min-h-20 shadow-sm border border-[#D3D3D3] aspect-square">
          <div className="text-2xl font-bold text-[#4A6D5C]">{matrixResult.matrixGrid["6"]}</div>
          <div className="text-sm text-[#5D9B89] font-medium uppercase tracking-wide">{getCellDescription("6")}</div>
        </div>
        <div className="bg-gradient-to-br from-[#F0F7F3] to-[#E5F0E9] rounded-xl p-4 flex flex-col items-center justify-center min-h-20 shadow-sm border border-[#D3D3D3] aspect-square">
          <div className="text-2xl font-bold text-[#4A6D5C]">{matrixResult.matrixGrid["9"]}</div>
          <div className="text-sm text-[#5D9B89] font-medium uppercase tracking-wide">{getCellDescription("9")}</div>
        </div>
        <div className="bg-gradient-to-br from-[#A8D5BA] to-[#7FB5A4] rounded-xl p-4 flex flex-col items-center justify-center min-h-20 shadow-sm border border-[#D3D3D3] aspect-square">
          <div className="text-2xl font-bold text-white">{habitsRowCount}</div>
          <div className="text-sm text-white font-medium uppercase tracking-wide">Привычки</div>
        </div>
      </div>

      {/* Bottom row: Line counts */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-[#A8D5BA] to-[#7FB5A4] rounded-xl p-4 flex flex-col items-center justify-center min-h-20 shadow-sm border border-[#D3D3D3] aspect-square">
          <div className="text-2xl font-bold text-white">{selfColumnCount}</div>
          <div className="text-sm text-white font-medium uppercase tracking-wide">Самооценка</div>
        </div>
        <div className="bg-gradient-to-br from-[#A8D5BA] to-[#7FB5A4] rounded-xl p-4 flex flex-col items-center justify-center min-h-20 shadow-sm border border-[#D3D3D3] aspect-square">
          <div className="text-2xl font-bold text-white">{householdColumnCount}</div>
          <div className="text-sm text-white font-medium uppercase tracking-wide">Быт</div>
        </div>
        <div className="bg-gradient-to-br from-[#A8D5BA] to-[#7FB5A4] rounded-xl p-4 flex flex-col items-center justify-center min-h-20 shadow-sm border border-[#D3D3D3] aspect-square">
          <div className="text-2xl font-bold text-white">{potentialColumnCount}</div>
          <div className="text-sm text-white font-medium uppercase tracking-wide">Потенциал</div>
        </div>
        <div className="bg-gradient-to-br from-[#A8D5BA] to-[#7FB5A4] rounded-xl p-4 flex flex-col items-center justify-center min-h-20 shadow-sm border border-[#D3D3D3] aspect-square">
          <div className="text-2xl font-bold text-white">{spiritualDiagonalCount}</div>
          <div className="text-sm text-white font-medium uppercase tracking-wide">Духовная Д</div>
        </div>
      </div>
    </div>
  );
};
