var tagName = document.getElementById("tagName");
var className = document.getElementById("className");
var id = document.getElementById("id");
var nameInput = document.getElementById("name");
var result = document.getElementById("result");

function count() {
  var tagNameCount = document.getElementsByTagName(`${tagName.value}`).length;
  var classNameCount = document.getElementsByClassName(
    `${className.value}`
  ).length;
  var booleanId = !!document.getElementById(`${id.value}`);
  var nameCount = document.getElementsByName(`${nameInput.value}`).length;
  result.innerHTML = `
    <p>Tag Name (${tagName.value}): ${tagNameCount}</p>
    <p>Class Name (${className.value}): ${classNameCount}</p>
    <p>ID Exists (${id.value}): ${booleanId}</p>
    <p>Name Count (${nameInput.value}): ${nameCount}</p>
  `;
}
