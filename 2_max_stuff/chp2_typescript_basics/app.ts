// Object types

// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
  name: "Max",
  age: 30,
};

//console.log(person.name);

// Array types
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

for (const hobby of hobbies) {
  console.log(hobby.toUpperCase());
}

let favoriteActivities: any[];
favoriteActivities = ["Sports", 3];