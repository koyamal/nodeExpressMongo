const person = {
  name: "Tom",
  bye: function () {
    console.log("Bye " + this.name);
  },
  hello: function(greeting) {
    console.log(greeting + " " + this.name);
    return greeting + " " + this.name;
  },
  hello1sa: function() {
    setTimeout(() => {
      console.log("Hello " + this.name);
    },1000);
  },
  hello1sb: function() {
    function a() {
      console.log("Hello " + this.name);
    }
    setTimeout(a.bind(this), 1000);
  },
  hello1sc: function() {
    const this_ = this;
    setTimeout(() => {
      console.log("Hello " + this_.name);
    }, 1000);
  },
  hello1sd: function() {
    setTimeout(this.hello.bind(this, "hello"), 1000);
  },
  hello1se: function() {
    setTimeout(() => { this.hello("hello")}, 1000);
  },
  hello1sf: function() {
    const _this = this;
    setTimeout(function() {
      _this.hello("hello");
    }, 1000);
  }
}

// setTimeout(person.hello.bind(person, "hello"), 1000);
// setTimeout(() => {
//   person.hello("hello");
// }, 1000);

// setTimeout(person.bye.bind(person), 1000);


person.hello1sa();
person.hello1sb();
person.hello1sc();
person.hello1sd();
person.hello1se();
person.hello1sf();
