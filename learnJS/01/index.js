const a = fetch("./users.json");

console.log(a);


async function fn() {
  const a = await fetch("./users.json");
  console.log(a.json());
}

fn();
