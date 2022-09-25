"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var element = document.getElementById("result");
console.log(element);
function myNewFunction(add1, add2) {
    return add1 + add2;
}
const addingTwoNumbers = myNewFunction(2, 5);
element.innerHTML = addingTwoNumbers.toString();
console.log(addingTwoNumbers);
let anumber;
anumber = 1;
const juan = {
    name: "Juan",
    age: 44,
};
const car = {
    brand: "Juan",
    color: 44,
    features: ["mirro", "window", "door"],
};
const miguel = {
    name: "Miguel",
    age: 7,
};
console.log(juan);
console.log(miguel);
let name;
name = "Juan";
name = 5;
let people = [];
let gente = [];
let gen = [];
people.push("one");
people.push(1);
gen.push("one");
gen.push(1);
console.log(gen);
console.log(people);
console.log("------------------------------");
console.log(parseFloat("5.8"));
console.log(parseInt("5.8"));
console.log("------------------------------");
let oddNumbers = 1;
let evenNumbers = "eight";
console.log(oddNumbers);
console.log(evenNumbers);
function multiply(n1, n2) {
    return n1 * n2;
}
function logMessage(st, msg) {
    console.log(msg + " : " + st);
}
function add(n1, n2) {
    return n1 + n2;
}
let suma;
suma = add;
console.log("suma(1, 2)");
console.log(suma(1, 2));
function notreturn() {
    throw { message: "Message" };
}
