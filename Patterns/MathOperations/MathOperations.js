class MathOperations {
  constructor(){
    this.history = [];  //Save history of operations performed
  }

  // Addition
  add(a, b) {
    const result = a + b;
    this._saveToHistory('add', [a, b], result);
    return result;
  }

  // Subtract
  subtract(a, b) {
    const result = a - b;
    this._saveToHistory('subtract', [a, b], result);
    return result;
  }

  // Multiply
  multiply(a, b) {
    const result = a * b;
    this._saveToHistory('multiply', [a, b], result);
    return result;
  }

  // Division
  divide(a, b) {
    if (b === 0) {
      throw new Error('Divsion by zero is not allowed');
    }
    const result = a / b;
    this._saveToHistory('divide', [a, b], result);
    return result;
  }

  // Power
  power(base, exponent) {
    const result = Math.pow(base, exponent);
    this._saveToHistory('power', [base, exponent], result);
    return result;
  }

  // Sqrt
  sqrt(number) {
    if (number < 0) throw new Error('Cannot calculate the square root of a negative number');

    const result = Math.sqrt(number);
    this._saveToHistory('sqrt', [number], result);
    return result;
  }

  // Operations History
  getHistory(){
    return this.history;
  }

  //Private Method to save history
  _saveToHistory(operation, operands, result) {
    this.history.push({ operation, operands, result });
  }
}

// Class Export
module.exports = MathOperations;