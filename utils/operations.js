export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.slice(1).reduce((sum, num) => sum - num, numbers[0]);
}

export function multiply(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((res, num) => res * num, 1);
}

export function divide(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.slice(1).reduce((res, num) => {
    if (num === 0) {
      console.log("Error: Division by zero!");
      process.exit(1);
    }
    return res / num;
  }, numbers[0]);
}
