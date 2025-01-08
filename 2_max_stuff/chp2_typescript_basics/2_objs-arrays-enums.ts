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

// for (const hobby of hobbies) {
//   console.log(hobby.toUpperCase());
// }

// Tuple types
let role: [number, string];
role = [2, "author"];

// Enums (our first custom type :))
//  Conventions: enum values are in uppercase
enum Role {
  ADMIN = 1,
  READ_ONLY,
  AUTHOR,
}
const user = {
  name: "Max",
  age: 30,
  role: Role.ADMIN,
};
// if (user.role === Role.ADMIN) {
//   console.log(`User ${user.name} has role ${Role[user.role]}`);
// }
//user.role -> 1
//Role[user.role] -> "ADMIN"

// Any type (avoid if possible!)
let favoriteActivities: any[];
favoriteActivities = ["Sports", 3];