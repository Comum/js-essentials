let singleton = (function() {
  let instance;

  function createInstance() {
    let instance = new Object("I am the instance");

    return instance;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    }
  };
})();

let instance1 = singleton.getInstance();
let instance2 = singleton.getInstance();

console.log(Object.is(instance1, instance2)); // true
