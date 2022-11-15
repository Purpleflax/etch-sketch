let  i = 16;
let dimensions = i * i;
const sizeSelector = document.querySelector("#sizeSelector");
const gridContainer = document.querySelector("#gridContainer");
const rainbowMode = document.querySelector("#rainbowMode");
const eraserMode = document.querySelector("#eraser");
let rainbowModeActive = 0;
drawGrid(i);
function drawGrid(heightWidth) {
    for (let i = 0; i < dimensions; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("gridBox");
        gridBox.addEventListener("mouseover", () => {
            if(rainbowModeActive === 0) {
                gridBox.style.background = "black";
            }
            else if(rainbowModeActive === 1) {
                gridBox.style.background = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
            }

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

rainbowMode.addEventListener("click", () => {
    if(rainbowModeActive === 0) {
        rainbowModeActive = 1; 
        rainbowMode.style.background = "linear-gradient(-45deg, #ffd6d6,#faffb0,#c0ffb6,#d0ddff,#e1bfff)";
        rainbowMode.style.backgroundSize = "400% 400%";
    }
    else if(rainbowModeActive === 1) {
        rainbowModeActive = 0; 
        rainbowMode.style.background = "";
        rainbowMode.style.animation = "";
    }
});

eraserMode.addEventListener("click", () => {
    rainbowModeActive = 0;
})