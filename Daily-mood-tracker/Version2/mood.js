function addMood() {
  const mood = document.getElementById("mood").value;
  const note = document.getElementById("note").value;
  const moodList = document.getElementById("moodList");

  if (!mood) return; // Don't add empty mood

  const time = new Date().toLocaleTimeString();

  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${mood}</strong> — <span class="note">${note || "No note"}</span> <br/>
    <small>${time}</small><br/>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;

  // Add event listeners to buttons inside this <li>
  li.querySelector(".delete").addEventListener("click", function () {
    li.remove(); // remove this item
  });

  li.querySelector(".edit").addEventListener("click", function () {
    const newNote = prompt("Edit your note:", li.querySelector(".note").innerText);
    if (newNote !== null) {
      li.querySelector(".note").innerText = newNote;
    }
  });

  moodList.appendChild(li);

  // Reset input
  document.getElementById("mood").value = "";
  document.getElementById("note").value = "";
}
