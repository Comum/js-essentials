function createAccumulator() {
  let value = 0;

  const accumulator = function (num) {
    value = num;

    return accumulator;
  };

  accumulator.getValue = function () {
    return value;
  };

  accumulator.add = function (num) {
    value = value + num;

    return accumulator;
  };

  accumulator.multiply = function (num) {
    value = value * num;

    return accumulator;
  };

  accumulator.double = function () {
    value = value * 2;

    return accumulator;
  };

  return accumulator;
}

(() => {
  const accumulator = createAccumulator();

  const result = accumulator(2).add(10).double().multiply(10).getValue();

  console.log("result: ", result);
})();
