var lengthOfLongestSubstringjs = function (s) {
  let l = 0,
    max = 0,
    count = 0,
    i = 1;
  let obj = {};
  while (l < s.length) {
    if (!obj[s[l]]) {
      obj[s[l++]] = "1";
      count++;
      max = Math.max(max, count);
    } else {
      obj = {};
      l = i++;
      count = 0;
    }
  }
  return max;
};

var lengthOfLongestSubstring2 = function (s) {
  var map = {};
  var len = s.length;
  var max = 0;
  var start = 0;
  for (var i = 0; i < len; i++) {
    if (map[s[i]] !== undefined) {
      start = Math.max(start, map[s[i]] + 1);
    }
    map[s[i]] = i;
    max = Math.max(max, i - start + 1);
    console.log("map", map);
    console.log("max", max);
    console.log("start", start);
    console.log("------------------------------");
  }
  return max;
};

// console.log(lengthOfLongestSubstring2("dvdf"));
console.log(lengthOfLongestSubstring2("acdafgcf"));
