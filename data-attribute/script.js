const currentTime = document.querySelector(".current-week");
const utcTime = document.querySelector(".utc-time");

function getCurrentDay() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getDay()];

  currentTime.textContent = `Current Day of The Week: ${currentDay}`;

  // console.log(currentDay);
}
getCurrentDay();

function getUTCtime() {
  const currentDate = new Date();

  const currentHour = currentDate.getUTCHours();
  const currentMinutes = currentDate.getUTCMinutes();
  const currentSeconds = currentDate.getUTCSeconds();
  const currentMilliseconds = currentDate.getUTCMilliseconds();
  const currentUtcTime = `${currentHour}:${currentMinutes}:${currentSeconds}:${currentMilliseconds} UTC`;

  utcTime.textContent = `Current UTC Time: ${currentUtcTime}`;
}

getUTCtime();
