// TBD
const DECREASE = 100;

class Clock {
    constructor (item, seconds, cb) {
        this.item = item
        this.callback = cb
        this.timer = seconds * 1000
    }

    start () {
        $(this.item).val(this.timer).attr('max', this.timer)
        this.objInterval = setInterval(() => {
            const regTime = $(this.item).val()
            console.log('countdown to ', regTime)
            if (regTime === 0) { return this.end() }
            $(this.item).val(regTime - DECREASE)
        }, DECREASE)
    }

    end () {
        this.objInterval && clearInterval(this.objInterval)
        this.callback()
    }
}
