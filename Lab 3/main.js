// first question

var userMessage = prompt("Enter your message");
for (var i = 1; i <= 6; i++) {
  document.writeln(`<h${i}> The heading ${i} : ${userMessage} </h${i}>`);
}

// second question

var number = Number(prompt("Enter the number of the loop:"));
var sum = 0;
for (var j = 0; j < number; j++) {
  var theAddedNumber = Number(prompt("Enter the number:"));
  if (isNaN(theAddedNumber)) {
    alert("Please enter a valid number.");
    j--;
    continue;
  } else if (theAddedNumber == 0) {
    break;
  }
  sum += theAddedNumber;
  if (sum > 100) {
    break;
  }
}
alert(`The sum is: ${sum}`);
console.log(`The sum is: ${sum}`);

// third question

// var numberOfE = 0;
// var str = prompt("Enter your word :").toLowerCase();
// for (var i = 0; i < str.length; i++) {
//   if (str[i] === "e") {
//     numberOfE++;
//   }
// }
// alert(`The number of e in the word is: ${numberOfE}`);

// fourth question
var caseSenstivity = confirm("Do u want me to consider the case sensitivity?");
var str;
if (caseSenstivity) {
  str = prompt("Enter your word :").toLowerCase();
} else {
  str = prompt("Enter your word :");
}
var reversedstr = str.split("").reverse().join("");
if (str === reversedstr) {
  alert("The word is a palindrome");
} else {
  alert("The word is not a palindrome");
}

// fifth question
var userName = prompt("Enter your name:");
while (!/^[a-zA-Z]+$/.test(userName)) {
  userName = prompt("please , write invalid name");
}

var number = Number(prompt("Enter your number :"));
while (!/^\d{8}$/.test(phone)) {
  number = prompt("please , write invalid phone number");
}

var mobileNumber = prompt("Enter your mobile number :");
while (!/^(010|011|012)\d{8}$/.test(mobile)) {
  mobileNumber = prompt("please , write invalid mobile number");
}

var email = prompt("Enter your email :");
while (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/.test(email)) {
  email = prompt("please , write invalid email");
}

var today = new Date().toLocaleDateString();
alert(
  `Welcome ${userName}, your phone number is ${number}, your mobile number is ${mobileNumber}, your email is ${email}, and today is ${today}.`
);
