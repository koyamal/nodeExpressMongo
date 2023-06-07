function sumNumber(numArray: number[]): number {
  let sumValue: number = 0;
  numArray.forEach((val) => {
    sumValue += val;
  });
  return sumValue;
}

console.log(sumNumber([1, 2, 3, 4, 5]));
console.log(sumNumber([5]));

function judgeArrayOrNot(inputValue: string|string[]): boolean {
  if(typeof inputValue === "string"){
    return false;
  }
  return true;
};

console.log(judgeArrayOrNot(["a", "b"]));
console.log(judgeArrayOrNot("a"));
