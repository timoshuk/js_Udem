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

  sum() {
    if (this.data.length === 3) {
      this.data.forEach(function(el) {
        this.sumData += el;
      });
    }
  }

  mul() {
    if (this.data.length === 3) {
      this.data.forEach(function(el) {
        this.mulData *= el;
      });
    }
  }
}

let calc = new Calculator();

calc.read();