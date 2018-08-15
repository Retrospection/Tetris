function Tetris () {
    this.model = new Grid()
    this.view = new CanvasView()
    this.view.delegate = this
    this.bRunning = false
    this.fps = 1
}

Tetris.prototype.init = function () {
    this.view.init()
    this.model.init()
}

// 游戏主循环
Tetris.prototype.run = function () {
    let alive = true
    while (this.bRunning && alive) {
        alive = this.model.tick()
        this.view.refresh(this.model.data)
    }
    this.bRunning = false
}

Tetris.prototype.onKeyDownHandler = function (event) {
    if (event.keyCode === 32) {
        this._onSpaceDownHandler(event)
    } else if (event.keyCode === 38) {
        this._onArrowUpDownHandler(event)
    } else if (event.keyCode === 40) {
        this._onArrowDownDownHandler(event)
    } else if (event.keyCode === 37) {
        this._onArrowLeftDownHandler(event)
    } else if (event.keyCode === 39) {
        this._onArrowRightDownHandler(event)
    }
}

// 空格
Tetris.prototype._onSpaceDownHandler = function (event) {
    if (!this.bRunning) {
        this.bRunning = true
    }
}

// 上
Tetris.prototype._onArrowUpDownHandler = function (event) {
    
}

// 下
Tetris.prototype._onArrowDownDownHandler = function (event) {
    
}

// 左
Tetris.prototype._onArrowLeftDownHandler = function (event) {
    
}

// 右
Tetris.prototype._onArrowRightDownHandler = function (event) {
    
}

