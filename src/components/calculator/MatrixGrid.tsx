import React from "react";
import { useParallax } from "@/hooks/useParallax";
import { getLineDescription, MatrixResult, getCellDescription } from "@/utils/matrixCalculations";

interface MatrixGridProps {
  matrixResult: MatrixResult;
}

export const MatrixGrid = ({ matrixResult }: MatrixGridProps) => {
  useParallax();

  const countDigits = (str: string): number => {
    return str === "-" ? 0 : str.length;
  };

  const countRow = (row: number[]): number => {
    return row.reduce((count, num) => count + countDigits(matrixResult.matrixGrid[num.toString()]), 0);
  };

  const goalRowCount = countRow([1, 4, 7]);
  const familyRowCount = countRow([2, 5, 8]);
  const habitsRowCount = countRow([3, 6, 9]);
  const selfColumnCount = countRow([1, 2, 3]);
  const householdColumnCount = countRow([4, 5, 6]);
  const potentialColumnCount = countRow([7, 8, 9]);
  const spiritualDiagonalCount = countRow([1, 5, 9]);
  const physicalDiagonalCount = countRow([3, 5, 7]);

  const cards = [
    {
      key: "birthdate_additional",
      value: (
        <div className="flex flex-col gap-1">
          <div className="text-[#4A6D5C] text-fluid-matrix font-bold">{`${matrixResult.day}.${matrixResult.month}.${matrixResult.year}`}</div>
          <div className="text-[#4A6D5C] text-fluid-matrix font-bold">{`${matrixResult.firstNumber} ${matrixResult.secondNumber} ${matrixResult.thirdNumber} ${matrixResult.fourthNumber}`}</div>
        </div>
      ),
      label: "Дата рождения и дополнительные числа",
      colSpan: 3,
    },
    { key: "physical", value: physicalDiagonalCount, label: "Плотская диагональ" },
    { key: "1", value: matrixResult.matrixGrid["1"], label: getCellDescription("1") },
    { key: "4", value: matrixResult.matrixGrid["4"], label: getCellDescription("4") },
    { key: "7", value: matrixResult.matrixGrid["7"], label: getCellDescription("7") },
    { key: "goal", value: goalRowCount, label: "Цель" },
    { key: "2", value: matrixResult.matrixGrid["2"], label: getCellDescription("2") },
    { key: "5", value: matrixResult.matrixGrid["5"], label: getCellDescription("5") },
    { key: "8", value: matrixResult.matrixGrid["8"], label: getCellDescription("8") },
    { key: "family", value: familyRowCount, label: "Семья" },
    { key: "3", value: matrixResult.matrixGrid["3"], label: getCellDescription("3") },
    { key: "6", value: matrixResult.matrixGrid["6"], label: getCellDescription("6") },
    { key: "9", value: matrixResult.matrixGrid["9"], label: getCellDescription("9") },
    { key: "habits", value: habitsRowCount, label: "Привычки" },
    { key: "self", value: selfColumnCount, label: "Самооценка" },
    { key: "household", value: householdColumnCount, label: "Быт" },
    { key: "potential", value: potentialColumnCount, label: "Потенциал" },
    { key: "spiritual", value: spiritualDiagonalCount, label: "Духовная диагональ" },
  ];

  return (
    <div className="overflow-x-auto mt-4 sm:mt-6 lg:mt-8 mb-8 sm:mb-10 lg:mb-12">
      <div
        className="relative inline-block min-w-[320px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px] bg-transparent p-4 sm:p-6 lg:p-8"
        role="grid"
        aria-label="Нумерологическая матрица"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {cards.map((card, index) => (
            <div
              key={card.key}
              className={`relative bg-${
                card.label.includes("диагональ") ||
                card.label === "Цель" ||
                card.label === "Семья" ||
                card.label === "Привычки" ||
                card.label === "Самооценка" ||
                card.label === "Быт" ||
                card.label === "Потенциал" ||
                card.label.includes("Дата рождения")
                  ? '[#5D9B89]/70 backdrop-blur-sm'
                  : '[#E8F2EB]/20'
              } border border-[#5D9B89]/20 p-2 sm:p-3 lg:p-4 text-center rounded-xl animate-parallax hover:bg-${
                card.label.includes("диагональ") ||
                card.label === "Цель" ||
                card.label === "Семья" ||
                card.label === "Привычки" ||
                card.label === "Самооценка" ||
                card.label === "Быт" ||
                card.label === "Потенциал" ||
                card.label.includes("Дата рождения")
                  ? '[#5D9B89]/85'
                  : '[#E8F2EB]/30'
              } hover:scale-105 transition-all duration-200 neon-glow ${
                card.colSpan ? 'col-span-2 sm:col-span-3' : ''
              } overflow-hidden text-ellipsis`}
              style={{ animationDelay: `${index * 50}ms` }}
              role="gridcell"
              aria-label={`${card.label}: ${card.value}`}
            >
              {card.label.includes("Дата рождения") ? (
                <>
                  <div className="text-sm sm:text-base lg:text-lg text-[#2D5542] font-bold uppercase tracking-wide mb-1">
                    {card.label}
                  </div>
                  {card.value}
                </>
              ) : (
                <>
                  <div className="text-fluid-matrix font-bold text-[#4A6D5C]">{card.value}</div>
                  <div className="text-fluid-label text-[#2D5542] font-bold uppercase tracking-wide mt-1">
                    {card.label}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};