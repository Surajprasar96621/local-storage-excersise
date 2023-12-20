const form = document.getElementById("user-form");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const displayArea = document.getElementById("display-area");
const retrieveButton = document.getElementById("retrieve-data");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const age = ageInput.value;
  localStorage.setItem("name", name);
  localStorage.setItem("age", age);
  nameInput.value = "";
  ageInput.value = "";
  displayArea.textContent = "Data stored successfully!";
});

retrieveButton.addEventListener("click", () => {
  const name = localStorage.getItem("name");
  const age = localStorage.getItem("age");
  const table = document.createElement("table");
  table.innerHTML = `
    <tr>
      <th>Name</th>
      <td>${name}</td>
    </tr>
    <tr>
      <th>Age</th>
      <td>${age}</td>
    </tr>
  `;
  displayArea.innerHTML = "";
  displayArea.appendChild(table);
});
