let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

const icons = {
    Rock: "✊",
    Paper: "✋",
    Scissors: "✌️"
};

function playGame(playerChoice) {

    const choices = ["Rock", "Paper", "Scissors"];

    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    let result;
    let resultIcon;

    if (playerChoice === computerChoice) {
        result = "It's a Draw!";
        resultIcon = "🤝";
        drawScore++;
    }
    else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You Win!";
        resultIcon = "🏆";
        playerScore++;
    }
    else {
        result = "Computer Wins!";
        resultIcon = "🤖";
        computerScore++;
    }

    document.getElementById("player-icon").textContent =
        icons[playerChoice];

    document.getElementById("computer-icon").textContent =
        icons[computerChoice];

    document.getElementById("player-choice").textContent =
        playerChoice;

    document.getElementById("computer-choice").textContent =
        computerChoice;

    document.getElementById("result-text").textContent =
        result;

    document.getElementById("result-icon").textContent =
        resultIcon;

    document.getElementById("player-score").textContent =
        playerScore;

    document.getElementById("computer-score").textContent =
        computerScore;

    document.getElementById("draw-score").textContent =
        drawScore;

    const resultBox = document.getElementById("result-box");

    resultBox.className = "result-box";

    if (result === "You Win!") {
        resultBox.classList.add("win");
    }
    else if (result === "Computer Wins!") {
        resultBox.classList.add("lose");
    }
    else {
        resultBox.classList.add("draw");
    }
}

function resetGame() {

    playerScore = 0;
    computerScore = 0;
    drawScore = 0;

    document.getElementById("player-score").textContent = "0";
    document.getElementById("computer-score").textContent = "0";
    document.getElementById("draw-score").textContent = "0";

    document.getElementById("player-icon").textContent = "❔";
    document.getElementById("computer-icon").textContent = "❔";

    document.getElementById("player-choice").textContent = "Waiting...";
    document.getElementById("computer-choice").textContent = "Waiting...";

    document.getElementById("result-icon").textContent = "🎮";
    document.getElementById("result-text").textContent =
        "Make your move!";

    document.getElementById("result-box").className =
        "result-box";
}

