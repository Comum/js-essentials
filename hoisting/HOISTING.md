[Home](../README.md) > Hoisting

# Hoisting

Hoisting is a behavior where variables and function declarations are automatically moved to the top of their containing scope ( either the global scope or the current function scope ) at the time their containing script or function is executed. This means that, even if a variable or function is declared and initialized at the bottom of a script or function, it will be treated as if it had been declared at the top of the script or function, and will be accessible throughout the entire script or function.

For example, the following code:

```
function someFunction() {
  console.log(someVariable); // undefined

  var someVariable = "Hello world!";
  console.log(someVariable); // "Hello world!"
}
```

is actually executed as if it were written like this:

```
function someFunction() {
  var someVariable;
  console.log(someVariable); // undefined

  someVariable = "Hello world!";
  console.log(someVariable); // "Hello world!"
}
```

This behavior can be confusing to developers who are not aware of it, and can sometimes lead to bugs in code. To avoid these issues, it is recommended to always declare variables and functions at the top of their containing scope, rather than relying on hoisting.
