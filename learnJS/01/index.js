function genIterator(macx) {
  let i = 0;

  return {
    next: function() {
      return {
        done: false,
        value: i++,
      }
    }
  }
}

const it = genIterator();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
