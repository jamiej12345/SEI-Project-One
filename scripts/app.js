// * Tetris
// 	Game Overview 
// 	Random blocks fall out the sky, you can turn them on an axis and place them in a 	row along the bottom. if you create a row or multiple complete rows it is cleared 
// 	away and added to your score. If you block up the path the game is over
// 	Each Tetris block is a combination of 4 blocks

// Challenges
// rotating the shape if near a wall
// Game ends if shape is over the top of grid
// changing the size of the grid
// functions to create shapes - using classes
// displaying next shape up/Look ahead piece

	// DATA
	// 	gridWidth 10
  //  gridHeight 20
	// 	cellCount
	// 	cells = [ ]
	// 	blockCurrentPosition
	// 	nextBlock
	// 	score = Number
	// 	highScore = Number
  //  lines = Number

  // HTML
	// 	Create a Main element to wrap and center game
	// 	Create a Score element to hold current score
	// 	Create a High Score element to hold high score

  // CSS 
  //   bare bones css/get JS Working First
  //   basic tetris block shapes

  // JAVASCRIPT
  // functions to create each shape
  // functions to time the shape drop based on level
  // functions to rotate the shape
  // function to switch between current shape and hold
	// use classes in JS to create the shapes
		

  // Control Keys 
  // Move Right - Right Arrow
  // Move Left - Left Arrow
  // Rotate Right - Up Arrow
  // Rotate Left - Z
  // Soft Drop - Down Arrow
  // Hard Drop - Space
  // Esc - pause


// research as much a possible
// The plan really matters
// Full prove your understading of the game
// Start small and simple
// make a very tiny small thing happen first
// start very small super basic
// those two last days focus on styling 

// Tetris Pieces 
// Tee
// Left Kink
// Right Kink
// Square
// Left Elbow
// Right Elbow
// Bar

// Element Selectors
const grid = document.querySelector('.grid')

const gridWidth = 10
const gridHeight = 20
// const cellCount = gridWidth * gridHeight
const rows = []
const cells = []
// onst tetrominoes = ['Tee', 'Left Kink', 'Right Kink', 'Square', 'Left Elbow', 'Right Elbow', 'Bar']


const blockClass = 'block'
const blockStartingPosition = 0
let blockCurrentPosition = 0 // This value will update as it moves



function createGrid() {
  for(let i = 0; i < gridHeight; i++) {
    const row = document.createElement('div')
    row.classList.add(`row`)
    // row.classList.add(`row-${i}`)
    row.dataset.row = `${i}`
    // row.style.width = '100%'
    // row.style.height = '10%'
    grid.appendChild(row)
    rows.push(row)

    for(let i = 0; i < gridWidth; i++) {
      //console.log(row)
      const cell = document.createElement('div')
      cell.classList.add('cell')
      // cell.classList.add(`cell-${i}`)
      cell.dataset.column = `${i}`
      // cell.style.width = '100%'
      // cell.style.height = '100%'
      row.appendChild(cell)
      cells.push(cell)
    }
  }
}

createGrid()

const tetrominoes = {
  Tee: {
    dimensions: [{rows: 0, cell: 1}, {rows: 1, cell: 0}, { rows: 1, cell: 1}, {rows: 1, cell: 2}]
  },
  LeftKink: {
    dimensions: [{rows: 0, cell: 1}, {rows: 1, cell: 1}, { rows: 2, cell: 1}, {rows: 2, cell: 0}]
  },
  RightKink: {
    dimensions: [{rows: 0, cell: 1}, {rows: 1, cell: 1}, { rows: 2, cell: 1}, {rows: 2, cell: 2}]
  },
  Square: {
    dimensions: [{rows: 0, cell: 0}, {rows: 0, cell: 1}, { rows: 1, cell: 0}, {rows: 1, cell: 1}]
  },
  LeftElbow: {
    dimensions: [{rows: 0, cell: 0}, {rows: 1, cell: 0}, { rows: 2, cell: 0}, {rows: 3, cell: 1}]
  },
  RightElbow: {
    dimensions: [{rows: 0, cell: 1}, {rows: 1, cell: 1}, { rows: 2, cell: 1}, {rows: 2, cell: 2}]
  },
  Bar: {
    dimensions: [{rows: 0, cell: 1}, {rows: 1, cell: 0}, { rows: 1, cell: 1}, {rows: 1, cell: 2}]
  }
}

console.log(tetrominoes.Tee.dimensions)

// rows.map(row => {
//     console.log(row[0].children)
// })


function generateTetrominoes() {
  // this function will generate a random Tetrominoe based on it's Dimmensions

  // console.log(rows)
  // console.log(cells)

  // console.log(rows[0])
  // console.log(cells[1])
  // console.log(rows[0])
}

// console.log(createTetrominoes())
// console.log(rows)
// console.log(cells)









// Testing block movement and barriers
function addBlock(blockPosition) {
  cells[blockPosition].classList.add(blockClass)
}

function removeBlock(blockPosition) {
  cells[blockPosition].classList.remove(blockClass)
}

function handleKeyPress(event) {
  // console.log(event.keyCode) - Log the key pressed

  const key = event.keyCode

  removeBlock(blockCurrentPosition)

  if(key === 39 && blockCurrentPosition % gridWidth !== gridWidth - 1) { // Move Right
    blockCurrentPosition++
  } else if(key === 37 && blockCurrentPosition % gridWidth !== 0) { // Move Left
    blockCurrentPosition--
  } else if(key === 38 && blockCurrentPosition >= gridWidth) { // Move Up
    blockCurrentPosition -= 10
  } else if(key === 40 && blockCurrentPosition + gridWidth <= gridWidth * gridHeight - 1) { // Move Down
    blockCurrentPosition += 10
  }

  addBlock(blockCurrentPosition)
}

document.addEventListener('keydown', handleKeyPress)