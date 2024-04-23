// write a function that counts the factorial of a given number

let userNum = Number(prompt("please provide the number to see its factorial:"));

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else if (num >= 2) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  } else {
    return "negative number has no factorial";
  }
}

console.log(factorial(userNum));
