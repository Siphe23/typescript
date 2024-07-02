
// Interface ICalculator:
interface ICalculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiply(a: number, b: number): number;
  divide(a: number, b: number): number | string;
}

// Calculator class implementing ICalculator:
class Calculator implements ICalculator {
  private validateInputs(a: number, b: number): void {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Inputs must be numbers');
    }
  }

  add(a: number, b: number): number {
    this.validateInputs(a, b);
    return a + b;
  }

  subtract(a: number, b: number): number {
    this.validateInputs(a, b);
    return a - b;
  }

  multiply(a: number, b: number): number {
    this.validateInputs(a, b);
    return a * b;
  }

  divide(a: number, b: number): number | string {
    this.validateInputs(a, b);
    if (b === 0) {
      return 'Cannot divide by zero';
    }
    return a / b;
  }
}

//Usage:
const calculator = new Calculator();

try {
  console.log(calculator.add(10, 5)); 
  console.log(calculator.subtract(10, 5)); 
  console.log(calculator.multiply(10, 5)); 
  console.log(calculator.divide(10, 5)); 
  console.log(calculator.divide(10, 0)); 
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error('An unexpected error occurred');
  }
}

