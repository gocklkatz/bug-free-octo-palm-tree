// Basic types
let id: number = 5;
let company: string = "My company";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "Brad", true];
// Tuple Array
let employee: [number, string][];
employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

// Union
let pid: string | number = 22;

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction1.Up); // 1
console.log(Direction1[1]); // Up

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction2.Left); // Left

// Objects
type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
//let customerId = <number>cid;
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(1, 2));

// Void
function log(message: string | number): void {
  console.log(message);
}
log("Hello");
log(123);

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes

interface PersonInterface {
    id: number;
    name: string;
    register(): string;
  }

class Person implements PersonInterface {
  public id: number;
  public name: string;

  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  register() {
    return `${this.name} is now registered`;
  }
}
const brad = new Person(1, "Brad", 22);
console.log(brad.register());

// Subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, age: number, position: string) {
    super(id, name, age);
    this.position = position;
  }
}
const emp = new Employee(3, "Shawn", 30, "Developer");

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["Brad", "John", "Jill"]);