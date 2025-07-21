var arrImg = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
  "./images/6.jpg",
];

var image = document.getElementById("image");
var pre = document.querySelector(".prev");
var nextt = document.querySelector(".next");
var index = 0;
var interval;

start();

pre.addEventListener("click", previous);
nextt.addEventListener("click", next);

function start() {
  image.src = arrImg[index];
  interval = setInterval(next, 1000);
}

function next() {
  clearInterval(interval);
  index = (index + 1) % arrImg.length;
  image.src = arrImg[index];
  interval = setInterval(next, 7000);
}

function previous() {
  clearInterval(interval);
  index = (index - 1 + arrImg.length) % arrImg.length;
  image.src = arrImg[index];
  interval = setInterval(next, 7000);
}
