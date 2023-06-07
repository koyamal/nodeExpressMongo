function sumNumber(numArray: number[]): void {
  let sumValue: number = 0;
  numArray.forEach((val) => {
    sumValue += val;
  });
  console.log(sumValue);
}

sumNumber([1, 2, 3, 4, 5]);
sumNumber([5]);

function judgeArrayOrNot(inputValue: string|string[]): boolean {
  if(typeof inputValue === "string"){
    return false;
  }
  return true;
};

console.log(judgeArrayOrNot(["a", "b"]));
console.log(judgeArrayOrNot("a"));
