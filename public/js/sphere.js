'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sphere = function () {
    function Sphere(elem) {
        var _this = this;

        _classCallCheck(this, Sphere);

        this.elem = elem;
        this.value = undefined;
        var exercise = elem.querySelector('.exercise');
        this.xdiff = parseInt(exercise.dataset.maxX) - parseInt(exercise.dataset.minX);
        this.ydiff = parseInt(exercise.dataset.maxY) - parseInt(exercise.dataset.minY);
        exercise.addEventListener('click', function (evt) {
            return _this.getCoordinates(evt);
        }, false);
    }

    _createClass(Sphere, [{
        key: 'getCoordinates',
        value: function getCoordinates(evt) {
            var x = evt.clientX;
            var limX = this.elem.querySelector('.exercise').offsetWidth;
            var y = evt.clientY;
            var limY = this.elem.querySelector('.exercise').offsetHeight;
            this.setValue([this.xdiff / limX * x, this.ydiff / limY * y]);
        }
    }, {
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

    return Sphere;
}();