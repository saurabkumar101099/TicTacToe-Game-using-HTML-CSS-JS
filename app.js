let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const resetGame = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.style.color = "#b0413e";
        box.disabled = false;
    }
    turnO = true;
};

const showWinner = (winner) => {
    alert(`Player ${winner} is the winner!`);
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "black";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                disableBoxes();
            }
        }
    }
};

resetButton.addEventListener("click", resetGame);
