let  i = 16;
let dimensions = i * i;
const sizeSelector = document.querySelector("#sizeSelector");
const gridContainer = document.querySelector("#gridContainer");
drawGrid(i);
function drawGrid(heightWidth) {
    for (let i = 0; i < dimensions; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("gridBox");
        gridBox.addEventListener("mouseover", () => {
            gridBox.style.background = "black";
        });
        gridContainer.appendChild(gridBox);
    }
    gridContainer.style.gridTemplateColumns = "repeat(" + heightWidth + ", 1fr)";
    gridContainer.style.gridTemplateRows = "repeat(" + heightWidth + ", 1fr)";
}

sizeSelector.addEventListener("click", () => {
    i = prompt("Please enter how many boxes long and wide you would like the grid");
    if(i > 0 && i < 100) {
        dimensions = i * i;
        gridContainer.innerHTML = "";
        drawGrid(i);
    } else {
        alert("Invalid grid size")
    }
})
