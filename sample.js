// const buttonA = document.querySelector("#button_A");
// const headingA = document.querySelector("#heading_A");

// function calc2 () {
//   let numbx = Number(document.getElementById("num4").value);
//   let numby = Number (document.getElementById("num5").value);
//   let operator = document.getElementById("operator").value;
//   // document.getElementById("result25").value = a + b;  

//   switch (operator) {
//     case 'add':
//       document.getElementById("result").value = numbx + numby;
//       break;  
//     case 'sub':
//       document.getElementById("result").value = numbx - numby;
//       break;
//     case 'mul':
//       document.getElementById("result").value = numbx * numby;
//       break;
// }
// }

// calc2();

//  let name = 'Laptop';  // variable

//  function greet (name) { // function
//     console.log('Hello ' + name);
// }


// let product = { // object
//   name: "laptop", // property
//   brand: "HP",
//   price: 1000,
//   discount: 10,
//   description: "This is a laptop",

//   greet: function (name) { // method
//     console.log('Hello ' + name);
//   }

// }

// console.log(product.brand);

// let cal34 = {
//   add: function (a, b) {
//     return a + b;
//   },

//   sub: function (a, b) {
//     return a - b; 
//   }
// }

// (cal34.add(4, 5));


// const tommy = document.querySelector("#tommy");
// // let num1 = prompt("Add the first number:");
// // let num2 = prompt("Add second number:");
// // let number1 = Number(num1);
// // let number2 = Number(num2);
// // let number = number1 + number2;
// // tommy.textContent = "This is a test";

// function addvalues() {
//   let a = Number(prompt("Add the first number:"));
//   let b = Number(prompt("Add the second number:"));
//   return a + b  + "good";
// }

// // tommy.textContent = addvalues();



// buttonA.onclick = () => {
//   let nmbx = prompt("Your name please?", "Emmanuel");
//   alert("Hello" + nmbx )
//   // tommy.textContent = `You're Welcome ${nmbx}`;
//   tommy.innerHTML = "You're Welcome" + "<br>" + "Your name is " + nmbx;

// };


// buttonA.onclick = () => {
//   const name = prompt("What is your name?");
//   alert(`Hello ${name}, nice to see you!`);
//   headingA.textContent = `Welcome ${name}`;
// };

// buttonA.onclick = () => {
//   const name = prompt("What is your name too?");
//   alert(`Hello ${name}, nice to see you!`);
//   headingA.textContent = `Welcome ${name}`;
// }

// let calculator = {

//   addition: function () {
//     let input = document.querySelector("#name").value;
//     let result = document.querySelector("#result").value;
//     result = input;

    
//   }

 
// }

// calculator.addition();


// function cal () {
//   let input1 = document.getElementById("numb1").value;
//   let input2 = document.getElementById("numb2").value;
//   let operation = document.getElementById("operator").value; 
 
//   if (operation == "add") {
//     document.getElementById("result").value = Number(input1) + Number(input2);
//   }
  
// }

// function add2 () {
//   let a = Number(document.getElementById("num4").value);
//   let b = Number (document.getElementById("num5").value);
//   document.getElementById("result25").value = a + b;  
// }


// For Loop

// for (declaration; condition; increment/decrement)
for (let i = 0; i <= 10; i++) 
  if (i % 2 !== 0) console.log(i);




// While Loop

let i = 10;
while (i < 4) {
  console.log(i);
  i++;
}

// Do While Loop
let x = 0;
do {
  console.log(i);
  x++;
} while (x < 4);

// For Each Loop
let arr = [1, 2, 3, 4, 5];
arr.forEach((element) => {
  console.log(element);
} );

// For In Loop - Used for objects
let obj = {
  name: "Emmanuel",
  age: 23,
};
for (let key in obj) {
  console.log(key, obj[key]);
}

// For Of Loop - Used for arrays
let colours = ["red", "green", "blue"];
for (let colour of colours) {
  console.log(colour);
}

// Break and Continue
let y = 0;
while (y <= 10) {
  if (y === 5) {
    break;
  }
  console.log(y);
  y++;
}

let a = 0;
while (a < 10){
  if (a % 2 === 0){
    a++
    continue;
  }
  console.log(a);
  a++;
}

// Return max number

function max (a, b){
  return (a > b) ? a : b;
}
console.log(max(14, 7));

// FizzBuzz Algorithem
  // Divisible by 3 = Fizz
  // Divisible by 5 = Buzz
  // Divisible by 3 and 5 = FizzBuzz
  // Not Divisible by 3 and 5 = Number
  // Not a Number = "Not a number"

  function FizzBuzz (numb){
    if (typeof numb !== 'number')
      return ("not a number")
    
    if (numb % 3 === 0 && numb % 5 === 0){
        return ("FizzBuzz")
      }
      
    if (numb % 3 === 0){
      return ("Fizz")
    }
    if (numb % 5 === 0){
      return ("Buzz")
    }

    return (numb) 
  }

  console.log(FizzBuzz(14));

  