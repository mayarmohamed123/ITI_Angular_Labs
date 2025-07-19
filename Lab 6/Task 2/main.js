var form = document.getElementById("user-form");
var nameInput = document.getElementById("name");
var passwordInput = document.getElementById("password");
var emailInput = document.getElementById("email");
var genderInputs = document.getElementsByName("gender");
var sportsInputs = document.getElementsByName("sports");
var countrySelect = document.getElementById("country");
var nameError = document.querySelector(".name-error");
var passwordError = document.querySelector(".password-error");
var emailError = document.querySelector(".email-error");
var genderError = document.querySelector(".gender-error");
var sportsError = document.querySelector(".sports-error");
var countryError = document.querySelector(".country-error");
var resetBtn = document.querySelector(".reset-btn");
var errorMessages = document.querySelectorAll(".error");

var nameRegex = /^[a-zA-Z]{3,}$/;
var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var emailRegex =
  /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var valid = true;

  if (!nameRegex.test(nameInput.value.trim())) {
    nameError.classList.remove("hidden");
    valid = false;
  } else {
    nameError.classList.add("hidden");
  }

  if (!passwordRegex.test(passwordInput.value.trim())) {
    passwordError.classList.remove("hidden");
    valid = false;
  } else {
    passwordError.classList.add("hidden");
  }

  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.classList.remove("hidden");
    valid = false;
  } else {
    emailError.classList.add("hidden");
  }

  var genderSelected = Array.from(genderInputs).some((input) => input.checked);
  if (!genderSelected) {
    genderError.classList.remove("hidden");
    valid = false;
  } else {
    genderError.classList.add("hidden");
  }

  var sportsSelected = Array.from(sportsInputs).some((input) => input.checked);
  if (!sportsSelected) {
    sportsError.classList.remove("hidden");
    valid = false;
  } else {
    sportsError.classList.add("hidden");
  }

  if (countrySelect.value === "") {
    countryError.classList.remove("hidden");
    valid = false;
  } else {
    countryError.classList.add("hidden");
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
function hideAllErrors() {
  errorMessages.forEach((error) => error.classList.add("hidden"));
}

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  form.reset();
  hideAllErrors();
});
