const timeStamp = document.querySelector(".status-bar-timestamp");

function getTime() {
  const currentTime = new Date();
  const hour = currentTime.getHours("hour");
  const minute = currentTime.getMinutes("minute");
  const second = currentTime.getSeconds("second");
  timeStamp.innerText = `${hour}:${minute}:${
    second > 9 ? second : `0${second}`
  }`;
}

setInterval(getTime, 1000);
