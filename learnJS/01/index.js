class User {
  constructor(name) {
    this.name = name;
    this.path = "/";
  }

  login() {
    console.log(`User: ${this.name}`);
    return true;
  }

  checkRoll() {
    console.log(`you have normal roll`);
    return true;
  }

  redirect() {
    console.log(`redirect: ${this.path}`);
    return true;
  }
}

class AdminUser extends User {
  constructor(name) {
    super(name);
    this.isAdmin = true;
    this.path = "/admin";
  }

  checkRoll() {
    console.log(`you have admin roll`);
    return true;
  }
}


function logincontroller(user) {
  if(user.login() && user.checkRoll() && user.redirect()) {
    console.log("login success");
  } else {
    console.log("login failed");
  }
}

const tom = new User("Tom");
const bob = new AdminUser("Bob");

console.log(tom);
console.log(bob);


logincontroller(bob);
