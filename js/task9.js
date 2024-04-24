/*
Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.
*/

const secondsValue = Number(prompt("enter the amount of seconds"));

function timeToHMS(sek) {
  const hours = parseInt(sek / 3600);

  sek %= 3600;

  const minutes = parseInt(sek / 60);

  sek %= 60;

  const convertHours = String(hours).padStart(2, "0");
  const convertMinutes = String(minutes).padStart(2, "0");
  const convertSeconds = String(sek).padStart(2, "0");

  return console.log(`${convertHours}:${convertMinutes}:${convertSeconds}`);
}

timeToHMS(secondsValue);
