// Define the numbers and the operation here
let firstNumber = 10;
let secondNumber = 5;

let operation = "/";

// Write if-statements here

let result;

if (operation === "+") result = firstNumber + secondNumber;
if (operation === "-") result = firstNumber - secondNumber;
if (operation === "*") result = firstNumber * secondNumber;
if (operation === "/") result = firstNumber / secondNumber;

if (result === undefined) console.log(`undefined operation!`);
else console.log(`${firstNumber}${operation}${secondNumber} = ${result}`);
