"use strict";
//Boolean
var isDone = false;
//Number
var six = 6;
//String
var firstname = 'Jan';
var mixed = firstname + " Kowalski " + six;
//Array
var list = [1, 2, 3];
var list2 = [34, 3434, 3];
//Tuple
var x;
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//Any
var notSure = 4;
//Void
function warnUser() {
    alert("This is my warning message");
}
//Undefined
var u = undefined;
//Null
var n = null;
//Never
function error(message) {
    throw new Error(message);
}
