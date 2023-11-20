/*
  * Filename: ComplexApplication.js
  * Description: A sophisticated and creative JavaScript code that showcases various concepts and functionality.
  */

// Classes
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

class Administrator extends User {
  constructor(name, age, department) {
    super(name, age);
    this.department = department;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}, an administrator from the ${this.department} department.`);
  }
}

// Objects
const user1 = new User("John", 25);
const admin1 = new Administrator("Alice", 30, "HR");

// Arrays
const numbers = [1, 2, 3, 4, 5];

// Functions
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

// Higher-order functions
const sum = numbers.reduce((acc, val) => acc + val, 0);

const squaredNumbers = numbers.map(num => num * num);

const evenNumbers = numbers.filter(num => num % 2 === 0);

// Promises
function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async task completed.");
    }, 2000);
  });
}

asyncFunction()
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Event listeners
document.getElementById("button").addEventListener("click", () => {
  console.log("Button clicked!");
});

// DOM manipulation
document.getElementById("title").innerHTML = "Complex Application";

// Callback example
function callbackExample(callback) {
  console.log("Executing callbackExample function...");
  setTimeout(() => {
    callback();
  }, 1000);
}

callbackExample(() => {
  console.log("Callback executed!");
});

// Modules
// Calculator module
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

export default calculator;

// Code execution
user1.greet();
admin1.greet();
console.log(add(5, 3));
console.log(multiply(4, 6));
forEach(numbers, num => console.log(num));
console.log(sum);
console.log(squaredNumbers);
console.log(evenNumbers);