const MathOperations = require('./MathOperations');

// Create a MathOperations instance
const mathOps = new MathOperations();

// Operations
console.log('Sum:', mathOps.add(5, 3)); // 8
console.log('Subtract:', mathOps.subtract(10, 4)); // 6
console.log('Multiply:', mathOps.multiply(7, 6)); // 42
console.log('Divide:', mathOps.divide(20, 5)); // 4
console.log('Power:', mathOps.power(2, 3)); // 8
console.log('Square Root:', mathOps.sqrt(16)); // 4

// Display operations history
console.log('Operation History:', mathOps.getHistory());
