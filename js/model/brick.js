function BrickI (position, grid) {
    this.grid = grid
    this.coordinate = []
    for (let i = 0; i < 4; ++i) {
        this.coordinate.push([position, i])
    }
}

// 砖块移动
BrickI.prototype.move = function (direction) {

    _moveBrick(this, direction)
    
   
}

function _moveBrick (brick, direction) {

    let originPosition = []

    // 将方块当前位置置 0
    for (let i = 0; i < brick.coordinate.length; ++i) {
        let x = brick.coordinate[i][0]
        let y = brick.coordinate[i][1]
        originPosition.push([x, y])
        brick.grid.data[x][y] = 0
    }
    
    let result
    // 将方块坐标根据方向进行变更
    if (direction === 'left') {
        // 检查是否有格子的值为2

        // 如果没有，则完成移动。 如果有则将方块位置回退。

        // 返回值 true 为完成移动，false 为已经不可朝该方向移动

    } else if (direction === 'right') {

    } else if (direction === 'down') {

    } else if (direction === 'bottom') {

    }

    return result
}