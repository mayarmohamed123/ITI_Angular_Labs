var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");
var body = document.querySelector("body");
var trafficLight = document.querySelector(".traffic-light");

var interval;

function start() {
  clearInterval(interval);
  interval = setInterval(function () {
    red.classList.add("red");
    yellow.classList.remove("yellow");
    green.classList.remove("green");
    setTimeout(function () {
      red.classList.remove("red");
      yellow.classList.add("yellow");
      green.classList.remove("green");
    }, 1000);
    setTimeout(function () {
      red.classList.remove("red");
      yellow.classList.remove("yellow");
      green.classList.add("green");
    }, 2000);
  }, 3000);
}

start();

trafficLight.addEventListener("mouseover", function (e) {
  e.stopPropagation();
});

red.addEventListener("mouseover", function (e) {
  e.stopPropagation();
  clearInterval(interval);
  red.classList.add("red");
  yellow.classList.remove("yellow");
  green.classList.remove("green");
});

yellow.addEventListener("mouseover", function (e) {
  e.stopPropagation();
  clearInterval(interval);
  red.classList.remove("red");
  yellow.classList.add("yellow");
  green.classList.remove("green");
});

green.addEventListener("mouseover", function (e) {
  e.stopPropagation();
  clearInterval(interval);
  red.classList.remove("red");
  yellow.classList.remove("yellow");
  green.classList.add("green");
});

body.addEventListener("mouseover", function (e) {
  e.stopPropagation();
  start();
});
