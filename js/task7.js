/* 
Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. 
If the seconds are not given, they should be displayed as 00.
*/

const hoursValue = prompt("enter hours:");
const minutesValue = prompt("enter minutes:");
const secondsValue = prompt("enter seconds:");

function timeFormat(h, min, sek) {
  const convertHours = String(h).padStart(2, "0");
  const convertMinutes = String(min).padStart(2, "0");
  const convertSeconds = String(sek).padStart(2, "0");

  if (sek === null) {
    sek === 0;
  }

  return console.log(`${convertHours}:${convertMinutes}:${convertSeconds}`);
}

timeFormat(hoursValue, minutesValue, secondsValue);
