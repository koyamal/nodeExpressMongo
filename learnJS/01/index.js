class User {
  constructor(name) {
    this.name = name;
    this.isAdmin = false;
    this.path = "/";
  }

  login() {
    console.log(`User: ${this.name}`);
    return true;
  }

  checkRoll() {
    let role = "normal";
    if(this.isAdmin) {
      role = "admin";
    }
    console.log(`you have ${role} roll`);

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
