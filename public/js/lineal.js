'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lineal = function () {
    function Lineal(elem) {
        var _this = this;

        _classCallCheck(this, Lineal);

        this.elem = elem;
        this.value = undefined;
        var exercise = elem.querySelector('.exercise');
        this.diff = parseInt(exercise.dataset.max) - parseInt(exercise.dataset.min);
        exercise.addEventListener('click', function (evt) {
            return _this.getCoordinates(evt);
        }, false);
    }

    _createClass(Lineal, [{
        key: 'getCoordinates',
        value: function getCoordinates(evt) {
            var x = evt.clientX;
            var lim = this.elem.querySelector('.exercise').offsetWidth;
            this.setValue(this.diff / lim * x);
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.value;
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            this.value = value;
        }
    }]);

    return Lineal;
}();