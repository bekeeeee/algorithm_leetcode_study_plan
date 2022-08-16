function checkInclusion(s1: string, s2: string) {
  const len1 = s1.length,
    len2 = s2.length;
  if (len1 > len2) return false;
  const count = Array(26);
  count.fill(0);
  for (let i = 0; i < len1; i++) {
    count[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
    count[s2.charCodeAt(i) - "a".charCodeAt(0)]--;
    console.log("count", count);
  }
  if (allZero(count)) return true;

  for (let j = len1; j < len2; j++) {
    // console.log("char", s2[j]);
    // console.log("char -j", s2[j - len1]);
    console.log("j: ", s2[j]);
    console.log("j-len1: ", s2[j - len1]);

    count[s2.charCodeAt(j) - "a".charCodeAt(0)]--;
    count[s2.charCodeAt(j - len1) - "a".charCodeAt(0)]++;
    console.log("count: ", count);
    console.log("---------------------------------------------------");
    if (allZero(count)) return true;
  }

  return false;

  function allZero(count: number[]) {
    for (let i = 0; i < 26; i++) {
      if (count[i] !== 0) return false;
    }
    return true;
  }
}
console.log(checkInclusion("ab", "gcsbadoooo"));

const checkInclusion2 = (s1: string, s2: string) => {
  const len1 = s1.length,
    len2 = s2.length;
  if (len1 > len2) return false;

  const count = Array(26).fill(0);
  for (let i = 0; i < len1; i++) {
    count[s1.charCodeAt(i) - 97]++;
    count[s2.charCodeAt(i) - 97]--;
  }

  console.log(count);
  if (!count.some(e => e !== 0)) return true;

  for (let i = len1; i < len2; i++) {
    count[s2.charCodeAt(i) - 97]--;
    count[s2.charCodeAt(i - len1) - 97]++;
    if (!count.some(e => e !== 0)) return true;
  }
  return false;
};
