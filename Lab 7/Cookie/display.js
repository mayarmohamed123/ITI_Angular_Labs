var userName = document.getElementById("userName");
var userAge = document.getElementById("userAge");
var userHistory = document.getElementById("userHistory");
var userGender = document.getElementById("userGender");
var userImage = document.getElementById("userImage");

console.log(document.cookie);
var cookies = document.cookie.split(";").map((cookie) => cookie.split("="));
console.log(cookies);

var url;
if (cookies[3][1] == "male") {
  url = "./OIP.webp";
} else {
  url =
    "./flat-illustration-female-head-face-portrait-young-woman-vector-icon-217099770.webp";
}

userImage.src = url;
userName.innerHTML = cookies[0][1];
userAge.innerHTML = cookies[1][1];
userHistory.innerHTML = cookies[3][1];
