// 1

var sentence = prompt("Write your sentence :");
var letter = prompt("Write the letter that u are searching about:");
var positionOfLetter = [];

function findingLetter(sentence, letter) {
  var sentenceLetters = sentence.split("");
  for (var i = 0; i < sentenceLetters.length; i++) {
    if (sentenceLetters[i] == letter) {
      positionOfLetter.push(i);
    }
  }
  return positionOfLetter;
}

console.log(findingLetter(sentence, letter));

// 2

// var number = Number(prompt("Enter your number"));
// if (isNaN(number)) {
//   number = Number(prompt("Enter a valid number"));
// }

// function func(x) {
//   return x % 3 === 0 && x % 5 === 0
//     ? "fizz buzz"
//     : x % 3 === 0
//     ? "fizz"
//     : x % 5 === 0
//     ? "buzz"
//     : "none";
// }

// console.log(func(number));

// 3

// var lengthOfArray = Number(prompt("Enter the length of the array"));
// var arr = [];

// for (var i = 0; i < lengthOfArray; i++) {
//   var number = Number(prompt("Enter your numbers to the array :"));
//   arr.push(number);
// }

// function arraySum(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// function arrayMul(arr) {
//   var mul = 1;
//   for (var i = 0; i < arr.length; i++) {
//     mul = mul * arr[i];
//   }
//   return mul;
// }
// function arrayDiv(arr) {
//   var div = arr[0];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       console.log("Division by zero is not allowed");
//       continue;
//     }
//     div = div / arr[i];
//   }
//   return div;
// }

// console.log(arraySum(arr));
// console.log(arrayMul(arr));
// console.log(arrayDiv(arr));

// 4
// var lengthOfArray = Number(prompt("Enter the length of the array"));
// var arr = [];

// for (var i = 0; i < lengthOfArray; i++) {
//   var number = Number(prompt("Enter your numbers to the array :"));
//   arr.push(number);
// }

// function sortAsc(arr) {
//   return arr.sort(function (a, b) {
//     return a - b;
//   });
// }

// function sortDes(arr) {
//   return arr.sort(function (a, b) {
//     return b - a;
//   });
// }

// console.log("Ascending:", sortAsc(arr));
// console.log("Descending:", sortDes(arr));
