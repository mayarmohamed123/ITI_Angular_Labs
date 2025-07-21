var fetchBtn = document.querySelector("button");
var tBody = document.getElementById("tBody");
var searchInput = document.getElementById("number");

var response;
var link;
var users;

var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();

const url = "https://dummyjson.com/users/";
const url2 = "https://jsonplaceholder.typicode.com/users";

// Users
xhr.open("GET", url);
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    response = JSON.parse(xhr.response);
    users = response.users;
    if (link) displayData();
  }
};

// Users (websites)
xhr2.open("GET", url2);
xhr2.send();
xhr2.onreadystatechange = function () {
  if (xhr2.readyState === 4 && xhr2.status === 200) {
    link = JSON.parse(xhr2.response);
    if (users) displayData();
  }
};

function displayData() {
  tBody.innerHTML = "";
  for (var i = 0; i < users.length; i++) {
    var website = link[i] ? link[i].website : "example.com"; // fallback website
    var newRow = `
      <tr id="row-${i}">
        <td>${users[i].id}</td>
        <td><img src="${users[i].image}" width="50" height="50"></td>
        <td>${users[i].email}</td>
        <td>${users[i].username}</td>
        <td>${users[i].phone}</td>
        <td><a href="https://${website}" target="_blank">Click here</a></td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteRow(${i})">Delete</button>
          <button class="btn btn-success btn-sm" onclick="visit(${i})">Visit</button>
        </td>
      </tr>
    `;
    tBody.innerHTML += newRow;
  }
}
fetchBtn.addEventListener("click", function () {
  var inputValue = parseInt(searchInput.value);
  searchedData(inputValue);
});

function searchedData(inputValue) {
  tBody.innerHTML = "";
  var index = inputValue - 1;
  if (isNaN(index) || index < 0 || index >= users.length) {
    alert("Invalid ID");
    displayData();
    return;
  }
  var user = users[index];
  var website = link[index].website;
  var searchedRow = `
      <tr id="row-${index}">
        <td>${user.id}</td>
        <td><img src="${user.image}" width="50" height="50"></td>
        <td>${user.email}</td>
        <td>${user.username}</td>
        <td>${user.phone}</td>
        <td><a href="https://${website}" target="_blank">Click here</a></td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteRow(${index})">Delete</button>
          <button class="btn btn-success btn-sm" onclick="visit(${index})">Visit</button>
        </td>
      </tr>
  `;
  tBody.innerHTML += searchedRow;
}

function deleteRow(index) {
  var row = document.getElementById("row-" + index);
  if (row) {
    row.remove();
  }
}

function visit(index) {
  var user = users[index];
  document.cookie = "firstName=" + user.firstName;
  document.cookie = "lastName=" + user.lastName;
  document.cookie = "gender=" + user.gender;
  document.cookie = "email=" + user.email;
  document.cookie = "birthDate=" + user.birthDate;
  document.cookie = "phone=" + user.phone;
  document.cookie = "country=" + user.address.country;
  console.log(document.cookie);
  window.location.href = "./display.html";
}
