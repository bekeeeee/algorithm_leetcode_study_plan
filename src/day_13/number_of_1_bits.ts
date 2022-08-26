function hammingWeight(n: number): number {
  let counter = 0;
  while (n) {
    counter += n & 1;
    n = n >> 1;
  }
  return counter;
}

console.log(hammingWeight(11));
