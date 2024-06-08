let gridContainer = document.querySelector(".gridContainer")


createGrid(16)

function createGrid(grid_size) {
    let squareSize = (800/grid_size)

    for (let i = 0; i < grid_size; i++) {
        let currentRow = document.createElement("div")
        gridContainer.appendChild(currentRow)
        for (let j = 0; j < grid_size; j++) {
            let currentDivSquare = document.createElement("div")
            currentDivSquare.style.width = squareSize + "px"
            currentDivSquare.style.height = squareSize + "px"
            currentDivSquare.style.backgroundColor = "green"
            currentRow.appendChild(currentDivSquare)
        }
    }
}