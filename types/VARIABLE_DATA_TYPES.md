[Home](../README.md) > Variable data types

# Variable data types

In JS there are two types of variables **primitive** and **complex**.

## Primitive

Primitive types are types that are _constant_ meaning that you cannot unassign them.

- `Boolean` - true or false
  - you can easily cast a variable to a boolean with at least 2 ways
    - `Boolean(variable)`
    - `!!variable`
- `Number` - 0, 1, 2, ... n or NaN
  - `NaN` even though literally means `Not a Number` it has the type of `Number`
  - In order to test if a number is `NaN` we can:
    - `NaN === NaN` will return false
    - `isNaN(NaN)` will return true
    - `Object.is(NaN, NaN)` will return true
- `BigInt` - BigInt("0x1fffffffffffff")
- `String` - a, b, word, ...
- `Symbol`
  - Symbols are create like symbol("foo"), it will always be unique
- `undefined`
- `null`
  - There is a well known JS bug with the null type, `typeof null` will return `'object'`, so in order to know if a value is null you'll have to do at least two checks `!variable && typeof variable === 'object'`

## Complex

Complex types can return any type, both primitive or complex.

### Objects

> ( Nearly ) everything in Javascript is an object.

You are probably familiar with this quote, even though it is somewhat true, it is not entirely true, like the primitive types in the section above.

```
const myObj = { // typeof -> object
  numberProp: 10, // typeof -> number
  stringProp: '10', // typeof -> string
  objProp: { // typeof -> object
    booleanProp: true // typeof -> boolean
  }
}
```

### Arrays

An array in JS can be thought of as an object where its props are indexed values.

```
const myArr = [1, 2, 3]; // typeof object

myArr[0]; // 1 typeof -> number
```

Arrays will also have some specific methods that will only work on this data structure and not on objects.

For example `.map`, `.filter` and `.reduce`.

### Functions

Like an object or an array, a function can return any type, primitive or complex.
