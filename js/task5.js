/*
Write a function that checks if the given number is perfect. 
A perfect number is a number equal to the sum of all its divisors. 
For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.
*/

const userNum = Number(
  prompt("please provide the number to check if it is perfect:")
);

function perfectNumber(num) {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  if (sum === num) {
    return console.log(`${userNum} is a perfect number`);
  } else {
    return console.error(`${userNum} is not a perfect number`);
  }
}

perfectNumber(userNum);
