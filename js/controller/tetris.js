
class Tetris {
    constructor() {
        this.model = new Grid()
        this.view = new CanvasView()
        this.view.delegate = this
        this.fps = 10
    }

    init() {
        this.view.init()
        this.model.init()
    }

    run() {
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

    onKeyDownHandler(event) {
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

    _onSpaceDownHandler() {
        this.run()
    }

    _onArrowUpDownHandler() {
        this.model.rorate()
    }

    _onArrowDownDownHandler() {
        this.model.toTheGround()
    }

    _onArrowLeftDownHandler() {
        this.model.moveLeft()
    }
    
    _onArrowRightDownHandler() {
        this.model.moveRight()
    }

}


