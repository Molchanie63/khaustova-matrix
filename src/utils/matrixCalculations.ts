
/**
 * Utility functions for numerical matrix calculations
 */

/**
 * Counts occurrences of a specific digit in an array of numbers
 */
export const countDigitOccurrences = (allDigits: number[], digit: number): number => {
  return allDigits.filter(num => num === digit).length;
};

/**
 * Creates a matrix grid based on date digits and additional numbers
 */
export const createMatrixGrid = (
  dateDigits: number[], 
  additionalNumbers: number[]
): { [key: string]: string } => {
  // Combine all digits
  const allDigits = [...dateDigits, ...additionalNumbers];
  
  // Create matrix grid and fill it
  const grid: { [key: string]: string } = {};
  
  // Fill grid for each position with numbers repeated the count of times
  for (let i = 1; i <= 9; i++) {
    const count = countDigitOccurrences(allDigits, i);
    grid[i.toString()] = count > 0 ? i.toString().repeat(count) : "-";
  }
  
  return grid;
};

/**
 * Calculate the matrix and all additional numbers based on a birthdate
 */
export interface MatrixResult {
  firstNumber: number;
  secondNumber: number;
  thirdNumber: number;
  fourthNumber: number;
  day: number;
  month: number;
  year: number;
  matrixGrid: {
    [key: string]: string;
  };
}

export const calculateMatrix = (dateString: string): MatrixResult => {
  // Convert date string to Date format
  const date = new Date(dateString);
  
  // Get day, month and year
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months in JavaScript start at 0
  const year = date.getFullYear();
  
  // Split numbers into separate digits
  const dayDigits = day.toString().split('').map(Number);
  const monthDigits = month.toString().split('').map(Number);
  const yearDigits = year.toString().split('').map(Number);
  
  // Combine all date digits into one array
  const dateDigits = [...dayDigits, ...monthDigits, ...yearDigits];
  
  // Calculate first number (sum of all digits in birthdate)
  const firstNumber = dateDigits.reduce((sum, digit) => sum + digit, 0);
  
  // Calculate second number (sum of digits in first number)
  const secondNumber = firstNumber < 10 ? 
    firstNumber : 
    firstNumber.toString().split('').map(Number).reduce((sum, digit) => sum + digit, 0);
  
  // Calculate third number (first number minus first digit of birthdate multiplied by 2)
  const thirdNumber = firstNumber - (dayDigits[0] * 2);
  
  // Calculate fourth number (sum of digits in third number)
  const fourthNumber = thirdNumber < 10 ? 
    thirdNumber : 
    thirdNumber.toString().split('').map(Number).reduce((sum, digit) => sum + digit, 0);
  
  // Extract all digits from additional numbers
  const additionalNumbersDigits: number[] = [];
  
  // Add digits from firstNumber
  additionalNumbersDigits.push(...firstNumber.toString().split('').map(Number));
  
  // Add digits from secondNumber
  additionalNumbersDigits.push(...secondNumber.toString().split('').map(Number));
  
  // Add digits from thirdNumber
  additionalNumbersDigits.push(...thirdNumber.toString().split('').map(Number));
  
  // Add digits from fourthNumber
  additionalNumbersDigits.push(...fourthNumber.toString().split('').map(Number));
  
  // Create matrix grid with both date digits and additional numbers
  const matrixGrid = createMatrixGrid(dateDigits, additionalNumbersDigits);
  
  return {
    firstNumber,
    secondNumber,
    thirdNumber,
    fourthNumber,
    day,
    month,
    year,
    matrixGrid
  };
};

/**
 * Get description for a specific matrix line
 */
export const getLineDescription = (line: string): string => {
  switch(line) {
    case "goal": return "Цель";
    case "family": return "Семья";
    case "habits": return "Привычки";
    case "self": return "Самооценка";
    case "household": return "Быт";
    case "potential": return "Потенциал";
    case "temperament": return "Темперамент";
    case "spiritual": return "Духовная Д";
    case "physical": return "Плотская Д";
    default: return "";
  }
};

/**
 * Get a more descriptive name for each cell
 */
export const getCellDescription = (position: string): string => {
  switch(position) {
    case "1": return "Характер";
    case "2": return "Энергия";
    case "3": return "Интерес";
    case "4": return "Здоровье";
    case "5": return "Логика";
    case "6": return "Труд";
    case "7": return "Удача";
    case "8": return "Долг";
    case "9": return "Память";
    default: return "";
  }
};
