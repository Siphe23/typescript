"use strict";
class Calculator {
    validateInputs(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Inputs must be numbers');
        }
    }
    add(a, b) {
        this.validateInputs(a, b);
        return a + b;
    }
    subtract(a, b) {
        this.validateInputs(a, b);
        return a - b;
    }
    multiply(a, b) {
        this.validateInputs(a, b);
        return a * b;
    }
    divide(a, b) {
        this.validateInputs(a, b);
        if (b === 0) {
            return 'Cannot divide by zero';
        }
        return a / b;
    }
}
const calculator = new Calculator();
try {
    console.log(calculator.add(10, 5));
    console.log(calculator.subtract(10, 5));
    console.log(calculator.multiply(10, 5));
    console.log(calculator.divide(10, 5));
    console.log(calculator.divide(10, 0));
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error('An unexpected error occurred');
    }
}
//# sourceMappingURL=exercise2.js.map