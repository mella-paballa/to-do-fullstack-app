console.log("Portfolio loaded.");



  const words = ["Ella!", "a Web Developer!", "UI Curious!", "a Tech Explorer!"];
const el = document.getElementById("typewriter-word");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);

  el.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeLoop, 120);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeLoop, 60);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeLoop, 1000); // wait before deleting
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeLoop, 400); // wait before typing next
    }
  }
}

typeLoop();


