let gameContainer = document.querySelector(".game-Container")

for (let i = 0; i < 16; i++) {
    let currentRow = document.createElement("div")
    gameContainer.appendChild(currentRow)
    for (let j = 0; j < 16; j++) {
        let currentDivSquare = document.createElement("div")
        currentDivSquare.style.width = "50px"
        currentDivSquare.style.height = "50px"
        currentDivSquare.style.backgroundColor = "green"

        currentRow.appendChild(currentDivSquare)
    }
}


