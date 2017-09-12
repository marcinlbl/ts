"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var printUser = function (user) {
    console.log(user.name + " ma " + user.age + " lat");
};
printUser({
    name: 'Jan',
    age: 23,
    address: {
        street: 'Jana Pawła',
        buildingNumber: '24',
        zipCode: '001232',
        city: 'Warszawa'
    }
});
var p1 = { x: 10, y: 20 };
p1.x = 5;
var validators_1 = require("./validators");
var validator = new validators_1.ZipCodeValidator();
validator.isAcceptable('00-120');
