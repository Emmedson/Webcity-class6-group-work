let person = {
    name: "Emmanuel",
    age: 60,
    position: "TechLead",
}

for (let x in person)
console.log(x,", ", person[x])

let m = person.name;

if (person.name === "Emmanel"){
    console.log("Na you")
}
else if (person.name === "Emmanuel"){
   console.log("Good") 
}
