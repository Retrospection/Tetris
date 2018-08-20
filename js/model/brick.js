

class BaseBrick {
    constructor(position) {
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

        } else if (direction === 'right') {
    
        } else if (direction === 'down') {
    
        } else if (direction === 'bottom') {
    
        } 
    }


}

class BrickI extends BaseBrick {
    init (position) {
        this.offset = [
            [[-1, 0], [0, 0], [1, 0], [2, 0]],
            [[0, 1], [0, 0], [0, -1], [0, -2]],
        ]
        this.state = 0
        const center = [2, position]  
        const offset = this.offset[this.state]
        for (let j = 0; j < offset.length; ++j) {
            this.coordinates.push([center[0]+offset[j][0], center[1]+offset[j][1]])
        }
    } 
    // 砖块旋转
    rotate() {
        
    }
}

class BrickJ extends BaseBrick {

    init(position) {
        this.offset = [
            [[-1, 0], [0, 0], [1, 0], [1, -1]],
            [[0, 1], [0, 0], [0, -1], [-1, -1]],
            [[1, 0], [0, 0], [-1, 0], [-1, 1]],
            [[0, -1], [0, 0], [0, 1], [1, 1]]
        ]
        this.state = 0
        const center = [2, position]  
        const offset = this.offset[this.state]
        for (let j = 0; j < offset.length; ++j) {
            this.coordinates.push([center[0]+offset[j][0], center[1]+offset[j][1]])
        }
    }
}

class BrickL extends BaseBrick {

    init(position) {
        this.offset = [
            [[-1, 0], [0, 0], [1, 0], [1, 1]],
            [[0, 1], [0, 0], [0, -1], [1, -1]],
            [[1, 0], [0, 0], [-1, 0], [-1, -1]],
            [[0, -1], [0, 0], [0, 1], [-1, 1]]
        ]
        this.state = 0
        const center = [2, position]  
        const offset = this.offset[this.state]
        for (let j = 0; j < offset.length; ++j) {
            this.coordinates.push([center[0]+offset[j][0], center[1]+offset[j][1]])
        }
    }
}

class BrickO extends BaseBrick {

    init(position) {
        this.offset = [
            [[0, -1], [0, 0], [1, 0], [-1, -1]],
        ]
        this.state = 0
        const center = [2, position]  
        const offset = this.offset[this.state]
        for (let j = 0; j < offset.length; ++j) {
            this.coordinates.push([center[0]+offset[j][0], center[1]+offset[j][1]])
        }
    }
}

class BrickS extends BaseBrick {

    init(position) {
        this.offset = [
            [[0, 1], [0, 0], [1, 0], [1, -1]],
            [[-1, 0], [0, 0], [0, 1], [1, 1]],
        ]
        this.state = 0
        const center = [2, position]  
        const offset = this.offset[this.state]
        for (let j = 0; j < offset.length; ++j) {
            this.coordinates.push([center[0]+offset[j][0], center[1]+offset[j][1]])
        }
    }
}

class BrickZ extends BaseBrick {

    init(position) {
        this.offset = [
            [[0, -1], [0, 0], [1, 0], [1, 1]],
            [[-1, 0], [0, 0], [0, -1], [1, -1]],
        ]
        this.state = 0
        const center = [2, position]  
        const offset = this.offset[this.state]
        for (let j = 0; j < offset.length; ++j) {
            this.coordinates.push([center[0]+offset[j][0], center[1]+offset[j][1]])
        }
    }
}

class BrickT extends BaseBrick {

    init(position) {
        this.offset = [
            [[0, -1], [0, 0], [0, 1], [1, 0]],
            [[-1, 0], [0, 0], [1, 0], [0, -1]],
            [[0, 1], [0, 0], [0, -1], [-1, 0]],
            [[1, 0], [0, 0], [-1, 0], [0, 1]],
        ]
        this.state = 0
        const center = [2, position]  
        const offset = this.offset[this.state]
        for (let j = 0; j < offset.length; ++j) {
            this.coordinates.push([center[0]+offset[j][0], center[1]+offset[j][1]])
        }
        this.coordinates.forEach((coordinate) => {
            const row = coordinate[0]
            const column = coordinate[1]
            this.grid.data[row][column] = 1
        })
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


