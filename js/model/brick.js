function BrickI (position, grid) {
    this.grid = grid
    this.coordinates = []
    this.bBottom = false
    for (let i = 0; i < 4; ++i) {
        this.coordinates.push([i, position])
    }
    this.coordinates.forEach((coordinate) => {
        const row = coordinate[0]
        const column = coordinate[1]
        this.grid.data[row][column] = 1
    })
}

BrickI.prototype.isBottom = function () {
    return this.bBottom
}

// 砖块移动
BrickI.prototype.move = function (direction) {
    _moveBrick(this, direction)
}

// 砖块旋转
BrickI.prototype.rotate = function () {

}

function _moveBrick (brick, direction) {

    if (this.bBottom) {
        return
    }
    if (direction === 'left') {

        // 砖块原始位置
        let brickPrevPosition = JSON.parse(JSON.stringify(brick.coordinates))

        // grid原始状态
        let gridPrevState = JSON.parse(JSON.stringify(brick.grid.data))

        // 砖块新位置
        let brickNewPosition = brickPrevPosition.map( coordinate => [coordinate[0], coordinate[1] - 1  >= 0 ? coordinate[1] - 1 : coordinate[1]] )

        // 从砖块当前位置将砖块拿起，并移动到新的位置
        brick.coordinates.forEach( coordinate => {
            
            const row = coordinate[0]
            const column = coordinate[1]
            console.log('row: ', row, 'colmun: ', column)
            brick.grid.data[row][column] = 0

            const newRow = row
            const newColumn = column - 1 >= 0 ? column - 1 : column
            brick.grid.data[newRow][newColumn] += 1
        })

        console.log('new grid: ')
        brick.grid.print()

        let bChangeState = true
        for (let row = 0; row < brick.grid.data.length; ++row) {
            for (let column = 0; column < brick.grid.data[row].length; ++column) {
                if (brick.grid.data[row][column] > 1) {
                    bChangeState = false
                }
            }
        }
        if (bChangeState) {
            brick.coordinates = brickNewPosition
        } else {
            brick.coordinates = brickPrevPosition
            brick.grid.data = gridPrevState
        }
    } else if (direction === 'right') {

        // 砖块原始位置
        let brickPrevPosition = JSON.parse(JSON.stringify(brick.coordinates))

        // grid原始状态
        let gridPrevState = JSON.parse(JSON.stringify(brick.grid.data))

        // 砖块新位置
        let brickNewPosition = brickPrevPosition.map( coordinate => [coordinate[0], coordinate[1] + 1  < 10 ? coordinate[1] + 1 : coordinate[1]])

        // 从砖块当前位置将砖块拿起，并移动到新的位置
        brick.coordinates.forEach( coordinate => {
            
            const row = coordinate[0]
            const column = coordinate[1]
            console.log('row: ', row, 'colmun: ', column)
            brick.grid.data[row][column] = 0

            const newRow = row
            const newColumn = column + 1 < 10 ? column + 1 : column
            brick.grid.data[newRow][newColumn] += 1
        })

        console.log('new grid: ')
        brick.grid.print()


        let bChangeState = true
        for (let row = 0; row < brick.grid.data.length; ++row) {
            for (let column = 0; column < brick.grid.data[row].length; ++column) {
                if (brick.grid.data[row][column] > 1) {
                    bChangeState = false
                }
            }
        }

        if (bChangeState) {
            brick.coordinates = brickNewPosition
        } else {
            brick.coordinates = brickPrevPosition
            brick.grid.data = gridPrevState
        }

    } else if (direction === 'down') {

        // 砖块原始位置
        let brickPrevPosition = JSON.parse(JSON.stringify(brick.coordinates))

        // grid原始状态
        let gridPrevState = JSON.parse(JSON.stringify(brick.grid.data))

        // 砖块新位置
        let brickNewPosition = brickNewPosition.map(coordinate => [coordinate[0] + 1, coordinate[1]]) 

        // 检查砖块是否到底
        if (brickNewPosition.filter(coordinate => coordinate[0] > 20).length > 0) {
            this.bBottom = true
            return
        }

        brick.coordinate.forEach( coordinate => {

            const row = coordinate[0]
            const column = coordinate[1]
            brick.grid.data[row][column] = 0

            const newRow = row + 1
            const newColumn = column
            brick.grid.data[newRow][newColumn] += 1
        })

        console.log('new grid: ')
        brick.grid.print()

        let bChangeState = true
        for (let row = 0; row < brick.grid.data.length; ++row) {
            for (let column = 0; column < brick.grid.data[row].length; ++column) {
                if (brick.grid.data[row][column] > 1) {
                    bChangeState = false
                }
            }
        }
        if (bChangeState) {
            brick.coordinates = brickNewPosition
        } else {
            brick.coordinates = brickPrevPosition
            brick.grid.data = gridPrevState
        }
    } else if (direction === 'bottom') {

    }
    
}