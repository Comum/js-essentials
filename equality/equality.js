const dwarves = 7;
const continents = "7";
const worldWonders = 3 + 4;

// Same value equality

console.log(Object.is(dwarves, continents)); // false
console.log(Object.is(dwarves, worldWonders)); // true
console.log(Object.is(continents, worldWonders)); // false

// Strickly equals

console.log(2 === 2); // true
console.log(2 === "2"); // false

console.log("banana" === "banana"); // true

console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

console.log(-0 === 0); // true
console.log(0 === -0); // true
console.log(Object.is(-0, 0)); // false
console.log(Object.is(0, -0)); // false

// Loose equality

console.log(2 == 2); // true
console.log(2 == "2"); // true
console.log(NaN == NaN); // false
