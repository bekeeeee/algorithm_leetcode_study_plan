function reverseBits(n: number): number {
  let rev: number = 0;

  // traversing bits of 'n'
  // from the right
  while (n > 0) {
    // bitwise left shift
    // 'rev' by 1

    rev <<= 1;
    // 1011 & 1
    // if current bit is '1'
    if ((n & 1) == 1) rev ^= 1;

    // 0101
    // bitwise right shift
    //'n' by 1
    n >>= 1;
  }
  return rev;
}

reverseBits(11);
