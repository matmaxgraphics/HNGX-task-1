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

  currentTime.textContent = `${currentDay}`;

  // console.log(currentDay);
}
getCurrentDay();

setInterval(getCurrentDay, 1000)

function getUTCtime() {
  const currentDate = new Date();
  
  const currentMilliseconds = getTime();
  const currentUtcTime = currentMilliSeconds.toLocaleString();

  utcTime.textContent = `${currentUtcTime}`;
}

getUTCtime();
setInterval(getUTCtime, 1000)
