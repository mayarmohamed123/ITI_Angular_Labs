console.log(document.cookie);
var cookies = document.cookie.split(";").map((cookie) => cookie.split("="));
console.log(cookies);

var container = document.querySelector(".container");

container.innerHTML = `
  <div class="card mx-auto shadow p-4" style="max-width: 600px;">
    <h3 class="text-center mb-4 text-primary">User Details</h3>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <strong>First Name:</strong> ${cookies[0][1]}
      </li>
      <li class="list-group-item">
        <strong>Last Name:</strong> ${cookies[1][1]}
      </li>
      <li class="list-group-item">
        <strong>Gender:</strong> ${cookies[2][1]}
      </li>
      <li class="list-group-item">
        <strong>Email:</strong> ${cookies[3][1]}
      </li>
      <li class="list-group-item">
        <strong>Birth Date:</strong> ${cookies[4][1]}
      </li>
      <li class="list-group-item">
        <strong>Phone:</strong> ${cookies[5][1]}
      </li>
      <li class="list-group-item">
        <strong>Country:</strong> ${cookies[6][1]}
      </li>
    </ul>
  </div>`;
