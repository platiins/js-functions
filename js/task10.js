/*
Write a function that counts the difference between the dates. 
The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss. 
While solving this problem use the functions from the two previous ones: at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.
*/

const hFirstValue = prompt("enter hours:");
const minFirstValue = prompt("enter minutes:");
const secFirstValue = prompt("enter seconds:");

const hSecondValue = prompt("enter hours:");
const minSecondValue = prompt("enter minutes:");
const secSecondValue = prompt("enter seconds:");

function datesDifferenceToHMS(h1, h2, min1, min2, sec1, sec2) {
  let secSum1;
  secSum1 = Number(h1) * 3600 + Number(min1) * 60 + Number(sec1) * 1;

  let secSum2;
  secSum2 = Number(h2) * 3600 + Number(min2) * 60 + Number(sec2) * 1;

  let difference;
  if (secSum1 > secSum2) {
    difference = secSum1 - secSum2;
  } else if (secSum1 < secSum2) {
    difference = secSum2 - secSum1;
  } else {
    difference = 0;
  }

  const hours = parseInt(difference / 3600);

  difference %= 3600;

  const minutes = parseInt(difference / 60);

  difference %= 60;

  const convertHours = String(hours).padStart(2, "0");
  const convertMinutes = String(minutes).padStart(2, "0");
  const convertSeconds = String(difference).padStart(2, "0");

  return `${convertHours}:${convertMinutes}:${convertSeconds}`;
}

console.log(
  datesDifferenceToHMS(
    hFirstValue,
    hSecondValue,
    minFirstValue,
    minSecondValue,
    secFirstValue,
    secSecondValue
  )
);
