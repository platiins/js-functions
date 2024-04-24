/*
Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. 
For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.
*/

const hoursValue = prompt("enter hours:");
const minutesValue = prompt("enter minutes:");
const secondsValue = prompt("enter seconds:");

function seconds(h, min, sek) {
  let sum;
  sum = Number(h) * 3600 + Number(min) * 60 + Number(sek) * 1;

  return sum;
}

console.log(seconds(hoursValue, minutesValue, secondsValue));
