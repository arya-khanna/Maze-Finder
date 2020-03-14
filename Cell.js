class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show(colour, w, h) {
    fill(colour)
    rect(this.x * w, this.y * h, w, h);
  }
}
