// Union types
function combine(input1: number | string, input2: number | string) {
  let result: number | string;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
const combinedAges = combine(30, 26);
const combinedNames = combine("Max", "Anna");

// Literal types
let resultConversion: "as-number" | "as-text";
resultConversion = "as-number";
resultConversion = "as-text";
// resultConversion = 'as-anything'; // Error

// Type aliases - Custom types
type Combinable = number | string;
let aCombinable: Combinable = 30;

type Car = {
  brand: string;
  model: string;
  year: number;
};
let myCar: Car = {
  brand: "Ford",
  model: "Mustang",
  year: 1969,
};
