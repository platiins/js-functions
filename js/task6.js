/*
Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range. 
Use the previous function to check, if numbers are perfect. 
*/

const userNumFirst = Number(prompt("enter the min value:"));

const userNumSecond = Number(prompt("enter the max value:"));

function findPerfectNumbersInRange(min, max) {
  let perfectNumbers = [];

  for (let num = min; num <= max; num++) {
    if (perfectNumber(num)) {
      console.log(num);
    }
  }

  return perfectNumbers;
}

function perfectNumber(n) {
  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }

    return sum === n;
  }
}

console.log(findPerfectNumbersInRange(userNumFirst, userNumSecond));

