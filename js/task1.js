/*
Write a function that accepts 2 numbers 
and returns -1 if the first one is smaller than the second, 
1 if it is vice versa, 
and 0 if they are equal.
*/

const firstValue = Number(prompt("please enter the first number:"));
const secondValue = Number(prompt("please enter the second number:"));

function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

console.log(compare(firstValue, secondValue));
