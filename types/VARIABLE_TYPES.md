[Home](../README.md) > Variable types

# Variable types

In JS there are 3 main variable types:

- let
- const
- var

## Immutable type

`const`, like the name implies, is used for a constant. When you declare a variable as a const, you cannot reassign a value.

```
const value = 'value';

value = 'new value';
```

The above script will throw an error `Uncaught TypeError: Assignment to constant variable.`.

For [complex data types](VARIABLE_DATA_TYPES), you can still not reassign the variable, however you can extent the original value, if it is an object / array.

```
const arr = [];
arr.push(1); // arr = [1]

const obj = {};
obj[prop] = 'value'; // obj = { prop: 'value' }
```

## Block scoped types

`const` and `let` are called block scoped variable types. This means that they will be bound and only exist inside a block.

```
(function () {
  x = 10;

  if (true) {
    let x = 0;
  }
})();
```

This will throw an error `ReferenceError: x is not defined`, because `x` is used before it was declared.

```
(function () {
  const y = x;

  if (true) {
    const x = 1;
  }
})();
```

Same with this example.

However in the below code:

```
(function () {
  x = 10;

  if (true) {
    var x = 1;
  }
})();
```

The code will run, because in JS, `var` get hoisted to the topmost of the current function. It is the same as running the code below:

```
(function () {
  var x;
  x = 10;

  if (true) {
    x = 1;
  }
})();
```
