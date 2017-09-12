interface Person {
    name: string;
    age: number;
    middleName?: string;
    address: Address;
}


interface Address {
    street: string;
    buildingNumber: string;
    zipCode: string;
    city: string;
}

let printUser = (user: Person) => {
    console.log(`${user.name} ma ${user.age} lat`);
}

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

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; 



import {ZipCodeValidator} from './validators';

let validator = new ZipCodeValidator();
validator.isAcceptable('00-120');

