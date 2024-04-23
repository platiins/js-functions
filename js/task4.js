/*
write a function that accepts the width and length of a rectangle and calculates its area. 
if there is only one parameter given, it counts as a square. 
*/

const userWidth = Number(prompt("provide the width of a rectangle"));
const userLength = Number(prompt("provide the length of a rectangle"));

function rectArea(width, length) {
  if (width > 0 && length > 0) {
    rectAreaResult = width * length;
  } else if (width > 0) {
    rectAreaResult = width * width;
  } else if (length > 0) {
    rectAreaResult = length * length;
  } else {
    rectAreaResult = "unable to calculate";
  }
  return rectAreaResult;
}

console.log(rectArea(userWidth, userLength));
