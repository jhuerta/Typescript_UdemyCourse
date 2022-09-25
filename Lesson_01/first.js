"use strict";
exports.__esModule = true;
var element = document.getElementById("result");
console.log(element);
function myNewFunction(add1, add2) {
    return add1 + add2;
}
var addingTwoNumbers = myNewFunction(2, 5);
element.innerHTML = addingTwoNumbers.toString();
console.log(addingTwoNumbers);
var anumber;
anumber = 1;
var juan = {
    name: "Juan",
    age: 44
};
var car = {
    brand: "Juan",
    color: 44,
    features: ["mirro", "window", "door"]
};
var miguel = {
    name: "Miguel",
    age: 7
};
console.log(juan);
console.log(miguel);
var name;
name = "Juan";
name = 5;
var people = [];
var gente = [];
var gen = [];
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
var oddNumbers = 1;
var evenNumbers = "eight";
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
var suma = add;
console.log("suma(1, 2)");
console.log(suma(1, 2));
