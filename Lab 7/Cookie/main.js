var btn = document.querySelector(".btn");
var userName = document.getElementById("userName");
var userAge = document.getElementById("userAge");
var color = document.getElementById("color");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  var userNameValue = userName.value;
  var userAgeValue = userAge.value;
  var gender = document.querySelector('input[name="gender"]:checked')?.value;
  var colorValue = color.value;
  var status = history.length;

  document.cookie = `userName=${userNameValue}`;
  document.cookie = `userAge=${userAgeValue}`;
  document.cookie = `status=${status}`;
  document.cookie = `gender=${gender}`;
  document.cookie = `color=${colorValue}`;

  window.location.href = "./display.html";
});
