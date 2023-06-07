function sumNumber(numArray: number[]): number {
  let sumValue: number = 0;
  numArray.forEach((val) => {
    sumValue += val;
  });
  return sumValue;
}

console.log(sumNumber([1, 2, 3, 4, 5]));
