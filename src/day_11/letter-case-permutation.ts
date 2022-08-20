function letterCasePermutation(s: string): string[] {
  const result: string[] = [];
  const dfs = (index: number, s: string, slate: string[]) => {
    // base case
    if (index === s.length) {
      result.push(slate.join(""));
      return;
    }

    // dfs recursive case
    let char = s[index];

    if (!Number.isInteger(parseInt(char))) {
      // uppercase
      slate.push(char.toUpperCase());
      dfs(index + 1, s, slate);
      slate.pop();

      // lowercase
      slate.push(char.toLocaleLowerCase());
      dfs(index + 1, s, slate);
      slate.pop();
    } else {
      slate.push(char);
      dfs(index + 1, s, slate);
      slate.pop();
    }
  };
  dfs(0, s, []);
  return result;
}

console.log(letterCasePermutation("as1c"))