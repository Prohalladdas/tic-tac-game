let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".reset-btn")

let showResultCon = document.querySelector(".showResult")
let ShowMsg = document.querySelector(".msg")
let newGameBtn = document.querySelector(".newGame")

let turnO = true;

let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O"
            turnO = false
            box.style.color = "#ff3f3f"
        } else {
            box.innerText = "X"
            turnO = true
            box.style.color = "#653fff"
        }
        box.disabled = true;

        cheackWinner();
    })
})

function resetGame() {
    // let turnO = true;
    showResultCon.classList.add("hide")
    enabledBox()
}

function enabledBox() {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

function disabledBox() {
    for (box of boxes) {
        box.disabled = true;
    }
}

function showWinner(winner) {
    ShowMsg.innerText = `Congratulations Winner is '${winner}' `
    showResultCon.classList.remove("hide")
    disabledBox()
}

function cheackWinner() {
    for (let pattern of winPattern) {
        let position1 = boxes[pattern[0]].innerText
        let position2 = boxes[pattern[1]].innerText
        let position3 = boxes[pattern[2]].innerText

        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                showWinner(position1)
            }
        }
    }
}
resetBtn.addEventListener("click", resetGame)
newGameBtn.addEventListener("click", resetGame)