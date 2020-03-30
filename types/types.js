// PRIMITIVE VALUES

const number = 200;
const NOT_A_NUMBER = NaN;
const string = "I am a string";
const boolean = true;
const symbol1 = Symbol("foo");
const symbol2 = Symbol("foo");
const undefinedValue = undefined;
const nullValue = null;
const bigInt = BigInt("0x1fffffffffffff");

console.log(number);
console.log(typeof number); // number
console.log(NOT_A_NUMBER);
console.log(typeof NOT_A_NUMBER); // number
console.log(NOT_A_NUMBER === NOT_A_NUMBER); // false
console.log(isNaN(NOT_A_NUMBER)); // true

console.log(string);
console.log(typeof string); // string

console.log(boolean);
console.log(typeof boolean); // boolean

console.log(symbol1);
console.log(symbol2);
console.log(typeof symbol1); // symbol
console.log(symbol1 === symbol2); // false

console.log(undefinedValue);
console.log(typeof undefinedValue); // undefined

console.log(nullValue);
console.log(typeof nullValue); // object

console.log(bigInt);
console.log(typeof bigInt); // bigint

// Objects and functions

const object = {
  prop1: 1,
  prop2: "two",
  prop3: {
    prop1: 1
  }
};
function exampleFunction() {
  return "I am a function";
}

console.log(object);
console.log(typeof object); // object
console.log(typeof object.prop1); // number
console.log(typeof object.prop2); // string
console.log(typeof object.prop3); // object
console.log(typeof object.prop3.prop1); // number

console.log(exampleFunction); // function declaration
console.log(typeof exampleFunction); // function

console.log(exampleFunction()); // function execution
console.log(typeof exampleFunction()); // string
