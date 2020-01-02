class Lineal {
    constructor (elem) {
        this.elem = elem
        this.value = undefined
        const exercise = elem.querySelector('.exercise')
        this.diff = parseInt(exercise.dataset.max) - parseInt(exercise.dataset.min)
        exercise.addEventListener('click', (evt) => this.getCoordinates(evt), false)
    }

    getCoordinates (evt) {
        const x = evt.clientX
        const lim = this.elem.querySelector('.exercise').offsetWidth
        this.setValue((this.diff/lim) * x)
    }

    getValue () { return this.value }

    setValue (value) {
        this.value = value
    }
}