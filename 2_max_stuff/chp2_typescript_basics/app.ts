//Function return types and void
function add(n1: number, n2: number): number {
    return n1 + n2;
}
function printResult(num: number): void {
    console.log('Result: ' + num);
}
let someValue: undefined; // undefined is a valid type in TypeScript
function returnUndefined(): undefined {
    return;
}

//Function types
//let combineValues: Function;
let combineValues: (a: number, b: number) => number;
combineValues = add;
//console.log(combineValues(8, 8));

//Function types and callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});

//Unknown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
//userName = userInput; // This will throw an error, type any for userInput would work
if (typeof userInput === 'string') {
    userName = userInput;
}

//Never type
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}