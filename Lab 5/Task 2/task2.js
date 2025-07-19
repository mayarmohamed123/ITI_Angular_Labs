var userInput = document.getElementById("userInput");
var output = document.getElementById("output");

function convertText() {
  var text = userInput.value;
  var textArray = text.split(" ");
  for (var i = 0; i < textArray.length; i++) {
    if (textArray[i]) {
      textArray[i] =
        textArray[i][0].toUpperCase() + textArray[i].slice(1).toLowerCase();
    }
  }
  output.value = textArray.join(" ");
}
