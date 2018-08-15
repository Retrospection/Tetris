function CanvasView ($canvas) {
    this.canvas = $canvas
    this.context = this.canvas.getContext('2d');
}

CanvasView.prototype.refresh = function (grid) {
    for (let row = 0; row < grid.length; ++row) {
        for (let column = 0; column < grid[row].length; ++column) {
            if (grid[row][column] === 1) {
                this._drawBrick([column, row])
            }         
        }
    }
}

CanvasView.prototype._drawBrick = function (coordinate) {
    let x = coordinate[0]
    let y = coordinate[1]
    let drawX = 35 * x + 2
    let drawY = 35 * y + 2
    console.log('draw at: ', drawX, drawY)
    this.context.fillRect(drawX, drawY, 30, 30)
}