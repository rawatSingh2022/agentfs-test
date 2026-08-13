/**
 * Generate a friendly greeting message for the given name.
 * @param {string} name - The name of the person to greet.
 * @returns {string} A greeting string.
 */
function generateGreeting(name) {
  if (typeof name !== 'string' || name.trim().length === 0) {
    throw new Error('A non-empty string name is required to generate a greeting.');
  }
  return `Hello, ${name.trim()}! Welcome to CodeBolt AI.`;
}

/**
 * Calculate the sum of an arbitrary number of numeric arguments.
 * @param {...number} numbers - The numbers to add together.
 * @returns {number} The total sum of all provided numbers.
 */
function sumNumbers(...numbers) {
  return numbers.reduce((runningTotal, currentNumber) => runningTotal + currentNumber, 0);
}

/**
 * Calculate the factorial of a non-negative integer.
 * @param {number} number - The non-negative integer to compute the factorial for.
 * @returns {number} The factorial of the given number.
 */
function calculateFactorial(number) {
  if (!Number.isInteger(number) || number < 0) {
    throw new Error('A non-negative integer is required to calculate the factorial.');
  }
  let factorialResult = 1;
  for (let multiplier = 2; multiplier <= number; multiplier += 1) {
    factorialResult *= multiplier;
  }
  return factorialResult;
}

module.exports = { generateGreeting, sumNumbers, calculateFactorial };
