function isPowerOfTwo(n: number): boolean {
  let i = 1;
  while (i < n) {
    i *= 2;
  }
  return i === n;
}
