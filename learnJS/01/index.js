class Calculator{
  constructor() {
    this.ans = 0;
    this.flag = null;
  }
  set(val) {
    if(!this.flag)
    {
      this.ans = val;
      return this;
    }
    if(this.flag === "plus") {
      this.ans += val;
      console.log(this.ans);
    } else if (this.flag === "minus") {
      this.ans -= val;
      console.log(this.ans);
    } else if (this.flag === "mutiply") {
      this.ans *= val;
      console.log(this.ans);
    } else if (this.flag === "divide") {
      this.ans /= val;
      console.log(this.ans);
    }
    return this;
  }
  plus() {
    this.flag = "plus";

    return this;
  }
  minus() {
    this.flag = "minus";
    return this;
  }
  mutiply() {
    this.flag = "mutiply";
    return this;
  }
  divide() {
    this.flag = "divide";
    return this;
  }
}

const calc = new Calculator();
calc.set(10).plus().set(3).minus().set(14).mutiply().set(15).divide().set(5);
