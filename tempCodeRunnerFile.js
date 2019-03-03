class myObj{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  info(){
    console.log(this.name + " " + this.age);
  }
}

let iAm = new myObj('Sasha', 32);

iAm.info();