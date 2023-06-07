function reverse<T>(items: T[]): T[] {
  const toreturn = [];
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i]);
  }
  return toreturn;
}

const sample = [1, 2, 3];
const reversed = reverse(sample);

console.log(reversed);

reversed[0] = 10;
// reversed[1] = "a";

const sample2 = ["1", "2", "3"];
const reversed2 = reverse(sample2);

console.log(reversed2);

reversed2[1] = "a";
reversed2[2] = 2;


