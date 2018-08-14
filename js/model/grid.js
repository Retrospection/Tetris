function Grid() {

    // 存储俄罗斯方块方格
    this.data = []

    // 初始化数组
    for (let i = 0; i < 20; ++i) {
        let row = []
        for (let j = 0; j < 10; ++j) {
            row.push(0)
        }
        this.data.push(row)
    }

    // 当前可活动元素位置
    this.activeBlock = []

}


// 生成一个砖块
Grid.prototype.generate = function () {
    
}

// 刷新游戏状态
Grid.prototype.refresh = function () {
    
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

