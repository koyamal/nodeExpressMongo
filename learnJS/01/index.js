class Calculator{
  constructor() {
    this.ans = 0;
    this.flag = null;
    this.calcformula = null;
  }
  set(val) {
    if(!this.calcformula)
    {
      this.ans = val;
      return this;
    }

    this.calcformula(val);
    return this;
  }
  plus() {
    this.flag = "plus";
    this.calcformula = (val) => {
      this.ans += val;
      console.log(this.ans);
    }
    return this;
  }
  minus() {
    this.flag = "minus";
    this.calcformula = (val) => {
      this.ans -= val;
      console.log(this.ans);
    }
    return this;
  }
  mutiply() {
    this.flag = "mutiply";
    this.calcformula = (val) => {
      this.ans *= val;
      console.log(this.ans);
    }
    return this;
  }
  divide() {
    this.flag = "divide";
    this.calcformula = (val) => {
      this.ans /= val;
      console.log(this.ans);
    }
    return this;
  }
}

const calc = new Calculator();
calc.set(10).plus().set(3).minus().set(14).mutiply().set(15).divide().set(5);
