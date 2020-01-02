"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Singler = function () {
    function Singler(elem) {
        _classCallCheck(this, Singler);

        this.elem = elem;
        this.value = undefined;
    }

    _createClass(Singler, [{
        key: "getValue",
        value: function getValue() {
            return this.value;
        }
    }, {
        key: "setValue",
        value: function setValue(value) {
            console.log(value);
            this.value = value;
        }
    }]);

    return Singler;
}();