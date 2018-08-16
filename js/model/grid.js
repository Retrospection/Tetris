function Grid () {
    // 存储俄罗斯方块方格
    this.data = []

    // 当前可活动元素位置
    this.activeBrick = undefined

    // 初始化
    this.bInit = false
}


// -------------------------------------- 游戏状态逻辑 ---------------------------------

Grid.prototype.init = function () {
    
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

    this.bInit = true
}


// 判断当前游戏是否结束
Grid.prototype.isDead = function () {
    let bDead = false

    for (let i = 0; i < this.data[0].length; ++i) {
        if (this.data[0][i] > 0) {
            bDead = true
        }
    }

    return this.bInit && bDead
}

// 检查并返回当前可以移除的行数
Grid.prototype.examine = function () {

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

Grid.prototype.remove = function (numOfRows) {

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
Grid.prototype.generate = function () {
    this.activeBrick = new BrickI(4, this)
    this.print()
}

// 判断当前砖块是否到底
Grid.prototype.isBottom = function () {
    return this.activeBrick.isBottom()
}

Grid.prototype.toTheGround = function () {
    this.activeBrick.move('bottom')
}

Grid.prototype.rotate = function () {
    this.activeBrick.rotate()
}

Grid.prototype.moveDown = function () {
    this.activeBrick.move('down')
}

Grid.prototype.moveLeft = function () {
    this.activeBrick.move('left')
}

Grid.prototype.moveRight = function () {
    this.activeBrick.move('right')
}

// ------------------------------------- debug ------------------------------------

// 用来调试的函数，可以输出当前model中存储情况
Grid.prototype.print = function () {
    let result = ""
    for (let row = 0; row < this.data.length; ++row) {
        for (let column = 0; column < this.data[row].length; ++column) {
            result += this.data[row][column] + " "
        }
        result += "\n"
    }
    console.log(result)
}


