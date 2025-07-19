function addMood() {
    const mood = document.getElementById("mood").value;
    const note = document.getElementById("note").value;
    const time = new Date().toLocaleString();

    const li = document.createElement("li");
  li.innerHTML = `
    <strong>${mood}</strong> — ${note ? note : "No note"} <br/>
    <small>${time}</small>
    <button onclick="this.parentElement.remove()">Delete</button>
  `

  document.getElementById("moodList").appendChild(li);

  
  document.getElementById("note").value = "";
  
}

// $(note ? note : "No note") is the same with (shorter)

// if (note) {
//     console.log(note)
// } else {
//     console.log("No note");
// }



