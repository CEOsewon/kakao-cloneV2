const timeStamp = document.querySelector(".status-bar-timestamp");

function getTime() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();
  timeStamp.innerText = `${hour}:${minute >= 10 ? minute : `0${minute}`}:${
    second >= 10 ? second : `0${second}`
  }`;
}

setInterval(getTime, 1000);
