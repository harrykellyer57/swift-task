/*filename: sophisticated_calculator.js*/

// This code implements a sophisticated calculator that supports various operations including addition, subtraction, multiplication, division, and exponentiation.
// The code also includes error handling, input validation, and advanced features like memory storage.

class Calculator {
  constructor() {
    this.memory = 0;
  }

  add(...values) {
    const result = values.reduce((acc, curr) => acc + curr);
    this.memory = result;
    return result;
  }

  subtract(...values) {
    const result = values.reduce((acc, curr) => acc - curr);
    this.memory = result;
    return result;
  }

  multiply(...values) {
    const result = values.reduce((acc, curr) => acc * curr);
    this.memory = result;
    return result;
  }

  divide(...values) {
    if (values.includes(0)) {
      throw new Error('Invalid input: Division by zero');
    }

    const result = values.reduce((acc, curr) => acc / curr);
    this.memory = result;
    return result;
  }

  power(base, exponent) {
    const result = Math.pow(base, exponent);
    this.memory = result;
    return result;
  }

  clearMemory() {
    this.memory = 0;
  }
}

// Example usage:

const calculator = new Calculator();

console.log(calculator.add(2, 4, 6));            // Output: 12, Memory: 12
console.log(calculator.subtract(8, 3));          // Output: 5, Memory: 5
console.log(calculator.multiply(2, 3, 4));       // Output: 24, Memory: 24
console.log(calculator.divide(10, 5));           // Output: 2, Memory: 2
console.log(calculator.power(2, 3));             // Output: 8, Memory: 8

calculator.clearMemory();
console.log(calculator.memory);                  // Output: 0