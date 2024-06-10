let gridContainer = document.querySelector(".gridContainer")
let startButton = document.querySelector(".startButton")


startButton.addEventListener("click", function() {
    const userInput = prompt("Please enter an integer value for grid size from 1 to 100.")
    let grid_size = Number(userInput)
    if(grid_size > 0 && grid_size < 101) {
        createGrid(grid_size)
        document.querySelectorAll(".gridSquare").forEach(changeColor)
    } else if (grid_size > 100) {
        alert("Please enter a number from 1 to 100.")
    } else {
        alert("Please enter a number.")
    }
})










// FUNCTIONS
function createGrid(grid_size) {
    gridContainer.innerHTML = ""
   let squareSize = (800/grid_size)

   for (let i = 0; i < grid_size; i++) {
       let currentRow = document.createElement("div")
       gridContainer.appendChild(currentRow)
       for (let j = 0; j < grid_size; j++) {
           let currentDivSquare = document.createElement("div")
           currentDivSquare.style.width = squareSize + "px"
           currentDivSquare.style.height = squareSize + "px"
           currentDivSquare.style.backgroundColor = "green"
           currentDivSquare.classList.add("gridSquare")
           currentRow.appendChild(currentDivSquare)
       }
   }
}

function changeColor(square) {
    (function(square2) {
        square2.addEventListener("mouseover", function() {
            square2.style.backgroundColor = "blue"
        })
    })(square)
   
}