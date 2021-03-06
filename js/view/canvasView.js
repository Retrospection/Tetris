
class CanvasView {
    constructor () {
        this.canvas = document.getElementById('canvas')
        this.context = this.canvas.getContext('2d')
        this.delegate = undefined
    }

    init() {
        if (this.delegate !== undefined) {
            document.onkeydown = this.delegate.onKeyDownHandler.bind(this.delegate)
        }
    }

    refresh(grid) {
        // 清屏
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

        // 重绘画布
        for (let row = 0; row < grid.length; ++row) {
            for (let column = 0; column < grid[row].length; ++column) {
                if (grid[row][column] === 1) {
                    this._drawBrick([column, row])
                }         
            }
        }
    }

    _drawBrick(coordinate) {
        let x = coordinate[0]
        let y = coordinate[1]
        let drawX = 35 * x + 2
        let drawY = 35 * y + 2
        //console.log('draw at: ', drawX, drawY)
        this.context.fillRect(drawX, drawY, 30, 30)
    }
    
}
