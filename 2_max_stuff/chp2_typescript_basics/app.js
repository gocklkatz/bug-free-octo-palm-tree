//Function return types and void
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
var someValue; // undefined is a valid type in TypeScript
function returnUndefined() {
    return;
}
//Function types
//let combineValues: Function;
var combineValues;
combineValues = add;
//console.log(combineValues(8, 8));
//Function types and callbacks
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
//Unknown type
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
//userName = userInput; // This will throw an error, type any for userInput would work
if (typeof userInput === 'string') {
    userName = userInput;
}
//Never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
