
class Grid {
    constructor() {
        // 存储俄罗斯方块方格
        this.data = []

        // 当前可活动元素位置
        this.activeBrick = undefined

        // 初始化
        this.bInit = false

        this.bDead = false
    }

    // -------------------------------------- 游戏状态逻辑 ---------------------------------
    init() {
        // 防止重复初始化
        if (this.bInit) {
            return
        }

        // 初始化数组
        for (let i = 0; i < 20; ++i) {
            let row = []
            for (let j = 0; j < 10; ++j) {
                row.push(0)
            }
            this.data.push(row)
        }
        this.generate()
        this.bInit = true
    }

    isDead() {
        for (let i = 0; i < this.data[0].length; ++i) {
            if (this.data[0][i] > 0) {
                this.bDead = true
            }
        }
        return this.bInit && this.bDead
    }
    
    examine() {
        let rowsCanRemove = 0
        for (let row = 0; row < this.data.length; ++row) {
            let filteredRow = this.data[row].filter(function (item) {
                return item === 0
            })
            if (filteredRow.length === 0) {
                ++rowsCanRemove
            }
        }
        return rowsCanRemove
    }

    remove(numOfRows) {
        // 由于处于 data 数组末尾的为底层，处于 data 数组首部的为高层，只需要弹出尾部，并在首部添加即可
        for (let i = 0; i < numOfRows; ++i) {
            this.data.pop()
            let temp = []
            for (let j = 0; j < 10; ++j) {
                temp.push(0)
            }
            this.data.unshift(temp)
        }
    }

    // ---------------------------------- 砖块控制逻辑 ---------------------------------
    // 生成一个砖块
    generate() {
        this.activeBrick = new BrickI(4, this)
        this.print()
    }

    isBottom() {
        return this.activeBrick.isBottom()
    }

    toTheGround() {
        this.activeBrick.move('bottom')
    }

    rotate() {
        this.activeBrick.rotate()
    }
    
    moveDown() {
        this.activeBrick.move('down')
    }
    
    moveLeft() {
        this.activeBrick.move('left')
    }
    
    moveRight() {
        this.activeBrick.move('right')
    }
    // ------------------------------------- debug ------------------------------------

    // 用来调试的函数，可以输出当前model中存储情况
    print() {
        let result = ""
        for (let row = 0; row < this.data.length; ++row) {
            for (let column = 0; column < this.data[row].length; ++column) {
                result += this.data[row][column] + " "
            }
            result += "\n"
        }
        console.log(result)
    }
}


