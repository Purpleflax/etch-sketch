const gridContainer = document.querySelector("#gridContainer");
let dimensions = 16 * 16;
for (let i = 0; i < dimensions; i++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add("gridBox");
    gridContainer.appendChild(gridBox);
}