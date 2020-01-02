class Sorter {
    constructor (elem) {
        this.elem = elem
        this.value = undefined
        const sortable = elem.querySelectorAll('ul')
        $(sortable).sortable()
        $(sortable).disableSelection()
    }

    getValue () { return this.value }

    setValue (value) {
        console.log(value)
        this.value = value
    }
}