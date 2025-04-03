
import React from "react";

export const MatrixLinesExplanation = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-6 rounded-lg shadow-sm border border-violet-100">
      <h4 className="font-semibold mb-3 text-indigo-800">Значение линий матрицы:</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <div className="space-y-2">
          <div className="flex items-start">
            <div className="w-3 h-3 bg-indigo-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
            <div>
              <span className="font-medium text-violet-800">Строка цели (1-4-7):</span>
              <p className="text-indigo-700">Показывает, как ты ставишь и достигаешь цели</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-3 h-3 bg-indigo-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
            <div>
              <span className="font-medium text-violet-800">Строка семьи (2-5-8):</span>
              <p className="text-indigo-700">Отражает отношения с близкими и способности к созданию семьи</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-3 h-3 bg-indigo-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
            <div>
              <span className="font-medium text-violet-800">Строка привычек (3-6-9):</span>
              <p className="text-indigo-700">Показывает отношение к быту и материальным ценностям</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-3 h-3 bg-indigo-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
            <div>
              <span className="font-medium text-violet-800">Столбец самооценки (1-2-3):</span>
              <p className="text-indigo-700">Отражает твое самовосприятие и самооценку</p>
            </div>
          </div>
        </div>
          
        <div className="space-y-2">
          <div className="flex items-start">
            <div className="w-3 h-3 bg-indigo-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
            <div>
              <span className="font-medium text-violet-800">Столбец быта (4-5-6):</span>
              <p className="text-indigo-700">Показывает, как ты организуешь повседневную жизнь</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-3 h-3 bg-indigo-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
            <div>
              <span className="font-medium text-violet-800">Столбец потенциала (7-8-9):</span>
              <p className="text-indigo-700">Отражает твои скрытые возможности и таланты</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-3 h-3 bg-indigo-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
            <div>
              <span className="font-medium text-violet-800">Диагональ темперамента (3-5-7):</span>
              <p className="text-indigo-700">Показывает особенности характера и темперамента</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-3 h-3 bg-indigo-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
            <div>
              <span className="font-medium text-violet-800">Диагональ духовности (1-5-9):</span>
              <p className="text-indigo-700">Отражает духовное развитие и глубину личности</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
