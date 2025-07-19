var successBtn = document.querySelectorAll("button")[0];
var errorBtn = document.querySelectorAll("button")[1];
var successBox = document.querySelector(".success-result");
var errorBox = document.querySelector(".error-result");

successBtn.addEventListener("click", () => {
  successBox.style.display = "block";
  errorBox.style.display = "none";
});

errorBtn.addEventListener("click", () => {
  errorBox.style.display = "block";
  successBox.style.display = "none";
});
