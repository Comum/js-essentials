// PRIMITIVE VALUES
console.log("PRIMITIVE TYPES");
console.log("\n");
console.log("\n");

const number = 200;
const NOT_A_NUMBER = NaN;
const string = "I am a string";
const boolean = true;
const symbol1 = Symbol("foo");
const symbol2 = Symbol("foo");
const undefinedValue = undefined;
const nullValue = null;
const bigInt = BigInt("0x1fffffffffffff");

console.log(`"${number}" will have type "${typeof number}"`);
console.log(`"${NOT_A_NUMBER}" will have type "${typeof NOT_A_NUMBER}"`);
console.log(
  `To check if a variable is a number we can use "isNaN(NaN)" that will return "${isNaN(
    NOT_A_NUMBER
  )}"`
);
console.log("\n");

console.log(`"${string}" will have type "${typeof string}"`);
console.log("\n");

console.log(`"${boolean}" will have type "${typeof boolean}"`);
console.log("\n");

console.log("A possible symbol can be:");
console.log(symbol1);
console.log(`and will have type "${typeof symbol1}"`);
console.log(
  `When comparing 2 symbols created as "Symbol("foo")" we will get "${
    symbol1 === symbol2
  }"`
);
console.log("\n");

console.log(`"${undefinedValue}" will have type "${typeof undefinedValue}"`);
console.log("\n");

console.log(`"${nullValue}" will have type "${typeof nullValue}"`);
console.log("\n");

console.log(`"${bigInt}" will have type "${typeof bigInt}"`);
console.log("\n");

console.log("COMPLEX TYPES");
console.log("\n");
console.log("\n");

const object = {
  prop1: 1,
  prop2: "two",
  prop3: {
    prop1: 1,
  },
};
function exampleFunction() {
  return "I am a function";
}

console.log(
  `The "${JSON.stringify(object)}" will have type "${typeof object}"`
);
console.log(
  `The object prop "${object.prop1}" will have type "${typeof object.prop1}"`
);
console.log(
  `The object prop "${object.prop2}" will have type "${typeof object.prop2}"`
);
console.log(
  `The object prop "${JSON.stringify(
    object.prop3
  )}" will have type "${typeof object.prop3}"`
);
console.log(
  `The object prop "${object.prop3.prop1}" will have type "${typeof object.prop3
    .prop1}"`
);
console.log("\n");

console.log("A possible function can be:");
console.log(exampleFunction);
console.log(`and will have type "${typeof exampleFunction}"`);
console.log("When executed:");
console.log(exampleFunction());
console.log(
  `and we can mix the type of the execution: "${typeof exampleFunction()}"`
);
console.log("\n");

