class Dnd {
    constructor (elem) {
        this.elem = elem
        this.value = undefined
        const draggable = elem.querySelectorAll('.draggable')
        $(draggable).each((idx, elem) => { $(elem).draggable() })
        const droppable = elem.querySelectorAll('.droppable')
        $(droppable).each((idx, elem) => { $(elem).droppable({
            drop: (evt, ui) => { debugger },
            over: () => {},
            out: (evt, ui) => {}
        }) })
    }

    getValue () { return this.value }

    setValue (value) {
        console.log(value)
        this.value = value
    }
}