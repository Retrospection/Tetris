

class BaseBrick {
    constructor(position, grid) {
        this.grid = grid
        this.coordinates = []
        this.bBottom = false
        this.init(position)
    }
    init(position) {
        throw Error('init not implement!')
    }
    isBottom() {
        return this.bBottom
    }
        // 砖块移动
    move(direction) {
        this._moveBrick(this, direction)
    }

    _moveBrick (brick, direction) {
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
            let brickNewPosition = brickPrevPosition.map(coordinate => [coordinate[0] + 1, coordinate[1]]) 
    
            // 检查砖块是否到底
            if (brickNewPosition.filter(coordinate => coordinate[0] >= 20).length > 0) {
                brick.bBottom = true
                return
            }
    
            brick.coordinates.forEach( coordinate => {
    
                const row = coordinate[0]
                const column = coordinate[1]
                brick.grid.data[row][column] -= 1
    
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
                brick.bBottom = false
                brick.coordinates = brickNewPosition
            } else {
                brick.bBottom = true
                brick.coordinates = brickPrevPosition
                brick.grid.data = gridPrevState
            }
        } else if (direction === 'bottom') {
    
        } 
    }
}

class BrickI extends BaseBrick {

    init (position) {           //this.bBottom = false
        for (let i = 1; i <= 4; ++i) {
            this.coordinates.push([i, position])
        }
    
        this.coordinates.forEach((coordinate) => {
            const row = coordinate[0]
            const column = coordinate[1]
            this.grid.data[row][column] = 1
        })
    } 
    // 砖块旋转
    rotate() {

        // 以第二节点为旋转中心
        let rotateCenter = this.coordinates[1]
    }
}

class BrickJ extends BaseBrick {

    init(position) {
        this.coordinates.push([0, position])
        this.coordinates.push([1, position])
        this.coordinates.push([2, position])
        this.coordinates.push([2, position-1])
    }
}

class BrickL extends BaseBrick {

    init(position) {
        this.coordinates.push([0, position])
        this.coordinates.push([1, position])
        this.coordinates.push([2, position])
        this.coordinates.push([2, position+1])
    }
}

class BrickO extends BaseBrick {

    init(position) {
        this.coordinates.push([0, position])
        this.coordinates.push([0, position+1])
        this.coordinates.push([1, position])
        this.coordinates.push([1, position+1])
    }
}

class BrickS extends BaseBrick {

    init(position) {
        this.coordinates.push([0, position])
        this.coordinates.push([0, position+1])
        this.coordinates.push([1, position])
        this.coordinates.push([1, position-1])
    }
}

class BrickZ extends BaseBrick {

    init(position) {
        this.coordinates.push([0, position])
        this.coordinates.push([0, position-1])
        this.coordinates.push([1, position])
        this.coordinates.push([1, position+1])
    }
}

class BrickT extends BaseBrick {

    init(position) {
        this.coordinates.push([0, position])
        this.coordinates.push([0, position+1])
        this.coordinates.push([0, position-1])
        this.coordinates.push([1, position])
    }
}


class BrickFactory {
    static createBrick(type, position, grid) {
        switch (type) {
            case 0:
                return new BrickI(position, grid)
            case 1:
                return new BrickJ(position, grid)
            case 2:
                return new BrickL(position, grid)
            case 3:
                return new BrickO(position, grid)
            case 4:
                return new BrickS(position, grid)
            case 5:
                return new BrickT(position, grid)
            case 6:
                return new BrickZ(position, grid)
        }
    }
}


