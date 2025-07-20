var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var hours = document.getElementById("hours");
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var resetBtn = document.getElementById("resetBtn");
var hour = 0;
var minute = 0;
var second = 0;
var interval;

startBtn.addEventListener("click", function () {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;

  interval = setInterval(function () {
    second++;
    if (second === 60) {
      second = 0;
      minute++;
    }
    if (minute === 60) {
      minute = 0;
      hour++;
    }
    hours.innerHTML = hour < 10 ? "0" + hour : hour;
    minutes.innerHTML = minute < 10 ? "0" + minute : minute;
    seconds.innerHTML = second < 10 ? "0" + second : second;
  }, 1000);
});

stopBtn.addEventListener("click", function () {
  clearInterval(interval);
  startBtn.disabled = false;
});

resetBtn.addEventListener("click", function () {
  clearInterval(interval);
  hour = 0;
  minute = 0;
  second = 0;
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
});
