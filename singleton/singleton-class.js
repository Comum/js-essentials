class SingletonController {
  constructor() {
    this.instance;
  }

  createInstance(props) {
    return `I am the instance ${props}`;
  }

  getInstance(props) {
    if (!this.instance) {
      this.instance = this.createInstance(props);
    }

    return this.instance;
  }
}

const singleton = new SingletonController();
const instance1 = singleton.getInstance(1);
const instance2 = singleton.getInstance(2);

console.log(instance1);
console.log(instance2);
