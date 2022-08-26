const combine = function (n: number, k: number) {
  let result: number[][] = [];
  function dfs(index: number, current: number[]) {
    // base case
    // console.log("index: " , index);
    console.log("current: ", current);

    if (current.length === k) result.push([...current]);
    for (let i = index; i <= n && current.length <= k; i++) {
      //   console.log("current: " , current);

      current.push(i);
      if (current.length <= k) dfs(i + 1, current);
      // trackback
      current.pop();
    }
  }
  dfs(1, []);

  // console.log(result);

  return result;
};
console.log(combine(4, 2));
