function func() {
  var userInput = document.getElementById("userInput").value;
  var arr = userInput.split(",");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "" || isNaN(arr[i])) {
      alert("Please enter only numbers");
      return;
    }
    arr[i] = Number(arr[i]);
  }
  arr = [...new Set(arr)];
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  if (arr.length > 2) {
    document.getElementById("secondLowest").value = arr[1];
    document.getElementById("secondGreater").value = arr[arr.length - 2];
  } else {
    alert("Please enter at least two numbers and don't repeat numbers");
  }
}
