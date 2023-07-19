let staffname = "Jame Bond";
let figure = 7;

console.log(typeof (figure));

let state = true;

console.log(typeof state);


Boolean (5 < 6 ); // true
Boolean (5 > 6 ); // false

// Working with string //

let firstName = "John";
let lastName = "Doe";

let salary = 10.90;
let bonus = 20;


console.log("Welcome" + " " + firstName + " " + lastName );

console.log("Hello John! \n \t \"I will not accept the brake\" ")

console.log(bonus + salary); //addition
console.log(firstName + lastName); //concatenation

salary =++ salary;

console.log (salary);

//working with object//
let person = {
    namex: "Elias",
    age: 30,
}

// console.log(person.namex);
// console.log(person.age);
// console.log(person["namex"]);
// console.log(person["age"]);

// Working with array //
let students = ["Elias", "John", "Doe", "Jane", "Doe"];
console.log(students);
console.log(students.length);
students[10] = "James";
console.log(students);
console.log(students.length);

let valuex = 4;

valuex -= 2;

console.log(valuex);

let y;

// Object //
// Array //
// Function //

let person2 = {
    name: "Elias",
    age: 30,
    address: "82 Main Street",
    email: "emmanuel@webcity.com.ng",
}

console.log(person2.age); // dot notation object reference
// console.log(person2["email"]); // bracket notation object reference


let students2 = ["Abigial", "Emeka", "Christ"];

let product = {pname:"Shoe",
 price: 100, size: 10.5, color: "black", type: "Leather" };
// console.log(students2[0]); // dot notation array reference
// students2[10] = "James";
console.log(students2[2]);
students2.push("James", "John", "Doe", "Jane");

console.log(students2);

// students2.pop(7-2);

let students3 = ["Abigial", "Emeka", "Christ", "James", "John", "Doe", "Jane"];

console.log(students2.slice(2, 5));

// students2.pop();

// console.log(students2);
// students2.pop();

// console.log(students2);