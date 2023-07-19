const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");


const tommy = document.querySelector("#tommy");
// let num1 = prompt("Add the first number:");
// let num2 = prompt("Add second number:");
// let number1 = Number(num1);
// let number2 = Number(num2);
// let number = number1 + number2;
// tommy.textContent = "This is a test";

function addvalues() {
  let a = Number(prompt("Add the first number:"));
  let b = Number(prompt("Add the second number:"));
  return a + b  + "good";
}

// tommy.textContent = addvalues();



buttonA.onclick = () => {
  let nmbx = prompt("Your name please?", "Emmanuel");
  alert("Hello" + nmbx )
  // tommy.textContent = `You're Welcome ${nmbx}`;
  tommy.innerHTML = "You're Welcome" + "<br>" + "Your name is " + nmbx;

};


// buttonA.onclick = () => {
//   const name = prompt("What is your name?");
//   alert(`Hello ${name}, nice to see you!`);
//   headingA.textContent = `Welcome ${name}`;
// };

// buttonA.onclick = () => {
//   const name = prompt("What is your name?");
//   alert(`Hello ${name}, nice to see you!`);
//   headingA.textContent = `Welcome ${name}`;
// }

