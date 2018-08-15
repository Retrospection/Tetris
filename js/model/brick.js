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
    brick.coordinate.forEach(function (coordinate) {
        let x = coordinate[0]
        let y = coordinate[1]
        originPosition.push([x, y])
        brick.grid.data[x][y] = 0
    })
    
    let result

    // 将方块坐标根据方向进行变更
    if (direction === 'left') {

        // 获得砖块的新位置
        let newPosition = originPosition.map(function (coordinate) {
            if (coordinate[0] - 1 < 0) {
                return coordinate
            }
            return [coordinate[0] - 1, coordinate[1]]
        })
        
        // 计算应用新位置的时候，grid的值
        newPosition.forEach(function (coordinate) {
            let x = coordinate[0]
            let y = coordinate[1]
            brick.grid[x][y] += 1
        })

        // 检查grid中是否出现大于1的格子
        let valueGreaterThanTwo
        for (let row = 0; row < brick.grid.length; ++row) {
            valueGreaterThanTwo = brick.grid[row].filter(function (value) {
                return value > 1
            })
        }
        
        if (valueGreaterThanTwo.length > 0) {
            // rollback
            newPosition.forEach(function (coordinate) {
                let x = coordinate[0]
                let y = coordinate[1]
                brick.grid[x][y] -= 1
            })
            orientation.forEach(function (coordinate) {
                let x = coordinate[0]
                let y = coordinate[1]
                brick.grid[x][y] += 1
            })
            result = false
        }
        result = true
        
    } else if (direction === 'right') {

    } else if (direction === 'down') {

    } else if (direction === 'bottom') {

    }
    return result
}