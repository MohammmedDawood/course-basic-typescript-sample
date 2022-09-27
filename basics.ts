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
