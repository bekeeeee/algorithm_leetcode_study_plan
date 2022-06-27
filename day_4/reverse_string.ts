/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let p1 = 0;
  let p2 = s.length - 1;

  for (let i = 0; p1 < p2; i++) {
    swap(p1, p2);
    p1++;
    p2--;
  }
  function swap(p1: number, p2: number) {
    let tempStr = s[p1];
    s[p1] = s[p2];
    s[p2] = tempStr;
  }
}

reverseString(["h", "e", "l", "l", "o"]);
