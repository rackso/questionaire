class Sphere {
    constructor (elem) {
        this.elem = elem
        this.value = undefined
        const exercise = elem.querySelector('.exercise')
        this.xdiff = parseInt(exercise.dataset.maxX) - parseInt(exercise.dataset.minX)
        this.ydiff = parseInt(exercise.dataset.maxY) - parseInt(exercise.dataset.minY)
        exercise.addEventListener('click', (evt) => this.getCoordinates(evt), false)
    }

    getCoordinates (evt) {
        const x = evt.clientX
        const limX = this.elem.querySelector('.exercise').offsetWidth
        const y = evt.clientY
        const limY = this.elem.querySelector('.exercise').offsetHeight
        this.setValue([
            (this.xdiff/limX) * x,
            (this.ydiff/limY) * y
        ])
    }

    getValue () { return this.value }

    setValue (value) {
        console.log(value)
        this.value = value
    }
}