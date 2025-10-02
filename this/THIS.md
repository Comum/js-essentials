[Home](../README.md) > This Keyword

# This Keyword

The `this` keyword refers to the object that the current function is being called on. It is a common way to refer to the current object when working object-oriented code. For example, in the following code:

```
function someFunction() {
  console.log(this);
}
```

if `someFunction` is called on an object named `myObject`, `this` will refer to `myObject` withing the body of the function.

```
const myObject = {
  someProperty: "Hello world!",
  someMethod: someFunction,
};

myObject.someMethod();
```

The value of `this` can change depending on how a function is called, and it can sometimes be difficult to determine the value of `this` in a given context. To avoid confusion many developers chose to assign the value of `this` to a local variable at the beginning of a function, and then use the local variable instead of `this` throughout the rest of the function. This can make the code more readable and easier to understand.

```
function someFunction() {
  var self = this;

  console.log(self);
}
```

It is important to note that in strict mode ( i.e, when the `"use strict"` directive is in effect ), the value of `this` is undefined in the global scope, whereas in non-strict mode, it is the global object ( `window` in a web browser ). This can be important consideration when writing code that may be executed in different environments.

## Bind, Call and Apply

The `bind()`, `call()` and `apply()` methods are used to call a function with a specific `this` value.

The main difference between these methods is in how they pass arguments to the function being called.

Here is a brief summary of the differences between `bind()`, `call()` and `apply()`:

- `bind()`: This method creates a new function with the specified `this` value and arguments. The new function can be called later with a different `this` value. The original function is not called.
- `call()`: This method calls a function with the specific `this` value and arguments. The original function is called immediately.
- `apply()`: This method is similar to `call()`, but it takes the arguments for the function as an array.

Here is an example that shows how these methods can be used:

```
let obj = {
  x: 10,
  y: 20,
};

function add(a, b) {
  return this.x + this.y + a + b;
}

let bound = add.bind(obj);
let called = add.call(obj, 1, 2);
let applied = add.apply(obj, [3, 4]);

console.log(bound(5, 6)); // 41
console.log(called); // 33
console.log(applied); // 37
```

In this example the `add()` function is called using the `call()` and `apply()` methods with `obj` as the `this` value and with 2 number arguments. This `bind()` method is used to create a new function with `obj` as the `this` value and the number arguments bound to it.
