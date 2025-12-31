new Promise((resolven, reject) => {
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
