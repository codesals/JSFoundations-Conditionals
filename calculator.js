// Define the numbers and the operation here
let firstNumber = 10;
let secondNumber = 5;

let operation = "/";

// Write if-statements here

if (operation === "+")
  console.log(
    `${firstNumber}${operation}${secondNumber} = ${firstNumber + secondNumber}`
  );
else if (operation === "-")
  console.log(
    `${firstNumber}${operation}${secondNumber} = ${firstNumber - secondNumber}`
  );
else if (operation === "*")
  console.log(
    `${firstNumber}${operation}${secondNumber} = ${firstNumber * secondNumber}`
  );
else if (operation === "/")
  console.log(
    `${firstNumber}${operation}${secondNumber} = ${firstNumber / secondNumber}`
  );
else console.log(`unrecognized operation!`);
