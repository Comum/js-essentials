[Home](../README.md) > Closure

# Closure

In Javascript, a closure is a function that has access to the outer ( enclosing ) function's variables --scope chain-- even after the outer function has returned. In other words, a closure is a function that retains access to the variables defined in its outer scope even when the outer function has finished executing. This allows the inner function to continue using the variables from the outer function, even after the outer function has completed. Closures are commonly used in Javascript to create local variables that are accessible only within a specific function, as well as to create function factories ( functions that create and return other functions ) and to handle asynchronous tasks, such as event handling and timers.

An example of a closure could be:

```
function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

let counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
```

Another ( this one famous ) example of a closure could be:

```
for (let i = 0; i < 10; i++) {
  (function (realIndex) {
    setTimeout(function () {
      console.log(realIndex);
    }, 100);
  })(i);
}
```

This closure will allow the loop to actually print the index value, before the increment, with a delay.
