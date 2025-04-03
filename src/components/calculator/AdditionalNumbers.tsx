
import React from "react";
import { MatrixResult } from "@/utils/matrixCalculations";

interface AdditionalNumbersProps {
  matrixResult: MatrixResult;
}

export const AdditionalNumbers = ({ matrixResult }: AdditionalNumbersProps) => {
  return (
    <div className="text-center">
      <p className="font-medium text-gray-700">Дополнительные числа</p>
      <div className="flex justify-center mt-2 space-x-4">
        <div className="bg-purple-50 px-3 py-2 rounded">
          <p className="text-xs text-gray-500">I</p>
          <p className="font-bold text-purple-700">{matrixResult.firstNumber}</p>
        </div>
        <div className="bg-purple-50 px-3 py-2 rounded">
          <p className="text-xs text-gray-500">II</p>
          <p className="font-bold text-purple-700">{matrixResult.secondNumber}</p>
        </div>
        <div className="bg-purple-50 px-3 py-2 rounded">
          <p className="text-xs text-gray-500">III</p>
          <p className="font-bold text-purple-700">{matrixResult.thirdNumber}</p>
        </div>
        <div className="bg-purple-50 px-3 py-2 rounded">
          <p className="text-xs text-gray-500">IV</p>
          <p className="font-bold text-purple-700">{matrixResult.fourthNumber}</p>
        </div>
      </div>
    </div>
  );
};
