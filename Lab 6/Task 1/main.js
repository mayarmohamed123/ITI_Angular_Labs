var userName = document.getElementById("name");
var userId = document.getElementById("id");
var userAge = document.getElementById("age");
var submitBtn = document.querySelector(".submit-btn");
var tableBody = document.querySelector("tbody");
var nameError = document.querySelector(".name-error");
var idError = document.querySelector(".id-error");
var idRepeat = document.querySelector(".id-repeat");
var ageError = document.querySelector(".age-error");

var idSet = new Set();

submitBtn.addEventListener("click", function () {
  var name = userName.value.trim();
  var id = userId.value.trim();
  var age = userAge.value.trim();
  var isValid = true;

  // name
  if (name === "" || name.length < 3) {
    nameError.classList.remove("hidden");
    isValid = false;
  } else {
    nameError.classList.add("hidden");
  }

  // id
  if (id === "" || isNaN(id)) {
    idError.classList.remove("hidden");
    isValid = false;
  } else if (idSet.has(id)) {
    idRepeat.classList.remove("hidden");
    isValid = false;
  } else {
    idError.classList.add("hidden");
    idRepeat.classList.add("hidden");
  }

  //age
  if (age === "" || isNaN(age)) {
    ageError.classList.remove("hidden");
    isValid = false;
  } else {
    ageError.classList.add("hidden");
  }

  if (isValid) {
    idSet.add(id);
    var tableRow = document.createElement("tr");
    tableRow.innerHTML = `
      <td>${name}</td>
      <td>${id}</td>
      <td>${age}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;

    tableBody.appendChild(tableRow);

    userName.value = "";
    userId.value = "";
    userAge.value = "";

    var deleteBtn = tableRow.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
      tableRow.remove();
      idSet.delete(id);
    });
  }
});
