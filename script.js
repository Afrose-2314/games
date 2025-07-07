if (localStorage.getItem('loggedIn') !== 'true') {
  window.location.href = 'login.html';
}

const games = ["color.html", "math.html", "guess.html", "memory.html", "typing.html"];
const instructions = [
  "Match the correct color as fast as you can!",
  "Solve math problems quickly!",
  "Guess the right number between 1 and 10!",
  "Remember the cards and match them!",
  "Type the words before time runs out!"
];

function spinWheel() {
  const index = Math.floor(Math.random() * games.length);
  const instructionBox = document.getElementById("instruction");
  const message = document.getElementById("message");
  const okBtn = document.getElementById("okBtn");

  message.innerText = instructions[index];
  instructionBox.style.display = "block";

  okBtn.onclick = function() {
    window.location.href = games[index];
  };
}
