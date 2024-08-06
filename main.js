// add
let add = (num1, num2) => num1 + num2;
// subtract
let subtract = (num1, num2) => num1 - num2;
// multiply
let multiply = (num1, num2) => num1 * num2;
// divide
let divide = (num1, num2) => num1 / num2;

let num1, operator, num2;

let operate = (operator, num1, num2) => {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  }
};

alert(operate("*", 9, 3));
