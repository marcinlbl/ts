"use strict";
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.setTime(new Date());
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
