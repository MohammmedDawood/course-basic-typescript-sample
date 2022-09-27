// Primitive: number | string | boolean | null | undefined | symbol
// Object: any | void | never | unknown | bigint
// Function types, parameters, and return types

// Function types
let age: number;
age = 12;
// age = "12"; // Error
let userName: string | string[];
userName = "Mohammed";
userName = ["Mohammed", "Ali"];
// userName = 12; // Error
let isStudent: boolean;
isStudent = true;
// isStudent = 12; // Error

// more complex types
let hobbies: string[];
hobbies = ["Sports", "Cooking"];
// hobbies = [100]; // Error

type Person = {
  // type alias
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Mohammed",
  age: 12,
};
// person = {
//     name: 12",  // Error
//     age: "12" // Error
//     isStudent: true // Error
// };

let people: Person[];
people = [
  {
    name: "Mohammed",
    age: 12,
  },
  {
    name: "Ahmed",
    age: 13,
  },
];

// Type inference
let course = "React - The Complete Guide";
// course = 123; // Error

// Union types
let course2: string | number = "React - The Complete Guide";
course2 = 123;

// Functions & types
function add(a: number, b: number) {
  return a + b;
}
console.log(add(2, 5));
// add(2, "5"); // Error
// add(2); // Error

function printOutput(value: any) {
  console.log(value);
}
printOutput(add(5, 2));

// Generics flexible types that can work over a variety of types rather than a single one
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
// updatedArray[0].split(" "); // Error
console.log(updatedArray);

const stringArray = insertAtBeginning(["a", "b", "c"], "d"); // ['d', 'a', 'b', 'c']
console.log(stringArray[0].split(" ")); // ['d']
console.log(stringArray);
