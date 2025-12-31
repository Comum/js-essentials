[Home](../README.md) > Promises

# Promises in JS

This is a promise explination based on the promise video by [Lydia Hallie](https://www.youtube.com/watch?v=Xs1EMmBLpn4).

## What are promises?

Promises are a way in JavaScript to represent and manage asynchronous operations. They allow us to register callbacks that will run once an operation completes, without blocking the rest of the program.

### How are promises created?

We can create a promise using the promise constructor:

```
new Promise((resolve, reject) => { ... });
```

Internally (at the specification level), a promise keeps track of its state and result using internal slots such as:

- PromiseState: `pending`, `fulfilled` or `rejected`
- PromiseResult: the fulfillment value or rejection reason
- PromiseFulfillReactions:
- PromiseRejectReactions:
- PromiseIsHandled: `false` or `true`

### How can we interact with a promise?

We can resolve a promise by calling the `resolve` function that we get as an argument from the executor function passed in the promise constructor.

```
resolve('Done!');
```

Then the PromiseState is set to `fulfilled` and the PromiseResult is set to the value passed in the resolve call, in this case `Done!`.

Alternatively, we can reject a promise by calling the `reject` function:

```
reject('Fail!');
```

Then the PromiseState is set to `rejected` and the PromiseResult is set to the value passed in the reject call, in this case `Fail!`.

### What makes promises special?

To put it succinctly the PromiseFulfillReactions and PromiseRejectReactions fields.

These fields have something called a promise reaction records. We can create one of those by chaining a `then` or a `catch` to the promise.

```
new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
})
.then((result) => { console.log(result) });
```

So, in the code above, the Promise constructor creates the promise, the executor function runs and the `setTimeout` is called. This will schedule the resolve call with at least a 1000ms delay ( for more detail here check the call stack section ).

After that, `.then` is called and a Promise Reaction Record is created and stored internally in `PromiseFulfillReactions`.

When `.then` is called, a fulfillment handler is registered. This handler will be executed asynchronously once the promise is fulfilled. At this point, the handler does not run yet.

Once our timer is done, the executor function passed to the `setTimeout` runs and the `PromiseState` is updated to `fulfilled`, and the `PromiseResult` to `"Done!"`.

The `PromiseFulfillReactions` will then trigger the executor function and call with the value `"Done!"`, so that will be logged to the console.

A detail about the `.then` is that it itself returns a promise.

### So, can we chain `.then` and `.catch`?

```
new Promise((resolve, reject) => {
    resolve(1);
})
.then((result) => result * 2)
.then((result) => result * 2)
.then((result) => { console.log(result) });
```

In this example, we will see the value `4` printed in the console.

### Example, what will be printed in this next example?

```
new Promise((resolve, reject) => {
    console.log(1)
    resolve(2);
})
.then((result) => { console.log(result); });

console.log(3)
```

In the above example it will be logged:

```
1
3
2
```

### What about `.catch`? And is there any other chainable method?

The `.catch` method can be chained after all the `.then` and it works basically like the `catch` in the try / catch block.

```
new Promise((resolve, reject) => {
    resolve(1);
})
.then((result) => result * 2)
.then((result) => result * 2)
.then((result) => { console.log(result) })
.catch((error) => { console.log(error) });
```

The `.catch` will run if there is an error in any of the methods it is chained to, including the Promise constructor.

There is another chainable method that we can use called the `.finally`. This method runs regardless of whether the promise was fulfilled or rejected. It does not receive the resolved value or error, and it does not change the value passed down the chain unless it throws an error itself.

```
new Promise((resolve, reject) => {
  throw new Error("bere!");

  resolve(1);
})
  .then((result) => result * 2)
  .then((result) => result * 2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("I run nonetheless");
  });

```

After the constructor and all the chainable methods are called ( meaning after the Promise Reaction Records are created ), the `PromiseIsHandled` field is set to `true`.
