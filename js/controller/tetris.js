function Tetris () {
    this.model = new Grid()
    this.view = new CanvasView()
    this.view.delegate = this
    this.fps = 1
}

Tetris.prototype.init = function () {
    this.view.init()
    this.model.init()
}

// 游戏主循环
Tetris.prototype.run = function () {
    setInterval(() => {
        if(!this.model.isDead()) {
            this.view.refresh(this.model.data)
        }
        if (!this.model.isDead() && this.model.isBottom()) {
            this.model.generate()
        }
        if (!this.model.isDead() && !this.model.isBottom()) {
            this.model.moveDown()
        }
    }, 1000 / this.fps)
}

Tetris.prototype.onKeyDownHandler = function (event) {
    if (event.keyCode === 32) {
        this._onSpaceDownHandler()
    } else if (event.keyCode === 38) {
        this._onArrowUpDownHandler()
    } else if (event.keyCode === 40) {
        this._onArrowDownDownHandler()
    } else if (event.keyCode === 37) {
        this._onArrowLeftDownHandler()
    } else if (event.keyCode === 39) {
        this._onArrowRightDownHandler()
    }
}

// 空格
Tetris.prototype._onSpaceDownHandler = function () {
    this.run()
}

// 上
Tetris.prototype._onArrowUpDownHandler = function () {
    this.model.rorate()
}

// 下
Tetris.prototype._onArrowDownDownHandler = function () {
    this.model.toTheGround()
}

// 左
Tetris.prototype._onArrowLeftDownHandler = function () {
    this.model.moveLeft()
}

// 右
Tetris.prototype._onArrowRightDownHandler = function () {
    this.model.moveRight()
}

