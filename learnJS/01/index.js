class Calculator{
  constructor() {
    this.ans = 0;
    this.flag = null;
    this.calcformula = () => {}
  }
  set(val) {
    if(!this.flag)
    {
      this.ans = val;
      return this;
    }
    if(this.flag === "plus") {
      this.calcformula(val);
      // this.ans += val;
      // console.log(this.ans);
    } else if (this.flag === "minus") {
      this.calcformula(val);
      // this.ans -= val;
      // console.log(this.ans);
    } else if (this.flag === "mutiply") {
      this.calcformula(val);
      // this.ans *= val;
      // console.log(this.ans);
    } else if (this.flag === "divide") {
      this.calcformula(val);
      // this.ans /= val;
      // console.log(this.ans);
    }
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
