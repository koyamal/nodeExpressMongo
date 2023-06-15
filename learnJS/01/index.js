const a = fetch("./users.json");

console.log(a);


async function fn() {
  const res = await fetch("./users.json");
  const json = await res.json();
  console.log(json);
}

fn();
