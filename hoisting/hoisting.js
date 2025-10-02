function someFunction() {
  console.log(someVariable); // undefined

  var someVariable = "Hello world!";
  console.log(someVariable); // "Hello world!"
}

someFunction();
