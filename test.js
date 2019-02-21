class Calculator {
  constructor() {
    this.data = [];
    this.sumData = 0;
    this.mulData = 0;
  }
  read() {
    for (let i = 0; i < 3; i++) {
      this.data.push(+prompt("enter integer"));
    }
  }

  get sum() {
    if (this.data.length === 3) {
      this.data.forEach(function(el) {
        this.sumData += el;
      });
      return this.sumData;
    }

    return this.sumData;
  }

  get mul() {
    if (this.data.length === 3) {
      this.data.forEach(function(el) {
        this.mulData *= el;
      });
    }
    return this.mulData;
  }
}

let calc = new Calculator();

calc.read();
