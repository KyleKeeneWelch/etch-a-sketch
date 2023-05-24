// References to elements in the page.
const gridContainer = document.querySelector('.grid-container');
const cellSlider = document.querySelector('#cell-slider');
const sizeText = document.querySelector('#size-text');
const clearBtn = document.querySelector('#clear-btn');
const chooseColour = document.querySelector('#choose-colour');
const drawBtn = document.querySelector('#draw-btn');
const eraseBtn = document.querySelector('#erase-btn');
const guidelinesBtn = document.querySelector('#guidelines-btn');

// Constant values for default state.
const DEFAULT_COLOR = '#333333';
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'draw';
const DEFAULT_HAS_GLINES = false;

// Let values for dynamic state.
let currentSize = DEFAULT_SIZE;
let isMouseDown = false;
let currentMode = DEFAULT_MODE;
let currentColour = DEFAULT_COLOR;
let hasGuidelines = DEFAULT_HAS_GLINES;

// Event listeners.
cellSlider.onmousemove = (e) => updateSizeText(e.target.value);
cellSlider.onchange = (e) => changeSize(e.target.value);
clearBtn.onclick = () => reloadGrid();
chooseColour.oninput = (e) => setCurrentColour(e.target.value);
drawBtn.onclick = () => setCurrentMode('draw');
eraseBtn.onclick = () => setCurrentMode('erase');
guidelinesBtn.onclick = () => setGuidelines();
document.body.onmousedown = () => (isMouseDown = true);
document.body.onmouseup = () => (isMouseDown = false);

// Creates the grid with the associated size.
function makeGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i = 0; i < (size * size); i++) {
        const cell = document.createElement("div");
        cell.addEventListener('mouseover', changeColour);
        cell.addEventListener('mousedown', changeColour);
        gridContainer.appendChild(cell).className = "grid-item";
    };
};

// Sets the guidelines variable.
function setGuidelines() {
    if (hasGuidelines) {hasGuidelines = false;}
    else {hasGuidelines = true;}
    changeGuidelines();
}

// Sets the currentmode.
function setCurrentMode(mode) {
    setActiveButton(mode);
    currentMode = mode;
}

// Sets the current colour.
function setCurrentColour(colour) {
    currentColour = colour;
}

// Sets the current size.
function setCurrentSize(newSize) {
    currentSize = newSize;
}

// Clears the grid.
function clearGrid() {
    gridContainer.innerHTML = '';
    setGuidelines();
}

// Reloads the grid (clears and recreate).
function reloadGrid() {
    clearGrid();
    makeGrid(currentSize);
}

// Updates the size text.
function updateSizeText(size) {
    sizeText.textContent = `${size} x ${size}`;
}

// Changes the size of the grid. Keeps guidelines if enabled.
function changeSize(size) {
    setCurrentSize(size);
    updateSizeText(size);
    reloadGrid();
    changeGuidelines();
}

// Sets the active button.
function setActiveButton(mode) {
    if (currentMode === 'draw') {
        drawBtn.classList.remove('active');
    }
    else if (currentMode === 'erase') {
        eraseBtn.classList.remove('active');
    }

    if (mode === 'draw') {
        drawBtn.classList.add('active');
    }
    else if (mode === 'erase') {
        eraseBtn.classList.add('active');
    }
}

// Enables and disables the guidelines.
function changeGuidelines() {
    cells = Array.from(gridContainer.children);
    if (hasGuidelines) {
        cells.forEach(cell => {
            cell.style.border = '1px solid #CBCCCE';
        });
        guidelinesBtn.classList.add('active');
    }
    else {
        cells.forEach(cell => {
            cell.style.border = '';
        });
        guidelinesBtn.classList.remove('active');
    }
}
  
// Changes the assigned colour or enables eraser.
function changeColour(e) {
    if (e.type === 'mouseover' && !isMouseDown) return
    if (currentMode === 'draw') {
        e.target.style.backgroundColor = currentColour
    }
    else if (currentMode === 'erase') {
        e.target.style.backgroundColor = '#fefefe';
    }
}

// Make grid upon load.
window.onload = () => {
    makeGrid(DEFAULT_SIZE);
}