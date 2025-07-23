// 1
// let a = 1, b = 2;
// [a, b] = [b, a];
// console.log("a:", a);
// console.log("b:", b);

// //2
// function getMinMax(...numbers) {
//   let max = Math.max(...numbers);
//   let min = Math.min(...numbers);
//   return { min, max };
// }

// const result = getMinMax(1, 2, 3, 4);
// console.log("Max:", result.max);
// console.log("Min:", result.min);

// // 3
// const fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// console.log(
//   "All strings:",
//   fruits.every((fruit) => typeof fruit === "string")
// );

// console.log(
//   "Some start with 'a':",
//   fruits.some((fruit) => fruit.startsWith("a"))
// );

// const filteredFruits = fruits.filter(
//   (fruit) => fruit.startsWith("b") || fruit.startsWith("s")
// );
// console.log("Filtered fruits:", filteredFruits);

// const likedFruits = fruits.map((fruit) => `I like ${fruit}`);
// console.log("Liked fruits:", likedFruits);

// likedFruits.forEach((item) => console.log(item));

// 4
// function positiveArr(arr) {
//   return arr.filter((item) => item > 0);
// }
// console.log(positiveArr([1, -1, -2, 3]));

// 5
// function sum(arr) {
//   return arr.reduce((x, y) => x + y);
// }
// console.log(sum([1, 2, 3, 4]));

//6
// const names = ["mayar", "bassant", "mona"];
// function captilalize(arr) {
//   return arr.map((item) => item[0].toUpperCase() + item.slice(1));
// }
// console.log(captilalize(names));

// 7
// function isLowerCase(str) {
//   return str.trim().toLowerCase() ? true : false;
// }
// console.log(isLowerCase("  mayar"));

//8
// const arr = ["mayar", "bassant", "mo"];
// var func = (arr, arrLength) => {
//   return arr.filter((item) => item.length > arrLength);
// };
// console.log(func(arr, 3));
