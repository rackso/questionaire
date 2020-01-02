class Singler {
    constructor (elem) {
        this.elem = elem
        this.value = undefined
    }

    getValue () { return this.value }

    setValue (value) {
        console.log(value)
        this.value = value
    }
}