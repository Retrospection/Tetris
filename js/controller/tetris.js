function Tetris () {
    this.grid = new Grid()
    this.canvasView = new CanvasView(document.getElementById('canvas'))
}

Tetris.prototype.init = function () {
   this.canvasView.refresh(this.grid.data)
}