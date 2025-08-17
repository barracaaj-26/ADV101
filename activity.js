var myName = "AJ C. Barraca"; // #1
console.log("Name:", myName);

let myAge = "19"; // #2
console.log("Age (string):", myAge);

const PI = 3.1416; // #3
console.log("PI:", PI);

let isStudent = Number(myAge) < 25; // 4
console.log("Is Student:", isStudent);

let person = { // #5
    name: myName,
    age: myAge,
    address: {
        street: "Brgy. Mambago-B",
        city: "Island Garden City of Samal",
        country: "Philippines"
    },
    hobbies: ["Volleyball", "Watching movies", "Dancing"]
};
console.log("Person Object:", person);

let colors = ["red", "blue", "green", "yellow", "blue"]; // #6
console.log("Colors Array:", colors); 
