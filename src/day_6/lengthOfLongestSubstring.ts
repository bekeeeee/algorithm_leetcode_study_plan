function lengthOfLongestSubstring(s: string): number {
  let map: { [key: string]: number } = {};
  let max = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      start = Math.max(start, map[s[i]] + 1);
    }
    map[s[i]] = i;
    max = Math.max(max, i - start + 1);
    console.log("char: " + s[i]);
    console.log("map: ", JSON.stringify(map));
    console.log("start: ", start);
    console.log("max: ", max);
    console.log("---------------------------------------");
  }
  return max;
}

console.log(lengthOfLongestSubstring("abccdfga"));
