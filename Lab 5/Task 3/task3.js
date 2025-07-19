var red = document.querySelector(".red");
var yellow = document.querySelector(".yellow");
var green = document.querySelector(".green");
function trafficLight() {
  var userInput = Number(document.getElementById("userInput").value);

  if (userInput == 1) {
    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "white";
    green.style.backgroundColor = "white";
  } else if (userInput == 2) {
    red.style.backgroundColor = "white";
    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = "white";
  } else if (userInput == 3) {
    red.style.backgroundColor = "white";
    yellow.style.backgroundColor = "white";
    green.style.backgroundColor = "green";
  } else {
    alert("sorry , the input should be 1 or 2 or 3 ");
  }
}
