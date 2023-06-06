interface Name {
  first: string;
  second: string;
};

let name1: Name;
name1 = {
  first: "John",
  second: "Doe"
};

name1 = {
  first: "John"
}

name1 = {
  first: "John",
  second: 1234,
}
