function greet() {
  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
}

function birthday() {
  this.age += 1;
}

const person1 = {
  name: "Alice",
  age: 25,
  greet,
  birthday,
};

const person2 = {
  name: "Bob",
  age: 30,
  greet,
  birthday,
};

person1.greet();
person1.birthday();
person2.greet();
person2.birthday();

person1.greet();
person2.greet();
