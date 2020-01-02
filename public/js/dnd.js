'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dnd = function () {
    function Dnd(elem) {
        _classCallCheck(this, Dnd);

        this.elem = elem;
        this.value = undefined;
        var draggable = elem.querySelectorAll('.draggable');
        $(draggable).each(function (idx, elem) {
            $(elem).draggable();
        });
        var droppable = elem.querySelectorAll('.droppable');
        $(droppable).each(function (idx, elem) {
            $(elem).droppable({
                drop: function drop(evt, ui) {
                    debugger;
                },
                over: function over() {},
                out: function out(evt, ui) {}
            });
        });
    }

    _createClass(Dnd, [{
        key: 'getValue',
        value: function getValue() {
            return this.value;
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            console.log(value);
            this.value = value;
        }
    }]);

    return Dnd;
}();