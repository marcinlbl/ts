function test(a:string[] | null) {
    if (a === null) {
        return 0;
    } else if (a.join('').length) {
        return 5;
    }
    return 4;
}

let color: string = 'blue';
let seven: number = 7;
