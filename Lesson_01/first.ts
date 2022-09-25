var element = document.getElementById("result") as HTMLBaseElement;
console.log(element);

function myNewFunction(add1: number, add2: number) {
  return add1 + add2;
}

const addingTwoNumbers = myNewFunction(2, 5);

element.innerHTML = addingTwoNumbers.toString();

console.log(addingTwoNumbers);

let anumber: number;
anumber = 1;

type Person = {
  name: string;
  age: number;
};
const juan: Person = {
  name: "Juan",
  age: 44,
};

const car = {
  brand: "Juan",
  color: 44,
  features: ["mirro", "window", "door"],
};

const miguel: { name: string; age: number } = {
  name: "Miguel",
  age: 7,
};

console.log(juan);
console.log(miguel);

let name: string | number;
name = "Juan";
name = 5;

type numberOrString = string | number;
let people: numberOrString[] = [];
let gente: string | number[] = [];
let gen: (string | number)[] = [];

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

let oddNumbers: 1 | 3 | 5 | 7 = 1;
let evenNumbers: "two" | "four" | "six" | "eight" = "eight";

console.log(oddNumbers);
console.log(evenNumbers);

function multiply(n1: number, n2: number): number {
  return n1 * n2;
}

function logMessage(st: string, msg: string): void {
  console.log(msg + " : " + st);
}

function add(n1, n2) {
  return n1 + n2;
}
let suma: (a: number, b: number) => number;
suma = add;
console.log("suma(1, 2)");
console.log(suma(1, 2));

function notreturn(): never {
  throw{message:"Message"};
}

export {};
