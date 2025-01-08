//console.log('Your code goes here...');

// Core Types
//   number 1, 5.3, -10
//   string 'hi', "hi", `hi`
//   boolean true, false

// JavaScript uses "dynamic types"(resolved at runtime)
// TypeScript uses "static types"(set during development)

// TypeScript Core Types
//   number, string, boolean <- lowercase!
//   object, Array, Tuple, Enum

function add(n1: number, n2: number, printResult: boolean): number | void {
  if (printResult) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}

// Type inference
//   Is the ability of the TypeScript compiler to automatically 
//   determine the type of a variable based on its value.
const number1 = 5;
const number2 = 2.8;
const printResult = false;
const aString = 'Hello';

const result = add(number1, number2, printResult);
console.log(result);
