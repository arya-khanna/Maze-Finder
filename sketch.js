let rows = 20;
let columns = 20;
let grid = new Array(rows);
let cellWidth;
let cellHeight;


function setup() {
  createCanvas(500,500);
  background(51)
  cellWidth = width / rows;
  cellHeight = height / rows;
  init_grid(rows, columns);
  show_grid()
}

function draw() {
  
}



function init_grid(rows, columns) {
  for (let i = 0; i < rows; i ++) {
    grid[i] = new Array(columns);
    for (let j = 0; j < columns; j ++) {
      grid[i][j] = new Cell(i,j)
    }
  }
}

  // visualise grid
function show_grid() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j ++) {
      grid[i][j].show(255, cellWidth, cellHeight);
    }
  }
}
