function sum(a, b) {
  return a + b;
}

let sum1 = (a, b) => a + b;

function isPositive(number) {
  return number >= 0;
}

let isPositive1 = number => number >= 0;

function randomNumber() {
  return Math.random;
}

let randomNumber1 = () => Math.random;

// document.addEventListener("click", function() {
//   console.log("Click");
// });

// document.addEventListener("click", () => console.log("Click"));

/////////////////////////////////////////////////////////////////

class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow:" + this.name);
    }, 100);
  }

  printNameFunction() {
    setTimeout(function() {
      console.log("Funtion:" + this.name);
    }, 100);
  }
}

let person = new Person("Bob");
person.printNameArrow();
person.printNameFunction();
console.log(this.name);
