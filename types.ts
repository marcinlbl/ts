
//Boolean
let isDone: boolean = false;

//Number
let six: number = 6;

//String
let firstname: string = 'Jan';
let mixed: string = `${firstname} Kowalski ${six}`;

//Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [34,3434,3];


//Tuple
let x: [string, number];

//Enum
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;


//Any
let notSure: any = 4;

//Void
function warnUser(): void {
    alert("This is my warning message");
}

//Undefined
let u: undefined = undefined;

//Null
let n: null = null;

//Never
function error(message: string): never {
    throw new Error(message);
}

