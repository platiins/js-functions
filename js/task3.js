/* 
write a function that accepts three separate digits and makes them a number. 
for example, 1, 4, and 9 will become 149.
*/

const userNum1 = Number(prompt("please enter first number"));
const userNum2 = Number(prompt("please enter second number"));
const userNum3 = Number(prompt("please enter third number"));

function numSum(n1, n2, n3) {
  let sum = String(n1) + String(n2) + String(n3);
  return sum;
}

console.log(numSum(userNum1, userNum2, userNum3));
