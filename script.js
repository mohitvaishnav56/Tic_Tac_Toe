let boxes = document.querySelectorAll(".container div");
let gameOver = document.querySelector(".game-over-overlay");
let count = 0;
let reset = document.querySelector;
let winner = document.querySelector("#winner-name");
const winPatterns = [
  [0, 1, 2], // horizontal
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // vertical
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonal 1
  [2, 4, 6], // diagonal 2
];

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerHTML;
    let pos2 = boxes[pattern[1]].innerHTML;
    let pos3 = boxes[pattern[2]].innerHTML;
    if (pos1 && pos1 === pos2 && pos2 === pos3) {
      winner.innerHTML = pos1;
      showWinner();
      return;
    }
  }
  if (count === 9) {
    gameOver.style.display = "flex";
  }
};

const showWinner = () => {
  document.querySelector(".winner-overlay").style.display = "flex";
};

document.querySelector("#play-again-winner").addEventListener("click", () => {
  document.querySelector(".winner-overlay").style.display = "none";
  resetGame();
});

document.querySelector("#play-again").addEventListener("click", () => {
  gameOver.style.display = "none";
  resetGame();
});

const resetGame = () => {
  boxes.forEach((box) => {
    box.innerHTML = "";
  });
  count = 0;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!box.innerHTML) {
      box.innerHTML = count % 2 === 0 ? "X" : "O";
      count++;
      checkWinner();
    }
  });
});

